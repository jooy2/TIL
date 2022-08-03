# Strict Mode (엄격 모드)

엄격 모드(Strict Mode)는 **ES2009(ES5)** 사양 이상 부터 사용할 수 있는 문법이다.

엄격 모드를 사용하면 문법적 오류에 대해 보통 암묵적으로 진행되었던 실행문을 탐지하여 문법 오류를 발생하도록 한다. 이렇게 함으로서 문법적인 실수를 사전에 방지하여 코드 실행 안정성을 보장하고 향상된 보안 코드를 작성할 수 있다.

사용을 위해서는 자바스크립트 파일 최상단에 다음 내용을 추가해야 한다.

```javascript
'use strict'; // << Add this line

function Main () {
    // ...
}
```

이렇게 되면 전체 스크립트 파일에 엄격 모드가 적용된다. 특정 함수에만 한정적으로 적용할 수도 있다.

```javascript
function Main () {
    'use strict';
    // ...
    function sub () {
        // This function is also affected by strict mode
    }
}
```

예를 들어 다음과 같이 선언하지 않은 변수에 값을 할당하게 된다면, 

```javascript
abc = 'Hello';
	
console.log(abc); // 'Hello'
```

자바스크립트는 에러 없이 `Hello`를 콘솔에 출력한다. 하지만 엄격 모드를 사용하면,

```javascript
'use strict';
abc = 'Hello';
	
console.log(abc); // Uncaught ReferenceError: abc is not defined
```

콘솔 로그 실행문에서 `ReferenceError` 에러가 출력될 것이다.

이 뿐만이 아니라 엄격 모드를 사용하면 여러가지 제한 사항이 적용된다.

- `delete`나 `with`를 사용할 수 없다.
- `if`, `while`, `for`과 같은 블록문 내부에 함수를 선언할 수 없다.
- 함수에 대해 `caller`, `callee`, `arguments`로 액세스할 수 없다.
- 함수의 인자의 이름이 두 번 이상 반복 될 수 없다.
- 미래에 사용 될 예약어(`private`, `public`, `let`, `static`...)를 변수명으로 지정할 수 없다.
- 객체에는 같은 속성 이름을 사용할 수 없다. (ES6 이상에서는 허용된다.)

엄격 모드는 모듈이나 클래스 형식의 파일에서는 권장하지 않으며 민감한 코드를 작성하는 특수한 경우가 아닌 이상 일반적으로 사용 할 필요는 없다.
