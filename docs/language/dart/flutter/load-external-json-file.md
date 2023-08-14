# Flutter 외부 JSON 파일 가져오기

아래와 같이 `assets/json/users.json` 파일이 있다고 가정한다면,

```json
[
	{
		"id": 0,
		"name": "lee"
	},
	{
		"id": 1,
		"name": "kim"
	},
	{
		"id": 2,
		"name": "park"
	}
]
```

`pubspec.yaml` 파일의 `flutter` -> `assets`에 파일이 포함된 경로(전체 또는 폴더)를 추가한다.

```yaml
flutter:
  # To add assets to your application, add an assets section, like this:
  # assets:
  #   - images/a_dot_burr.jpeg
  #   - images/a_dot_ham.jpeg
  assets:
    - assets/json/
```

이후 Flutter 코드에서 사용할 때는 `rootBundle.loadString`을 사용하여 `json` 파일을 불러온 후 `Stirng`을 `List`로 디코딩한다.

```dart
import 'dart:convert';

import 'package:flutter/services.dart';

class Main {
  Future<List<dynamic>> getListFromJson(path) async {
    final String str = await rootBundle.loadString(path);
    return json.decode(str);
  }

  run() async {
    List<dynamic> jsonData =
        await Utils.getListFromJson('assets/json/users.json');

    print(jsonData[0]['name']); // 'lee'
  }
}
```

주의할 점은 `rootBundle.loadString`은 flutter 범위 내에서만 사용 가능하다.
