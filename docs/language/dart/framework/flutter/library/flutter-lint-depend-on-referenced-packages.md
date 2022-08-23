# Flutter Lint `depend_on_referenced_packages`

Flutter lint에서 `depend_on_referenced_packages`가 표시되는 경우가 있다.

```dart
import 'package:path/path.dart'; // lint: depend_on_referenced_packages
import 'package:path_provider/path_provider.dart';

class Main {
  Main()
  
  get _textFilePath async {
    final documentDir = await getApplicationDocumentsDirectory();
    
    return join(documentDir, 'file.txt');
  }
}
```

위 코드 예시에서 `join` 메소드를 사용하면서 사용된 path 패키지를 `import`했을 때, 해당 라인에서 다음 에러가 발생한다.

```text
Depend on referenced packages.

When importing a package, add a dependency on it to your pubspec.
```

사용한 패키지는 dart 기본 제공 패키지여도 가급적 `pubspec.yaml`의 `dependencies` 목록에 추가해주는 것이 좋다.

```yaml
dependencies:
  flutter:
    sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^1.0.5
  
  path: ^1.8.1
```

위와 같이 `dependencies`에 `path` 패키지를 추가한다.
