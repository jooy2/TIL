# Python PyPI 패키지 배포

Python에는 [PyPI](https://pypi.org)라는 패키지 저장소가 있다. 여기에 자신이 만든 패키지를 업로드하면 `pip install`로 내려받을 수 있다.

배포 방식은 여러 가지가 있지만, 어느 방식이든 결과물은 같다. `sdist`(소스 배포본, `.tar.gz`)와 `wheel`(빌드 배포본, `.whl`) 두 개를 만들어 업로드하는 것이다.

## 배포 전 확인할 것

- `pyproject.toml`이 프로젝트 최상단에 있어야 하며 `name`, `version`, `description`, `readme`, `license`, `requires-python`이 채워져 있어야 한다.
- **같은 버전은 두 번 올릴 수 없다.** 올린 파일을 삭제해도 그 버전 번호는 다시 쓸 수 없으므로, 배포 전에 버전을 먼저 올린다.
- `dist/` 폴더를 비우고 빌드한다. 이전 버전 산출물이 남아 있으면 `dist/*`로 업로드할 때 같이 올라간다.

## build와 twine으로 배포

특정 도구에 묶이지 않는 표준 방식이다. 빌드 백엔드가 setuptools든 hatchling이든 상관없이 동작한다.

```shell
$ pip install build twine
```

빌드한다.

```shell
$ rm -rf dist
$ python -m build
```

`dist/` 아래에 `.tar.gz`와 `.whl`이 생긴다. 업로드 전에 메타데이터가 올바른지 검사한다.

```shell
$ python -m twine check dist/*
```

업로드는 API 토큰으로 한다. 사용자 이름은 `__token__` 고정이고, 비밀번호 자리에 `pypi-`로 시작하는 토큰 값을 넣는다.

```shell
$ export TWINE_USERNAME=__token__
$ export TWINE_PASSWORD='pypi-...'
$ python -m twine upload dist/*
```

토큰을 명령줄에 그대로 적으면 셸 히스토리에 남는다. 다음처럼 입력받으면 화면에도 히스토리에도 남지 않는다.

```shell
$ read -rs -p 'PyPI token: ' TWINE_PASSWORD && export TWINE_PASSWORD TWINE_USERNAME=__token__
$ python -m twine upload dist/*
$ unset TWINE_PASSWORD TWINE_USERNAME
```

실제 배포 전에 시험해보려면 TestPyPI에 올린다. twine은 `pypi`와 `testpypi` 주소를 내장하고 있어 별도 설정 없이 이름만 지정하면 된다.

```shell
$ python -m twine upload --repository testpypi dist/*
```

TestPyPI는 PyPI와 계정도 토큰도 별개다.

## uv로 배포

[uv](https://docs.astral.sh/uv)를 쓰면 빌드와 업로드를 한 도구로 처리할 수 있다.

```shell
$ uv build
$ uv publish --token 'pypi-...'
```

토큰은 `UV_PUBLISH_TOKEN` 환경 변수로도 넘길 수 있다.

```shell
$ UV_PUBLISH_TOKEN='pypi-...' uv publish
```

`tool.uv.sources`로 로컬 경로 의존성을 쓰고 있다면 빌드 시 다음 옵션을 붙인다. 다른 빌드 도구에서도 정상적으로 빌드되는지 확인하기 위한 것이다.

```shell
$ uv build --no-sources
```

TestPyPI에 올리려면 `pyproject.toml`에 인덱스를 먼저 선언해야 한다.

```toml
[[tool.uv.index]]
name = "testpypi"
url = "https://test.pypi.org/simple/"
publish-url = "https://test.pypi.org/legacy/"
explicit = true
```

```shell
$ uv publish --index testpypi
```

## 빌드 도구로 직접 배포

프로젝트에서 쓰는 빌드 도구가 업로드 기능을 함께 제공하는 경우도 있다.

```shell
$ hatch publish
$ poetry publish --build
$ flit publish
```

토큰을 지정하는 방법은 도구마다 다르므로 각 문서를 확인한다.

## GitHub Actions에서 토큰 없이 배포

PyPI의 Trusted Publishers에 리포지토리와 워크플로 파일 이름을 등록해두면, 토큰을 저장하지 않고 GitHub의 OIDC로 인증할 수 있다. 저장소 Secrets에 토큰을 넣어둘 필요가 없어 유출 위험이 사라진다.

```yaml
jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
    steps:
      - uses: actions/checkout@v5
      - run: pipx run build
      - uses: pypa/gh-action-pypi-publish@release/v1
```

`id-token: write` 권한이 반드시 필요하다. 이 권한은 워크플로 전체가 아니라 배포하는 job에만 주는 것이 좋다.

## 토큰 취급

- 토큰은 계정 전체가 아니라 **프로젝트 범위**로 발급한다. 첫 배포 전에는 프로젝트가 없어 계정 범위로 발급해야 하는데, 배포 후에 프로젝트 범위로 다시 발급하고 기존 토큰은 폐기한다.
- `~/.pypirc`에 저장하면 편하지만 평문으로 남는다. 개인 장비가 아니라면 환경 변수를 쓴다.
- 토큰이 노출됐다면 PyPI 계정 설정에서 즉시 폐기(revoke)한다.
