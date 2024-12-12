# Electron 앱 파일 완전 삭제

현재 실행 중인 프로세스를 제거하고 Electron 앱의 데이터 파일과 설정 파일, 설치 파일을 모두 삭제한다.

아래 문서에서 `{APP_NAME}`와 `{com.company.appname}` 부분은 각 앱 이름에 맞게 수정한다.

## Windows

Microsoft Store로 설치한 경우 앱 삭제 시 데이터가 삭제된다.

`.exe`로 설치한 경우 아래 경로 파일을 삭제한다.

```shell
%APPDATA%\Electron
%APPDATA%\{APP_NAME}
```

## Linux

```shell
# Snapcraft에서 설치했다면:
$ rm -rf ~/snap/{APP_NAME}

# .deb, .rpm 패키지로 설치했다면:
$ rm -rf ~/.config/{APP_NAME}
```

## macOS

```shell
#!/bin/sh
killall Electron
killall Electron
killall {APP_NAME}
killall {APP_NAME}
rm -rf /Applications/{APP_NAME}.app
rm -rf ~/Library/Application\ Support/{APP_NAME}
rm -rf /System/Volumes/Data/Users/$USER/Library/Containers/{com.company.appname}
```
