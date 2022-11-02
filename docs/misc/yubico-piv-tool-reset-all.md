# Yubikey 하드웨어 토큰 초기화

**[Yubico](https://www.yubico.com/)** 에서 제공하는 `Yubikey`의 하드웨어 토큰을 기본값으로 초기화해야 하는 경우 아래 방법을 따른다. 초기화 후 기존의 토큰 데이터가 모두 사라질 수 있으니 긴급할 시에만 사용한다.

진행하기 전 `CLI` 기반의 `Yubico PIV Tool`이 설치되어 있어야 한다.

- 다운로드 링크: https://developers.yubico.com/yubico-piv-tool/Releases/

먼저 토큰 `PIN`이나 `PUK` 중 하나가 Block 상태로 되어있다면 아래 명령어를 사용하여 PIN과 PUK 모두 Block 상태로 만든다. 아래와 같이 동일 명령어를 각각 3번씩 실행해야 한다.

```shell
$ yubico-piv-tool -a verify -P 00000000
$ yubico-piv-tool -a verify -P 00000000
$ yubico-piv-tool -a verify -P 00000000
$ yubico-piv-tool -a unblock-pin -P 00000000 -N 00000000
$ yubico-piv-tool -a unblock-pin -P 00000000 -N 00000000
$ yubico-piv-tool -a unblock-pin -P 00000000 -N 00000000
```

이후 아래 명령어로 토큰 초기화 명령을 실행한다.

```shell
$ yubico-piv-tool -a reset
$ yubico-piv-tool -a set-chuid
$ yubico-piv-tool -a set-ccc
```

## 토큰 초기화 이후 PIN, PUK 변경하기

`PIN`과 `PUK`은 각각 6자 이상 12자 이하로 설정한다. `PIN`은 인증용으로 사용되며 `PUK`은 백업용 키로 사용된다. 가능한 `PIN`과 `PUK`을 다르게 설정할 것이 좋다.

### PIN 변경

```shell
yubico-piv-tool -a change-pin -P 123456 -N {새로운 PIN 암호}
```

### PUK 변경

```shell
yubico-piv-tool -a change-puk -P 12345678 -N {새로운 PUK 암호}
```
