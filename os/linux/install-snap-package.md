# 리눅스 Snap 설치

## 개요

**Snap**은 제 3자 소프트웨어 패키지(`.snap`)를 제공하는 리눅스 패키지 관리자이다. **Ubuntu**와 같은 유명 배포판에서는 스토어 앱과 연동 되어있기도 하며 간단한 커맨드라인으로 사용자 디렉토리에 샌드박스 앱을 설치하여 손쉽게 관리할 수 있다.

`snapd`는 이러한 Snap 패키지를 관리할 수 있게 해주는 서비스 명칭이며 `snapcraft`는 `.snap` 패키지를 스토어에 업로드하거나 관리하는 CLI 도구이다. **Ubuntu**에는 기본으로 `snapd`가 설치되어있다.

- Snapcraft 스토어 페이지 (https://snapcraft.io)

## 설치

### Ubuntu 20.04 이상

**Ubuntu**는 `snapd`패키지가 기본적으로 설치되어있으며 아래 명령어로 설치 여부를 확인할 수 있다.

```shell
$ snap --version
snap    2.50.1
snapd   2.50.1
series  16
ubuntu  20.04
kernel  5.8.0-50-generic
```

### Ubuntu 18.04 이하 / Debian 계열

Ubuntu 18.04 이하의 오래된 Debian 계열에서는 `snapd`가 기본 설치되어 있지않다. 아래 명령어로 `snapd`를 설치하여 활성화한다.

```shell
$ sudo apt install snapd
$ sudo systemctl enable snapd (OR... service snapd enable)
$ sudo systemctl start snapd (OR... service snapd start)
$ sudo snap install core
```

### CentOS 6 - 8 / RedHat 계열

**CentOS** 및 **RedHat Enterprise Linux**는 `snapd`가 기본 설치되어있지 않다. `snapd` 패키지가 존재하는 `epel-release` 저장소를 추가 구성해주어야 한다.

```shell
$ sudo dnf install epel-release
$ sudo dnf update
$ sudo dnf install snapd
$ sudo systemctl enable snapd (OR... service snapd enable)
$ sudo systemctl start snapd (OR... service snapd start)
$ sudo snap install core
```

## 사용 방법

### 패키지 설치

패키지를 설치/관리하려는 사용자 계정에서 다음 커맨드라인 명령을 실행한다.

```shell
$ snap install {PACKAGE_NAME} {...OPTIONS}
```

`{PACKAGE_NAME}`은 실제 배포중인 패키지의 설치명으로 필수로 입력해야 하는 값이며 공백 없는 소문자로 구성된 키워드여야 한다.

특정 채널(`beta`, `candidate`, `edge`)로 패키지를 설치하려면 아래와 같이 사용한다.

```shell
$ snap install {PACKAGE_NAME} --{CHANNEL_NAME}
```

`{CHANNEL_NAME}`에는 소문자 키워드의 채널명이 들어간다.

### 패키지 삭제

```shell
$ snap remove {PACKAGE_NAME}
```

### 패키지 업데이트

```shell
$ snap refresh
```

## 문제 해결

패키지 설치 도중, `cannot find required base “core18”` 문제가 발생할 수 있다.

```shell
2021-06-04T08:49:14+09:00 INFO Waiting for restart...
error: cannot perform the following tasks:
- Mount snap "portx" (24) (cannot find required base "core18")
```

다음 명령어로 `snapd` `core`를 설치한 후 패키지를 다시 설치하면 문제가 해결된다.

```shell
$ sudo snap install core
```

특정 `snap` 패키지 설치 도중 다음과 같은 에러가 발생할 수 있다.

```shell
error: cannot read snap file: cannot run unsquashfs: ----- Read on filesystem
       failed because EOF read_id_table: failed to read id index table FATAL
       ERROR: File system corruption detected -----
```

이는 일반적으로 설치하려고 시도한 `snap` 파일이 잘못되었거나 깨져있을 때 발생한다. 파일을 다시 다운로드하여 시도해야 한다.
