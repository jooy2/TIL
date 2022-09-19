# 리눅스 Multipass 사용하기

**[Multipass](https://multipass.run)**는 우분투를 배포하는 캐노니컬 그룹에서 개발한 가상환경을 쉽게 구성할 수 있는 도구이다.
여러 리눅스 배포판 환경에서 개발이나 배포가 필요하거나, 테스트를 위해 사용되며 설치 파일을 통해 별도로 설치 과정을 할 필요 없이 커맨드라인 명령어를 통해 간단히 가상머신을 구성하거나, 켜고 끌 수 있다.

`Multipass`는 아래 링크에서 설치할 수 있다. 윈도우와 리눅스, macOS를 모두 지원한다.
https://multipass.run

## Multipass 기본 사용

```shell
$ multipass find
18.04                       bionic            20220901         Ubuntu 18.04 LTS
20.04                       focal,lts         20220824         Ubuntu 20.04 LTS
22.04                       jammy             20220902         Ubuntu 22.04 LTS
anbox-cloud-appliance                         latest           Anbox Cloud Appliance
charm-dev                                     latest           A development and testing environment for charmers
docker                                        latest           A Docker environment with Portainer and related tools
jellyfin                                      latest           Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media.
minikube                                      latest           minikube is local Kubernetes
```

`myUbuntu`라는 이름의 가상머신을 생성하려면 다음 명령어를 사용한다.

```shell
$ multipass launch --name myUbuntu "bionic"
Launched: bionic
```

이제 `myUbuntu`가 생성되었다면, `multipass shell` 명령으로 터미널에 접근할 수 있다. 

```shell
$ multipass shell myUbuntu
```

그래픽 환경을 구성하려면 `xrdp`나 `xdmcp` 등의 추가 구성이 필요할 수 있다.
