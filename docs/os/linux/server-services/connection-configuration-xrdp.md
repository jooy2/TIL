# Xrdp 연결 설정

RDP 프로토콜을 활용하여 리눅스에서 원격 데스크톱 서비스를 구성할 수 있다. 로그아웃 후 다시 로그인해도 이전의 세션(작업 환경)이 유지되며 드라이브 리다이렉션, 클립보드 등의 다양한 기능을 지원한다. Xrdp는 2GB 이상의 RAM, 2016년 이후 리눅스 배포판에서 구성하는 것을 권장한다.

먼저 리눅스 시스템에 Xfce4나 Gnome Desktop같은 데스크톱 환경이 설치되어있어야 한다.

## 방화벽 설정

RDP 포트인 3389/tcp 포트를 연다.

### ufw (Debian/Ubuntu 계열)

```shell
$ sudo ufw allow 3389/tcp
```

### Firewalld (RedHat/CentOS 계열)

```shell
$ sudo firewall-cmd --zone=public --add-port=3389/tcp --permanent
```

### Iptables

```shell
$ sudo iptables -A INPUT -p tcp -m tcp --dport 3389 -j ACCEPT
```

## Xrdp 패키지 설치

### Debian / Ubuntu 계열

```shell
$ sudo apt install xrdp
```

### RedHat / CentOS 계열

```shell
$ sudo dnf install xrdp
```

## Xrdp 환경설정

```shell
/etc/xrdp/xrdp.ini
```

### 그래픽 데스크톱 환경 구성

특정 그래픽 데스크톱 환경으로 시작하려면 아래 파일을 편집하여 하단에 내용을 추가한다.

- `/etc/xrdp/startwm.sh`

#### Gnome Desktop, Xubuntu Desktop (기본값)

```shell
exec /bin/sh /etc/X11/Xsession
```

#### Xfce4

기본값을 제거한 후 다음 내용을 추가한다.

```shell
xfce4-session
```

### 색상 프로파일 편집

Xrdp 접속 시 색상 프로파일 관련 권한을 묻는다면 아래 파일을 편집하여 해결할 수 있다.

```shell
$ sudo vim /etc/polkit-1/localauthority/50-local.d/45-allow-colord.pkla
```

파일 편집기로 파일을 열고 아래 내용으로 수정한다.

```shell
[Allow Colord all Users]
Identity=unix-user:*
Action=org.freedesktop.color-manager.create-device;org.freedesktop.color-manager.create-profile;org.freedesktop.color-manager.delete-device;org.freedesktop.color-manager.delete-profile;org.freedesktop.color-manager.modify-device;org.freedesktop.color-manager.modify-profile
ResultAny=no
ResultInactive=no
ResultActive=yes
```

이후 서비스를 재시작해야 할 수 있다. (하단 참고)

### 서비스 시작 구성

시스템 재시작 시 마다 Xrdp 서비스를 시작하려면 다음 명령을 사용한다.

```shell
$ sudo systemctl enable xrdp
# OR
$ sudo service xrdp enable
```

아래 명령어로 서비스를 시작한다.

```shell
$ sudo systemctl start xrdp
# OR
$ sudo service xrdp start
```

## 접속 방법

**Windows**나 **macOS**에서 제공하는 **RDP 클라이언트**를 활용한다.

- Microsoft Terminal Services Client (mstsc.exe)
- Microsoft Remote Desktop

주소창에 `호스트:포트번호`를 입력하여 접속한다.
