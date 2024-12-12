# FTP 연결 설정 (vsftpd)

## `vsftpd` 설치

### yum, dnf 계열

```shell
$ sudo dnf install vsftpd
```

### apt 계열

```shell
$ sudo apt install vsftpd
```

## `vsftpd` 설정

아래 파일이 없다면 새로 생성해서 사용한다.

### CentOS / RedHat 계열

```shell
$ sudo vim /etc/vsftpd/vsftpd.conf
```

### Ubuntu / Debian 계열

```shell
$ sudo vim /etc/vsftpd.conf
```

## vsftpd.conf

아래 내용을 참고하여 필요한 내용을 수정한 후 저장한다.

### 익명 사용자의 사용자 접근 여부 (yes/no)

```shell
anonymous_enable=no
```

### 익명 사용자의 홈 디렉토리 설정

```shell
anon_root=/home/ftppub
```

### 익명 사용자의 업로드 가능 여부

```shell
anon_upload_enable=YES
```

### 익명 사용자의 파일 생성 시 기본 권한

```shell
anon_umask=002
```

### 익명 사용자의 폴더 생성 가능 여부

```shell
anon_mkdir_write_enable=YES
```

### 로컬 사용자의 접근 여부 (yes/no)

```shell
local_enable=yes
```

### 파일 쓰기 허용 여부 (yes/no)

```shell
write_enable=yes
```

### 패시브 모드를 활성화 할지 여부 (yes/no)

```shell
pasv_enable=yes
```

### 패시브 모드의 최소 포트

```shell
pasv_min_port=10090
```

### 패시브 모드의 최대 포트

```shell
pasv_max_port=10100
```

### 배너 메시지

```shell
ftpd_banner=hello
```

## 방화벽 허용

### iptables

```shell
$ sudo iptables -A INPUT -p tcp -m tcp --dport 21 -j ACCEPT
```

### ufw

```shell
$ sudo ufw allow 21/tcp
```

### firewalld

```shell
$ sudo firewall-cmd --zone=public --add-port=21/tcp --permanent
```

## 권한 설정

필요에 따라 `FTP`가 디렉토리에 접근할 수 있도록 홈 디렉토리 폴더 권한을 711로 조정해야 할 수 있다.

```shell
$ sudo chmod 711 /home/$USER
```

만약 알 수 없는 문제가 발생하고 CentOS 및 RedHat 계열에서 `SELinux`를 사용하는 경우 `SELinux`를 일시적으로 비활성화하여 해결할 수 있다.

```shell
$ sudo setenforce 0
```

## `vsftpd` 서비스 시작

```shell
$ sudo service vsftpd restart
```

또는

```shell
$ sudo systemctl restart vsftpd
```
