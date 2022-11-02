# Telnet 연결 설정 (Xinetd)

## `xinetd` 설치

### RedHat 계열 (dnf)

```shell
$ sudo dnf install telnet
$ sudo dnf install telnet-server
$ sudo dnf install xinetd
```

### Debian 계열 (apt)

```shell
$ sudo apt install xinetd
$ sudo apt install telnet

# telnet-server 패키지가 검색되지 않는 경우 telnetd로 시도
$ sudo apt install telnet-server
```

## 방화벽 설정

방화벽 소프트웨어에 따라 `tcp` 23번 포트를 개방해야 한다. 방화벽 소프트웨어는 리눅스 배포판별로 다를 수 있다.

### iptables

```shell
$ sudo iptables -A INPUT -p tcp --dport 23 -j ACCEPT
```

### firewalld

```shell
$ sudo firewall-cmd --zone=public --add-port=23/tcp --permanent
```

### ufw

```shell
$ sudo ufw allow 23/tcp
```

## Xinetd 설정

텍스트 에디터로 `/etc/xinetd.d/telnet` 파일을 편집한다. 없다면 새로 만든다.

```shell
service telnet
{
        flags           = REUSE
        socket_type     = stream
        wait            = no
        user            = root
        server          = /usr/sbin/in.telnetd
        log_on_failure  += USERID
        disable         = no
}
```

`disable` 값이 `no`인 경우 사용, `yes`인 경우 사용하지 않음이다.

## Xinetd 서비스 시작

아래 명령어를 통해 Telnet 서버를 시작할 수 있다.

```shell
# service로 서비스 시작
$ sudo service xinetd restart

# systemctl로 서비스 시작
$ sudo systemctl restart xinetd
```

필요에 따라 `network` 서비스를 재시작해야 할 수 있다.

```shell
# service로 서비스 시작
$ sudo service network restart

# systemctl로 서비스 시작
$ sudo systemctl restart network
```
