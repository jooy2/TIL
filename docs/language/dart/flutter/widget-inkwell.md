# Inkwell 위젯

`Inkwell` 위젯은 터치나 누르기 동작을 받아 처리할 수 없는 위젯에서 동작을 인식하게 해주거나 포커스 노드를 생성해주는 위젯이다.

`Text`나 `Container` 위젯과 같이 터치하였을 때 어떠한 동작을 수행하려는 경우 해당 위젯의 상위 위젯으로 감싸여 사용할 수 있다.

```dart
  @override
  Widget build(BuildContext context) {
		return InkWell(
				onTap: () {
          print('Hello');
        },
				child: const Text('Click Me'),
		);
	}
```

`Inkwell` 위젯은 동작 인식뿐만 아니라 머터리얼 디자인의 Ripple(파동) 터치 효과와 클릭 도중 하이라이트를 추가해준다. 파동 효과를 사용하지 않으려면 다음과 같이 splashColor 색상을 투명으로 지정한다.

```dart
  @override
  Widget build(BuildContext context) {
		return InkWell(
      	splashColor: Colors.transparent, // Add this
				onTap: () {
          print('Hello');
        },
				child: const Text('Click Me'),
		);
	}
```

`Inkwell` 위젯의 각종 효과가 표시되려면 `Material` 위젯이 부모 위젯으로 위치해야 한다. 만약 파동 효과와 같이 효과가 제대로 표시되지 않는다면 아래와 같이 상위 위젯을 `Material` 위젯으로 감싸고 색상을 투명으로 설정하여 문제를 해결할 수 있다.

```dart
  @override
  Widget build(BuildContext context) {
		return Material( // Add this
			color: Colors.transparent, // Add this
			child: InkWell(
				onTap: () {
          print('Hello');
        },
				child: const Text('Click Me')));
	}
```

`Inkwell` 위젯은 동작 인식 위젯인 `GestureDetector`과 유사하지만, `GestureDetector`의 경우 `Inkwell`보다 더 많은 동작에 대한 이벤트를 수행할 수 있으나 `Inkwell`과는 달리 파동이나 하이라이트와 같은 효과를 지원하지 않는다.

때문에 단순한 동작과 효과를 쉽게 구현하는 용도라면 `GestureDetector` 대신 `Inkwell` 위젯을 사용하는 방법도 있다.
