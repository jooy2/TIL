# Linux `sshd` TCP KeepAlive

리눅스 환경의 `SSH` 서버에서 **Keep Alive** 패킷을 보내려면 `sshd_config`를 수정한다.

```shell
$ sudo vim /etc/ssh/sshd_config
```

```shell
TCPKeepAlive no
ClientAliveInterval 10
ClientAliveCountMax 0
```

- `TCPKeepAlive`: SSH 서버에서 연결 유지 패킷을 보낸다.
- `ClientAliveInterval`: 클라이언트 확인 간격 (`n` Seconds)
- `ClientAliveCountMax`: Keep Alive 메시지를 받지 못했을 때 클라이언트를 종료하기 전 접속을 유지해야 하는 최대 횟수

예를 들어 `ClientAliveInterval`이 `10`이고 `ClientAliveCountMax`가 `3`이면 `10 X 3 = 30`초 이상 응답이 없을 경우 세션을 종료한다.

서버측에서 `Keep Alive` 응답을 보내지 않으려면 `ClientAliveCountMax`의 값을 `0`으로 설정한다. `ClientAliveInterval`에 설정된 초가 지나면 연결을 종료한다.

변경사항 적용 후 `sshd` 서비스를 재시작 해야 할 수 있다.

```shell
$ sudo service sshd restart
```

또는

```shell
$ sudo systemctl restart sshd
```
