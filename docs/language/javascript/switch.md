# `switch`문

`switch`문은 특정 문자열이나 표현식에 대해 여러 상황을 분기해야 하는 경우에 사용하는 문법이다. `if-else`문을 길게 작성하는 대신에 `switch`문으로 코드를 간략하게 표현할 수 있다.

아래 `if-else`문을 사용한 예시가 있다:

```javascript
function getResponse(str) {
	let response;

	if (str === 'hello') {
		response = 'hello!';
	} else if (str === 'hi') {
		response = 'hi!';
	} else if (str === 'bye') {
		response = 'bye!';
	} else if (str === 'goodbye') {
		response = 'goodbye!';
	} else if (str === 'seeya') {
		response = 'seeya!';
	}

	return response;
}
```

여러 상황에 대해 처리해야 하는 분기가 많아질 때가 있는데 위 코드에서는 비록 한줄 실행문이지만 더 많은 상황이나 긴 실행문이 될 경우 가독성이 저하될 수 있다. 따라서 아래와 같이 `switch`문을 통해 코드를 간소화할 수 있다.

```javascript
function getResponse(str) {
	let response;

	switch (str) {
		case 'hello':
			response = 'hello!';
			break;
		case 'hi':
			response = 'hi!';
			break;
		case 'bye':
			response = 'bye!';
			break;
		case 'goodbye':
			response = 'goodbye!';
			break;
		case 'seeya':
			response = 'seeya!';
			break;
		default:
			response = 'error!';
			break;
	}

	return response;
}
```

`switch`문에는 `case`와 `default`, `break`이 거의 항상 같이 사용된다. 각각의 역할은 다음과 같다:

- `case`: 표현식의 결과에 대해 발생할 수 있는 값
- `default`: 표현식의 결과에서 예상하지 못한 값이거나 명시된 `case`에 해당하지 않는 모든 값
- `break`: 해당 분기에 대해 `switch`문을 종료

`if-else`문과 같이 `case`문의 조회는 위에서부터 순차적으로 이루어지며 조건에 대한 실행이 완료(`break`)되었음이 확인되면 `switch`문을 종료한다.

여기서 주의해야 할 점은 `default`와 `break`인데, `default`는 `else`와 유사한 기능을 하여 명시하지 않아도 되지만 코드 이해를 위해 또는 예외상황에 대한 실행문을 작성할 수 있도록 명시해주는 것이 좋다. `default`는 맨 위나 아래에 위치하는 것이 좋으며 코드 분석 툴은 맨 아래에 배치하는 것을 권장하고 있다.

`break`문 대신에 `return`을 사용하여 해당 함수에서 원하는 값을 즉시 반환할 수 있다. 이 경우 `switch`문 아래 코드 및 다른 `case`문의 코드는 실행되지 않는다.

`break`문을 `case`의 실행문 마지막에 기입하지 않으면 다음 `case`문의 실행문도 같이 실행된다. 즉 5개의 `case`가 있고 모두 `break`문이 없고 조건식이 맨 처음 `case`에 해당하는 경우 맨 처음 실행문을 포함하여 아래 4개의 실행문이 모두 실행된다.

```javascript
function getResponse(str) {
	let response;

	switch (str) {
		case '1':
			response += 'a';
		case '2':
			response += 'b';
		case '3':
			response += 'c';
		case '4':
			response += 'd';
			break;
		case '5':
			response += 'e';
			break;
		default:
			response += 'f';
			break;
	}

	return response;
}
```

위 코드에서 `str`의 값이 `1`인 경우 결과는 `abcd`, `2`인 경우 결과는 `bcd`가 된다. `str`의 값이 `case`문의 값과 달라도 `break`의 여부에 따라 다른 코드도 실행될 수 있으므로 사용 시 유의해야만 한다.

```javascript
function isItTrue(str) {
	function isTrue() {
		return true;
	}

	function isAlsoTrue() {
		return true;
	}

	function isFalse() {
		return false;
	}

	switch (true) {
		case isTrue():
			console.log('true!');
			break;
		case isAlsoTrue():
			console.log('also true!');
			break;
		case isFalse():
			console.log('false!');
			break;
		default:
			break;
	}
}
```

또한 위 코드와 같이 `case`문에 함수 실행문을 사용할 수 있다. 반환된 값이 `switch`문의 표현식과 같은 `true`인 경우 해당 분기에 대한 코드를 실행한다. 위 예시에서는 `isTrue`의 결과 `true`에 먼저 해당되었으므로 콘솔 값에는 `true!`가 출력되고 실행을 종료한다. `isAlsoTrue();`의 실행문은 `isTrue();`의 `break`문에 의해 실행되지 않는다.
