# Flutter 앱 표시 이름 변경하기

플랫폼별로 **Flutter** 앱의 표시 이름(앱 리스트에서 나타나는 이름)을 사용자 지정할 수 있다. 이를 설정하지 않은 경우 기본값은 `pubspec.yaml`의 `name`값을 사용한다.

아래 플랫폼별 앱 표시 이름을 변경한 후 다음 명령을 실행한다.

```shell
$ flutter clean
```

이후 앱을 다시 빌드하면 해당 내용이 적용된다.

## Android

`android/app/src/main/AndroidManifest.xml` 파일을 열고 `application`의 `android:label` 키를 찾아 해당 값(`{DisplayName}`)을 변경한다.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.company.app.app_name">
   <application
        android:label="{DisplayName}"
        android:name="${applicationName}"
        android:icon="@mipmap/ic_launcher">
       ...
   </application>
    ...
</manifest>
```

## ios

`ios/Runner/info.plist` 파일을 열고 `CFBundleName` 키를 찾아 해당 값(`{DisplayName}`)을 변경한다.

- 앱 이름에는 공백이 포함되지 않는 것을 권장한다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	...
	<key>CFBundleName</key>
	<string>{DisplayName}</string>
    ...
</dict>
</plist>
```
