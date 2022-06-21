# 동일한 프로젝트에서 Flutter 버전 업그레이드

## 자동 업그레이드

터미널에서 다음 명령을 실행한다. 이 경우 Flutter 설치 경로의 파일이 최신 버전으로 대체된다.

```shell
$ flutter clean
$ flutter upgrade
```

## 수동 업그레이드 & 다운그레이드

프로젝트 업그레이드 전 열려있는 프로젝트를 닫는다.

원하는 버전의 **Flutter SDK**를 다운로드 한 후 환경변수에서 설정된 경로로 파일을 이동한다.

안드로이드 스튜디오를 사용하는 경우 프로젝트 경로의 `.idea` 디렉토리를 제거한다.

다시 프로젝트를 열어 인덱싱을 완료한 후 터미널에서 다음 명령을 실행한다.

```shell
$ flutter clean
$ flutter get
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
