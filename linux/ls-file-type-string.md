# 리눅스 `ls` 명령어 내 파일 형식에 대한 문자열 표현

```shell
$ ls -l home
total 64
lrwxrwxrwx   1 root root     7 Apr 29  2021 bin -> usr/bin
drwxr-xr-x   4 root root  4096 Feb  1 06:39 boot
drwxr-xr-x  15 root root  3760 Jan 24 15:59 dev
drwxr-xr-x 100 root root  4096 Jan 26 06:54 etc
drwxr-xr-x   4 root root  4096 Sep  5 02:06 home
...
```
`ls -l`에서 첫글자 `l`, `d`, `d`...는 파일의 형식이며 문자별로 다음 의미를 가진다:

| 문자   | 파일 타입                | 설명                                                     |
|------|----------------------|--------------------------------------------------------|
| `-`  | 일반 파일                | 일반적인 파일을 나타내는 문자                                       |
| `d`  | 디렉토리                 | 디렉토리를 나타내는 문자                                          |
| `l`	 | 심볼릭 링크               | 심볼릭 링크 (Soft Link) 파일                                  |
| `c`  | 문자 장치 드라이버           | 문자 장치 드라이버 (Character Device Driver). 물리적 장치를 위한 실행 파일 |
| `b`  | 블록 장치 드라이버           | 블록 장치 드라이버 (Block Device Driver). 물리적 장치를 위한 실행 파일     |
| `s`  | 로컬 소켓                | 프로세스 통신을 위해 사용되는 파일                                    |
| `p`  | 네임드 파이프 (Named Pipe) | 프로세스 통신을 위해 사용되는 파일 (선입선출 (FIFO) 파일)                   |
