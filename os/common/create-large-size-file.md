# 더미 데이터로 채워진 대용량 파일 만들기

단순히 더미 데이터로 채워진 대용량 파일이 필요할 때가 있다. 파일 처리나 전송 테스트를 하거나 시스템이 용량으로 가득 찬 상황을 재현하기 위해 대용량 파일을 만들어야 한다면 다음과 같이 강제로 파일을 만들 수 있다.

## Windows

### 사용 방법

명령 프롬프트에서 다음 명령어를 사용한다.

```shell
> fsutil file createnew [pathWithName] [Byte]
```

### 사용 예시

약 1GB 파일의 대용량 파일 생성

```shell
> fsutil file createnew C:\Users\test\Desktop\largeFile 1000000000
```


## Linux

### 사용 방법

```shell
$ fallocate [options] <filename>
```

### 사용 예시

약 1GB 파일의 대용량 파일 생성

```shell
$ fallocate -l 1G /home/test/largeFile
```
