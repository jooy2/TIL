# 리눅스 SWAP 메모리 지정

리눅스에서 시스템 메모리(RAM) 공간이 부족한 경우 응용 프로그램이나 시스템 다운을 방지하기 위해 디스크에 메모리를 대체할 수 있는 공간을 만들어줄 수 있다. 이를 SWAP이라고 한다.

SWAP은 시스템 자원이 여유로운 경우 반드시 지정해야만 하는 것은 아니지만, 예상치 못한 상황을 위해 적절한 SWAP 공간을 주는 것을 권장하고 있다.

아래는 Ubuntu 시스템 기준 권장되는 SWAP 크기이다 (hibernation - 최대 절전 모드):

- 관련 문서: https://help.ubuntu.com/community/SwapFaq

```text
        RAM   No hibernation    With Hibernation  Maximum
      256MB            256MB               512MB    512MB
      512MB            512MB              1024MB   1024MB
     1024MB           1024MB              2048MB   2048MB

        RAM   No hibernation    With Hibernation  Maximum
        1GB              1GB                 2GB      2GB
        2GB              1GB                 3GB      4GB
        3GB              2GB                 5GB      6GB
        4GB              2GB                 6GB      8GB
        5GB              2GB                 7GB     10GB
        6GB              2GB                 8GB     12GB
        8GB              3GB                11GB     16GB
       12GB              3GB                15GB     24GB
       16GB              4GB                20GB     32GB
       24GB              5GB                29GB     48GB
       32GB              6GB                38GB     64GB
       64GB              8GB                72GB    128GB
      128GB             11GB               139GB    256GB
      256GB             16GB               272GB    512GB
      512GB             23GB               535GB      1TB
        1TB             32GB              1056GB      2TB
        2TB             46GB              2094GB      4TB
        4TB             64GB              4160GB      8TB
        8TB             91GB              8283GB     16TB
```

현재 시스템이 8GB RAM이라고 가정할 경우 3GB의 SWAP 공간을 주려면 아래와 같이 진행한다.

아래 명령들은 root 사용자 또는 sudo 권한으로 진행한다.

먼저 아래와 같이 SWAP 공간 할당을 지정한 파일을 만들어준다.

```shell
$ dd if=/dev/zero of=/swapfile bs=1024 count=4194304
```

이후 만들어진 파일을 읽을 수 있도록 올바른 권한을 지정해준다.

```shell
$ chmod 600 /swapfile
```

마지막으로 시스템에 SWAP 파일을 사용하여 SWAP 공간을 활성화한다.

```shell
$ mkswap /swapfile
$ swapon /swapfile
```

swapon이 정상 동작하는지 확인하려면 아래 명령을 사용해본다:

```shell
swapon -s

Filename                    Type            Size          Used
Priority/swapfile           file            2097148 0       -2
```

이제 `free` 명령을 통해 SWAP 공간이 올바르게 할당되었는지 확인할 수 있다:

```shell
$ free -h

               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       2.0Gi       4.7Gi       127Mi       1.3Gi       5.6Gi
Swap:          4.0Gi          0B       4.0Gi
```

위 방법으로만은 시스템 부팅 시에 SWAP이 해제될 수 있으므로, 재부팅 할 때 마다 SWAP을 자동으로 활성화하려면 아래 파일을 편집해야 한다.

```shell
vim /etc/fstab
```

에디터를 열었으면 하단에 아래 내용을 추가한다:

```text
/swapfile swap swap defaults 0 0
```

이후 파일을 저장하고 재부팅을 시도하여 정상적으로 적용되었는지 확인해본다.

만약 SWAP 공간을 비활성화 하려는 경우 아래와 같은 명령을 사용한다.

```shell
swapoff -a
```
