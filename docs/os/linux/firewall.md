# 리눅스 방화벽 간단 사용

리눅스 방화벽 소프트웨어로는 `iptables`, `firewalld`, `ufw` 등이 있다.

## iptables

기본적으로 설치되어있거나 오래된 리눅스 배포판에서 주로 사용되었던 방화벽 소프트웨어이다.

아래와 같이 방화벽 규칙을 추가할 수 있다.

```shell
# TCP (-p tcp) 22번 포트(--dport)를 영구적(--permanent)으로 개방하려는 경우
$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# TCP 6000 - 6010 포트를 모두 개방하려는 경우
$ sudo iptables -A INPUT -p tcp --dport 6000:6010 -j ACCEPT
```

## firewalld

RedHat 계열 리눅스 배포판에서 주로 사용되며 설치되지 않았을 경우 패키지관리 소프트웨어를 통해 설치할 수도 있다.

아래와 같이 방화벽 규칙을 추가할 수 있다.

```shell
# TCP 22번 포트(--add-port)를 영구적(--permanent)으로 개방하려는 경우
$ sudo firewall-cmd --zone=public --add-port=22/tcp --permanent

# TCP 6000 - 6010 포트를 모두 개방하려는 경우
$ sudo firewall-cmd --zone=public --add-port=6000-6010/tcp --permanent
```

또는 아래와 같이 특정 서비스에 대해 필요한 포트를 개방할 수 있다.

```shell
# XDMCP 접속에 사용되는 177/udp, 6000-6010/tcp 포트 개방
$ sudo firewall-cmd --permanent --add-service=xdmcp
```

## ufw

Debian 계열 리눅스 배포판에서 주로 사용된다.

아래와 같이 방화벽 규칙을 추가할 수 있다.

```shell
# TCP 22번 포트(allow)를 개방하려는 경우
$ sudo ufw allow 22/tcp

# TCP 6000 - 6010 포트를 모두 개방하려는 경우
$ sudo ufw allow 6000:6010/tcp
```
