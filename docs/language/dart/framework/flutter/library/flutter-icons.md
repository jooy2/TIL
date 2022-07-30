# Flutter `flutter_icons` 라이브러리

여러 플랫폼의 앱 아이콘을 한번에 변경해주는 개발 유틸 (https://github.com/fluttercommunity/flutter_launcher_icons)

## 설치

`dev_dependencies`에 `flutter_launcher_icons` 패키지를 설치한다.

```yaml
dev_dependencies:
  flutter_launcher_icons: ^0.9.3
```

이후 하단에 다음 내용을 구성한다. `image_path`에는 프로젝트 경로 루트 기준 변경할 아이콘의 경로를 입력한다.

```yaml
flutter_icons:
  android: true
  ios: true
  image_path: assets/icon/icon.png
```

이후 터미널에서 다음 명령어를 실행하여 아이콘을 적용할 수 있다. 기존의 아이콘은 사라지니 주의.

```shell
flutter pub run flutter_launcher_icons:main
```

## Troubleshooting

아래 에러가 발생한 경우:

```shell
✗ ERROR: InvalidConfigException
Cannot not find minSdk from android/app/build.gradle or android/local.propertiesSpecify minSdk in either android/app/build.gradle or android/local.properties
```

`android/local.properties`에 다음 내용을 추가한다.

```text
flutter.minSdkVersion=30
````
