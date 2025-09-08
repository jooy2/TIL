# Dart 모든 문자열 콘솔에 출력하기

Dart 및 Flutter에서는 문자열을 `print`나 `debugPrint`를 사용하여 출력하면 글자 수 제한으로 인해 일부 텍스트가 잘리는 경우가 있다.

이럴 때는 몇가지 대안을 사용하여 콘솔에 모든 문자열이 표시되도록 할 수 있다.

먼저 `print` 대신 `log` 함수를 사용하여 문자열을 출력하는 방법이 있다.

```dart
import 'dart:developer';

log('string');
```

다음으로, 아래와 같이 사용자 지정 `print` 함수를 만들어 사용하는 방법이 있다. 개인적으로 가장 확실한 효과를 보이는 것 같다.

```dart
void printWrapped(String text) {
  final pattern = RegExp('.{1,800}');

  pattern.allMatches(text).forEach((match) => print(match.group(0)));
}

printWrapped('string');
```
