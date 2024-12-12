# Android `adb` 명령어

Android에서 안드로이드 에뮬레이터를 제어하는 CLI 명령어 도구인 `adb`에 대한 유용한 커맨드 모음

## 네트워크 활성화 및 비활성화

### 활성화

```shell
$ adb shell svc wifi disable
$ adb shell svc data disable
```

## 비활성화

```shell
$ adb shell svc wifi enable
$ adb shell svc data enable
```
