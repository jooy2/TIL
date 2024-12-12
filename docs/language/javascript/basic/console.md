# console로 로깅 메시지 출력하기

`console`은 자바스크립트에서 제공하는 로깅 객체이며 브라우저에 탑재된 콘솔이나 터미널 출력을 통해 매시지를 출력할 수 있게 한다. 주로 개발 환경에서 결과를 확인하는 테스트 용도로 사용된다. 과거에는 `alert`가 많이 활용되었으나 보안이나 접근성 문제로 인해 최근엔 `console`로 대체하여 사용한다.

커맨드라인 명령형 프로그램이 아닌 웹사이트에서는 `alert`의 문제와 같이 보안을 위해 프로덕션 환경에서 콘솔 로그를 출력하지 않는 것이 좋다. 확인이 끝난 콘솔 메시지는 삭제해주는 것이 좋다.

`console`의 가장 많이 사용되는 메소드는 `log`이며 아래와 같이 문자열이나 특정 변수를 콘솔에 출력할 수 있다.

```javascript
const hello = 'Hello';
const number = 12345;
console.log('Hello'); // 'Hello'
console.log(hello); // 'Hello'
console.log(number); // 12345
```

브라우저 콘솔과 같은 개발자 도구에서는 출력되는 데이터의 자료형에 맞게 색상 등으로 구분하여 출력해준다. 문자열이나 데이터를 조합하고자 하는 경우 여러 인자를 콤마(`,`)로 넘겨 쉽게 표현할 수 있다. 마찬가지로 데이터형에 맞게 표시된다.

```javascript
const hello = 'Hello';
const number = 12345;
console.log('Hello', number); // 'Hello' 12345
```

배열이나 객체를 출력할 수도 있다.

```javascript
const arr = [1, 2, 3];
const obj = {
	hello: 'world',
	child: {
		hello: 'world'
	}
};

console.log(arr); // [1, 2, 3]
console.log(obj); // {hello: 'world', child: {…}}
console.log(obj.hello); // 'world'
```

유의할점은 객체의 경우 하위 항목이 모두 표시되지 않을 수 있다. 이럴 때는 `console.dir`을 사용해서 객체의 모든 항목을 모두 표시할 수 있다. 다만 브라우저 콘솔에서는 동작하지 않으며 아래와 같이 `{ depth: null }`을 옵션 인자로 포함해야 한다.

```javascript
const obj = {
	hello: 'world',
	child: {
		hello: 'world'
	}
};
console.dir(obj, { depth: null }); // { hello: 'world', child: { hello: 'world' } };
```

`NodeJS`의 `util.inspect`를 사용하여 객체를 모두 표시할 수 있다. 다만 특별한 경우가 아니라면 `console.dir`을 사용하는 것이 더 간편하다.

```javascript
import { inspect } from 'util';

console.log(inspect(obj, { showHidden: false, depth: null, colors: true }));
// inspect(variable, showHidden, depth, colors)
console.log(inspect(obj, false, null, true));
```

한편 `console`은 경고나 오류, 안내와 같이 목적이 서로 다른 메시지를 출력하고자 하는 경우 아래 각각의 메소드를 통해 표시할 수 있다. 브라우저 콘솔에서는 배경색이나 글자색을 변경함으로서 메시지가 안내인지 에러인지 명확하게 구분하게 해준다.

```javascript
console.debug('디버깅용 메시지');
console.log('로그');
console.info('정보');
console.warn('경고');
console.error('문제 발생');
```

치환 가능한 문자열을 제공하여 문자열과 변수를 구분하여 표시할 수도 있다.

- `%d`: 정수
- `%s`: 문자열
- `%f`: 부동소수점 수
- `%o`: 객체

```javascript
const count = 1;
console.log('count: %d and user: %s', count, 'Lee'); // 'count: 1 and user: Lee'
```

브라우저 콘솔에 한해 콘솔 메시지에 `CSS`를 적용하여 원하는 스타일을 사용자지정할 수 있다. 위의 치환 문자열과 같이 `%c` 문자를 사용한다.

```javascript
console.log('normal text & %c styled text', 'font-weight: bold; font-size: 20px');
```

이외에도 콘솔 내 모든 출력을 지우려면 `console.clear`를 사용할 수 있다.

```javascript
console.clear();
```
