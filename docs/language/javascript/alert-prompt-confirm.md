# `alert`, `prompt`, `confirm`

`alert`와 `prompt`, 그리고 `confirm`은 웹 브라우저에서 안내 팝업을 띄우는 기능을 한다. 브라우저에 내장된 메시지 창을 띄우는 것이기 때문에 스타일을 사용자 지정할 수는 없으며 모던 웹 디자인 개발 추세에서는 가급적이면 이 세가지 메시지 창보다는 디자인 프레임워크의 다이얼로그(모달)을 활용하는 경우가 많다.

`alert`는 웹개발자가 특정 변수를 띄우기 위한 디버그용으로도 많이 사용되어왔다. 하지만 이 또한 `console`이라는 대체 함수가 있으니 참고한다.

## `alert`

`alert`는 단순 텍스트의 경고 메시지를 띄운다.

```javascript
alert('Warning!');
```

## `prompt`

`prompt`는 사용자에게 텍스트 응답을 받을 수 있는 대화상자를 띄운다. 사용자가 입력한 응답 메시지는 반환값에 돌아온다. 만약 사용자가 취소하였을 경우 `null`이 반환될 것이다. 단, 사용자가 단순히 빈 값으로 엔터를 입력하면 `null`이 아닌 빈 `string` 타입의 데이터가 들어오니 참고한다. 사용자의 취소는 메시지 창에서 취소를 클릭하였거나 ESC를 눌러서 취소하는 상황이 있다.

```javascript
const response = prompt('Enter your name...');

console.log(response);
```

또한 `prompt`에 두번째 인자값을 주어 기본으로 프롬프트 입력란에 표시할 값을 지정할 수 있다.

```javascript
const response = prompt('Enter your name...', 'hello');

console.log(response);
```

## `confirm`

`confirm`은 사용자에게 특정 메시지와 확인/취소 창을 띄운다. 사용자가 확인을 누르면 `true`, 취소를 누르면 `false`가 반환된다.

```javascript
const response = confirm('Is that true?');

console.log(response); // `true` or `false`
```
