# Dart Pub 패키지 출시

Dart에서는 [https://pub.dev](pub.dev)라는 패키지 저장소가 있다. 여기에 자신이 원하는 모듈 패키지를 업로드할 수 있다.

먼저 패키지 업로드 전 주의해야 할 점들이 있다. 일부 유의사항을 따르지 않으면 Pub point 점수가 낮을 수 있다.

- `pubspec.yaml` 파일이 프로젝트 상단에 올바르게 존재해야 하며 홈페이지, 이슈, 설명 등의 메타 정보가 포함되어야 한다.
- `README.md`와 `CHANGELOG.md`, `LICENSE.md` 파일이 각각 프로젝트 상단에 위치해야 한다.
- 예제 파일이 프로젝트 최상단에 위치해야 한다. (예제 파일은 example 폴더에 있어야 한다.)
- API 함수에는 문서가 포함되어야 한다.

사용자에게 제공되는 함수에 문서를 포함하려면 메소드 상단에 `///` 주석을 포함한다.

```dart
/// Returns with 'hello'
String testFunction(String str) {
  return str + 'hello';
}
```

Dart 코드 아래 명령어로 dart 코드 규칙에 따라 포맷팅한다.

```shell
$ dart format .
```

아래 명령어로 패키지를 출시할 수 있다.

```shell
$ dart pub publish
```

이 과정에서 패키지 유효성을 검사하고 업로드 권한을 파악하기 위해 로그인을 진행한다. 만약 실제로 패키지를 출시하지 않고 시험적으로 배포 결과를 보고 싶다면 다음 옵션과 함께 사용한다.

```shell
$ dart pub publish --dry-run
```
