# Mimalloc Memory Allocator

`mimalloc`은 Microsoft에서 개발한 **메모리 관리 라이브러리**(Allocator라고도 부름)이며 `jemalloc`의 대안이기도 하다. Rust나 Node.js 등의 런타임 환경에서 해당 라이브러리를 참조하여 사용할 수 있다.

mimalloc을 활용하면 메모리 힙 관리를 기본 관리 라이브러리보다 더 효율적으로 처리하여 메모리 누수 현상을 줄일 수 있다. 하지만 서비스 운영 상황이나 규모 등에 따라 효과가 없거나 오히려 악영향을 미칠 수 있으므로 자신의 환경에 맞게 사용 여부를 결정해야 한다.

## 설치

해당 라이브러리 파일을 운영체제에 직접 설치해야 한다. 운영체제별로 설치해야 할 패키지가 다를 수 있다. 직접 패키지로 설치하는 방법보다 특정 버전을 빌드해서 사용하는 것을 권장한다.

아래는 Ubuntu 기준으로 라이브러리를 직접 빌드하는 방법이다.

```shell
# 버전 설정
$ export MIMALLOC_VERSION=v3.x.x
$ export BUILD_DIR=/path/to/build/directory

$ apt-get update && apt-get install -y --no-install-recommends build-essential cmake git ca-certificates
$ rm -rf /var/lib/apt/lists/*

$ mkdir ${BUILD_DIR}
$ git clone --depth 1 --branch ${MIMALLOC_VERSION} https://github.com/microsoft/mimalloc.git ${BUILD_DIR}

$ mkdir -p ${BUILD_DIR}/out && cd ${BUILD_DIR}/out
$ cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DMI_BUILD_STATIC=OFF \
    -DMI_BUILD_OBJECT=OFF \
    -DMI_BUILD_TESTS=OFF
$ make -j"$(nproc)"

$ cp -L /src/out/libmimalloc.so /opt/libmimalloc.so
```

아래는 dockerfile의 예시이다.

```dockerfile
# Install & Build Mimalloc
FROM debian:trixie-slim AS mimalloc-builder

ARG MIMALLOC_VERSION=v3.3.2

RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential cmake git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN git clone --depth 1 --branch ${MIMALLOC_VERSION} \
        https://github.com/microsoft/mimalloc.git /src

RUN mkdir -p /src/out && cd /src/out \
    && cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DMI_BUILD_STATIC=OFF \
        -DMI_BUILD_OBJECT=OFF \
        -DMI_BUILD_TESTS=OFF \
    && make -j"$(nproc)"

RUN cp -L /src/out/libmimalloc.so /opt/libmimalloc.so

# Apply Mimalloc
COPY --from=mimalloc-builder /opt/libmimalloc.so /usr/local/lib/libmimalloc.so
ENV LD_PRELOAD=/usr/local/lib/libmimalloc.so
ENV MIMALLOC_PURGE_DELAY=5000
ENV MIMALLOC_PURGE_DECOMMITS=1
ENV MIMALLOC_USE_NUMA_NODES=1
```

## 옵션

| 환경변수 | 기본값 | 권장값 (Fastify+Docker) | 설명 |
| --- | --- | --- | --- |
| `MIMALLOC_PURGE_DELAY` | `1000` | `1000` | 미사용 OS 페이지를 N ms 후 OS에 반환. 작을수록 RSS↓·syscall↑, 클수록 재할당 비용↓·RSS↑. `0`은 즉시 반환, `-1`은 비활성화. |
| `MIMALLOC_PURGE_DECOMMITS` | `1` | `1` | `1`: `MADV_DONTNEED`(RSS 즉시 감소). `0`: `MADV_FREE`(지연 감소, 약간 빠름). 메모리 한계 빡빡한 컨테이너는 `1`. |
| `MIMALLOC_USE_NUMA_NODES` | (자동) | `1` | NUMA 노드 수 강제 지정. 가상화·컨테이너에서 NUMA 오감지로 인한 성능 저하 예방. 단일 노드 컨테이너면 `1`. |
| `MIMALLOC_ALLOW_THP` | `1` (Linux) | `1` | Transparent Huge Pages 허용. 호스트 THP가 켜져 있으면 자동 활용. v3.2+에선 `MIMALLOC_MINIMAL_PURGE_SIZE`도 자동으로 2MiB로 맞춰 THP가 안 깨지게 함. |
| `MIMALLOC_EAGER_COMMIT` | `1` | `1` | 페이지를 즉시 커밋(가상→실제 매핑). RSS는 늘지 않고 가상 메모리만 잡히며 페이지 폴트 비용↓. 끄지 마세요. |
| `MIMALLOC_ARENA_EAGER_COMMIT` | `2` | `2` | 1GiB 아레나 단위 eager commit. `2`=overcommit 시스템(Linux)에서만 켜기. `1`=항상 켜기, `0`=항상 끄기. Linux면 기본 `2` 그대로. |
| `MIMALLOC_RESERVE_OS_MEMORY` | `0` | `0` (옵션) | 시작 시 N KiB OS 메모리 예약. 메모리 패턴이 예측 가능하고 안정적인 RSS를 원할 때. 예: `2097152`(=2GiB). |
| `MIMALLOC_LIMIT_OS_ALLOC` | `0` | `0` | OS에서 더 이상 메모리를 받지 않게 잠금. 컨테이너 OOM 대신 mimalloc 단에서 allocation 실패시키고 싶을 때만. 평소엔 `0`. |
| `MIMALLOC_ALLOW_LARGE_OS_PAGES` | `0` | `0` | 2/4MiB large page 사용. 호스트 hugepage 설정 없이 켜면 무의미. 컨테이너 환경 기본은 `0`. |
| `MIMALLOC_RESERVE_HUGE_OS_PAGES` | `0` | `0` | 시작 시 N개의 1GiB 휴지 페이지 예약. 호스트가 hugepages 미설정이면 의미 없음. K8s/일반 Docker에선 `0`. |
| `MIMALLOC_EAGER_COMMIT_DELAY` | `1` | `1` | 스레드의 첫 N개 세그먼트(4MiB)는 eager commit 지연. 단명 스레드가 huge page 영역을 점유하지 않게 보호. 기본값 OK. |
| `MIMALLOC_VERBOSE` | `0` | `0` (배포 검증 시 `1`) | 시작 시 stderr에 mimalloc 설정·NUMA·페이지 상태 출력. 배포 직후 한 번 켜서 적용 확인 후 끄기. |
| `MIMALLOC_SHOW_STATS` | `0` | `0` (튜닝 시 `1`) | 프로세스 종료 시 stderr에 힙 통계 덤프. 튜닝 비교나 누수 의심 시에만 켜기. |
| `MIMALLOC_SHOW_ERRORS` | `1` | `1` | 에러·경고 메시지 출력. 끄지 마세요. |
| `MIMALLOC_MAX_ERRORS` | `16` | `16` | 동일 에러 메시지 최대 출력 횟수. 로그 폭주 방지용 상한. 기본값 OK. |
| `MIMALLOC_DESTROY_ON_EXIT` | `0` | `0` | 종료 시 모든 힙 해제. 누수 검사(valgrind 등) 시만 `1`. 일반 운영은 `0`이 빠름. |
| `MIMALLOC_DISALLOW_ARENA_ALLOC` | `0` | `0` | `1`이면 일반 아레나 사용 금지. 특수 멀티힙 시나리오용. 일반 서버는 `0`. |
