# iOS `xcrun` 명령어

iOS에서 Simulator를 제어하는 CLI 명령어 도구인 `xrcun`에 대한 유용한 커맨드 모음

## iPadOS Stage Manager 활성화 및 비활성화

### 활성화

새 시뮬레이터(장치)를 추가한 경우

```shell
$ xcrun simctl spawn booted defaults write -g SBChamoisWindowingEnabled -bool YES
```

이미 시뮬레이터(장치)를 설정한 경우

```shell
$ xcrun simctl spawn booted defaults write -g SBChamoisWindowingEnabled -bool true
$ xcrun simctl spawn booted defaults write com.apple.springboard SBChamoisWindowingEnabled -bool true
```

### 비활성화

새 시뮬레이터(장치)를 추가한 경우

```shell
$ xcrun simctl spawn booted defaults write -g SBChamoisWindowingEnabled -bool NO
```

이미 시뮬레이터(장치)를 설정한 경우

```shell
$ xcrun simctl spawn booted defaults write -g SBChamoisWindowingEnabled -bool false
$ xcrun simctl spawn booted defaults write com.apple.springboard SBChamoisWindowingEnabled -bool false
```
