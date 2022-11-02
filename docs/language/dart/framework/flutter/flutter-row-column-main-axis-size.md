# Flutter Row, Column 위젯의 `mainAxisSize` 파라미터

[**Flutter**](https://flutter.dev/)의 `Row`, `Column` 위젯에서 사용되는 파라미터인 `mainAxisSize`는 콘텐츠의 최대 너비와 높이를 결정하기 위해 사용한다. 값은 `min`과 `max` 두가지가 있는데 `MainAxisSize.min` 값은 자식 위젯의 너비 또는 높이의 합이 부모의 너비 또는 높이이며 `MainAxisSize.max`는 주축의 전체 너비 또는 높이를 사용한다. 안드로이드에서 사용되는 `wrap_content`와 `match_parent`를 대신하기도 한다.

### Row(너비)의 `wrap_content` (Minimum width) 적용:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
      appBar: AppBar(title: const Text('App')),
      body: Row(
        mainAxisSize: MainAxisSize.min,
        children: [ /* ... */ ],
      )
  );
}
```

### Row(너비)의 `match_parent` (Maximum width) 적용:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
      appBar: AppBar(title: const Text('App')),
      body: Row(
        mainAxisSize: MainAxisSize.max,
        children: [ /* ... */ ],
      )
  );
}
```

### Column(높이)의 `wrap_content` (Minimum height) 적용:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
      appBar: AppBar(title: const Text('App')),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        children: [ /* ... */ ],
      )
  );
}
```

### Column(높이)의 `match_parent` (Maximum height) 적용:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
      appBar: AppBar(title: const Text('App')),
      body: Column(
        mainAxisSize: MainAxisSize.max,
        children: [ /* ... */ ],
      )
  );
}
```

`Row`, `Column`의 `MainAxisSize`와 비슷한 결과를 얻는 다른 방법은 `Wrap`과 `Container` 위젯을 사용할 수도 있다.

### `Wrap`을 사용하여 너비와 높이를 최소로 적용:

이 위젯을 사용하면 너비와 높이를 동시에 적용한다.

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
      appBar: AppBar(title: const Text('App')),
      body: Wrap(
        children: [ /* ... */ ],
      )
  );
}
```

### `Container` height 속성을 사용하여 너비와 높이를 최대로 적용:

너비는 `width`, 높이는 `height`로 적용한다.

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
      appBar: AppBar(title: const Text('App')),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        children: [ /* ... */ ],
      )
  );
}
```
