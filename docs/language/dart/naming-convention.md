# Dart 네이밍 컨벤션 (Dart Naming Convention)

### 폴더 이름과 파일 이름은 스네이크 케이스(snake_case)를 사용한다.

```txt
test_utils/
plugins/
main_screen.dart
file_util.dart
```

### 폴더명은 복수형을 사용하며, 파일명은 가급적 단수형을 사용한다.

```txt
utils/
widgets/
screens/
test_screen.dart
```

### 변수 이름은 카멜 케이스(camelCase)를 사용한다.

```dart
String userId = 'user';
```

### 가급적 변수가 `private`일 때만 언더스코어(`_`)를 사용한다.

```dart
String _ = 'user';
```

### 라이브러리 프리픽스값은 스네이크 케이스(snake_case)를 사용한다.

```dart
import 'package:flutter/material.dart' as flutter_material;
```

### 함수 이름은 카멜 케이스(camelCase)를 사용한다.

```dart
bool initializeScreen() {
  return true;
}

@override
void initState() {
  initializeScreen();
  super.initState();
}
```

### 클래스 이름은 카멜 케이스(camelCase)를 사용한다.

```dart
class MainApp extends StatefulWidget {
  const MainApp({Key? key}) : super(key: key);

  @override
  State<MainApp> createState() => _MainAppState();
}
```

### 가능하다면 파일 이름의 끝에 디렉토리 이름을 포함한다.

```txt
screens/
    ㄴ main_screen.dart
    ㄴ purchase_screen.dart
```

### 파일 내 단일 클래스가 존재하는 경우 파일명과 동일한 이름을 사용한다.

```dart
// purchase_screen.dart

class PurchaseScreen extends StatefulWidget {
  const PurchaseScreen({Key? key}) : super(key: key);

  @override
  State<PurchaseScreen> createState() => _PurchaseScreenState();
}
```
