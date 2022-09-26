# JavaScript 데이터 타입 검증

JavaScript에서는 다양한 방법으로 대상 값에 대한 데이터 타입을 확인할 수 있다.

## 동치 비교 (`==`, `===`)

먼저 아래와 같이 일반적인 동치 비교를 사용하면 특정 값(좌측)이 주어진 조건값(우측)과 일치하는지 확인할 수 있다.

```javascript
const temp = 1;

console.log(temp == 1); // return true
console.log(temp == '1'); // return true
```

다만 위와 같이 `==` 기호로 값을 비교하게 되면 값은 일치하더라도 데이터형이 다를 때도 같은 값으로 판단하게 되여 결론적으로 느슨한 비교를 하게 된다.

이럴 때는 삼중 등호(`===`)를 사용하여 데이터형에 대해서도 엄격한 비교를 할 수 있다.

```javascript
const temp = 1;

console.log(temp === 1); // return true
console.log(temp === '1'); // return false
```

위 식에서는 `temp`가 `number`형 변수이고, 값이 `1`일 때만 `true`를 리턴한다.

## `typeof` 연산자

`typeof` 연산자는 특정 변수의 데이터형을 리턴한다. 다만 연산자이므로 함수 실행식이 아닌 피연산자 앞에 위치해야 한다.

```javascript
const temp = 1;

console.log(typeof temp); // return 'number'
console.log(typeof temp === 'number'); // return true
```

리턴값은 `string`으로 표현되며 값은 주로 `number`, `string`, `function`, `boolean`, `object` 등이 있다. 

 - 자세한 문서: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof

## `instanceof` 연산자

`instanceof`는 위의 `typeof`와 유사하지만 특정 객체가 어떤 클래스에 속하는지 확인하기 위해 사용하는 연산자이다. 마찬가지로 피연산자(클래스) 앞에 위치한다.

```javascript
const company = new Company();

console.log(company instanceof Company); // return true
console.log([1, 2, 3, 4, 5] instanceof Array); // return true
```

주의할 점은 피연산자 값은 `constructor`가 되어야 한다. 전역 객체도 사용할 수 있다.
