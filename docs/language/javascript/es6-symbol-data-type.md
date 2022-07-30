# 심볼 (Symbol) 타입 자료형

심볼은 **ES2015(ES6)** 표준으로 지정된 `JavaScript`의 자료형이다. 함수형 객체이며 메소드와 프로퍼티를 가지고 있다. `설명(description)`이라는 값을 사용하여 변수의 의도를 명확하게 표현할 수 있다. 설명 값은 선택사항이다.

```javascript
const symbolA = Symbol();
const symbolB = Symbol('key');
```

심볼 객체로 할당된 변수는 **고유한 식별값**을 가지며 유일성을 보장한다. 따라서 같은 심볼 설명값을 사용한 두 변수를 비교하면 서로 같지 않다는 것을 확인할 수 있다. `Symbol`의 고유한 값은 외부에서 확인할 수 없다.

```javascript
const symbolA = Symbol('key');
const symbolB = Symbol('key');

console.log(symbolA === symbolB); // false
console.log(symbolA === 'key'); // false
```

고유한 특성으로 인해 할당된 변수에 다른 값을 대입할 수 없으며 다른 형으로 변환할 경우 `Symbol`은 무의미해진다.

심볼의 사용 용도는 주로 외부 모듈에서 선언된 객체를 사용할 때 이미 선언된 속성과 겹치면서 의도하지 않은 값으로 덮어씌우는 문제를 방지하기 위해 사용한다.

```javascript
const person = {
    id: 123,
    name: 'lee',
};

person.id = 456;

console.log(person.id); // 456
```


위 예시에서 `person.id = 456`을 통해 `id` 속성의 값 `123`이 의도치 않게 변경되거나, 다시 외부 스크립트에 의해 선언한 값을 바꾸어버릴 수 있다.

아래와 같이 `Symbol`을 활용하면 누군가에 의해 수정되지 않는 고유한 속성을 만들어 값을 저장해 둘 수 있다.

```javascript
const person = {
    id: 123,
    name: 'lee',
};

const symbolId = Symbol('id');
person[symbolId] = 456;

console.log(person['id']); // 123
console.log(person[symbolId]); // 456

person.id = 789;

console.log(person['id']); // 789
console.log(person[symbolId]); // 456
```

위 예시에서 `person.id = 789;`로 값이 변동되어도 `Symbol`로 정의된 속성값은 변동되지 않는다.
