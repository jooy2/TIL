# 동일한 프로젝트에서 Flutter 버전 업그레이드

## 자동 업그레이드

일반적으로 Flutter 버전을 업그레이드 하려는 경우 터미널에서 다음 명령을 실행한다. 이 경우 Flutter 설치 경로의 파일이 최신 버전으로 대체된다.

```shell
$ flutter clean
$ flutter upgrade
```

Flutter 버전은 [`fvm`](https://fvm.app)을 사용하여 버전 관리를 하는 것을 권장한다. 버전을 변경해가면서 앱을 테스트할 때 유용하며 환경이 서로 꼬이지 않는다.

만약 `fvm`으로 버전을 올리는 경우 아래 커맨드로 버전을 올릴 수 있다.

```shell
$ fvm install {version}
$ fvm use {version}

# 만약 해당 버전을 전역 프로젝트에서 기본값으로 적용하려면:
$ fvm global {version}
```

`.fvmrc` 파일이 프로젝트 루트에 존재할 경우 여기에 있는 Flutter 버전도 갱신해야 한다. `fvm use`를 사용하여 이미 지정했다면 파일이 알아서 변경될 수 있다.

Firebase를 사용 중일 때 Flutter 버전 업그레이드 후 아래 커맨드를 실행하여 현재 Dart 버전에 Flutterfire CLI를 적용해야 할 수 있다.

```shell
$ dart pub global activate flutterfire_cli
```

Flutter의 버전이 올라가면 일부 코드 변경사항이 발생하거나 종속성 문제가 발생할 수 있다. 관련 업데이트 내용을 확인하고, 아래와 같이 종속성 점검을 실행한다.

```shell
$ flutter pub get
```

관련 문제가 나타날 경우 아래 명령어로 현재 Flutter 버전과 호환되도록 버전을 맞추어줄 수 있다. 아래 명령어가 모든 패키지를 최신으로 업그레이드하는 것은 아니므로 참고한다.

```shell
$ flutter pub upgrade --major-versions
```

안드로이드나 iOS 빌드 시 빌드 캐시로 인해 실행 문제가 발생할 수 있으므로 프로젝트 루트 폴더에서 순서대로 아래 명령을 실행한다.

```shell
$ flutter clean
$ flutter precache --ios
$ flutter pub get
$ cd ios
$ rm -rf Podfile.lock Pods/ .symlinks/ Flutter/Flutter.framework Flutter/Flutter.podspec
$ pod cache clean --all
$ pod repo update
$ pod install
$ cd ..
```

## 수동 업그레이드 & 다운그레이드

프로젝트 업그레이드 전 열려있는 프로젝트를 닫는다.

원하는 버전의 **Flutter SDK**를 다운로드 한 후 환경변수에서 설정된 경로로 파일을 이동한다.

안드로이드 스튜디오를 사용하는 경우 프로젝트 경로의 `.idea` 디렉토리를 제거한다.

다시 프로젝트를 열어 인덱싱을 완료한 후 터미널에서 다음 명령을 실행한다.

```shell
$ flutter clean
$ flutter pub get
```

빌드 시 다음 에러가 발생하는 경우가 있다.

```
Could not get unknown property 'ndkVersion' for extension 'flutter' of type FlutterExtension.
```

`android/app/build.gradle`에서 버전별로 다음 내용을 수정해야 할 수 있다.

### Flutter 3.x

```
android {
    compileSdkVersion flutter.compileSdkVersion
    ndkVersion flutter.ndkVersion
}
```

### Flutter 2.x

```
android {
    compileSdkVersion {SDK Version}
}
```
