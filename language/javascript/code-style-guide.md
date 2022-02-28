# JavaScript Code Style Guide

개인적이지만 합당한, 간결하면서도 모던한 코드 작성 스타일 가이드

## JavaScript (ES6)

### `var` 대신 `const`와 `let`을 사용한다.

**🚫 Bad**
```javascript
var test = 10;
var ADD = 10;

test += ADD;
console.log(test);
```

**✅ Good**
```javascript
let test = 10;
const ADD = 10;

test += ADD;
console.log(test);
```

### 삼항연산자에 `function`을 사용하지 않는다.

**🚫 Bad**
```javascript
return isTrue ? trueFunction() : falseFunction();
```

**✅ Good**
```javascript
if (isTrue) {
    trueFunction();
} else {
    falseFunction();
}
```


### 중첩된 삼항연산자를 가급적 지양하고 `if`문으로 대체한다.

**🚫 Bad**
```javascript
return isTrue ? (isAlsoTrue ? trueFunction() : halfTrueFunction()) : falseFunction();
```

**✅ Good**
```javascript
if (isTrue && isAlsoTrue) {
    trueFunction();
} else if (isTrue) {
    halfTrueFunction();
} else {
    falseFunction();
}
```

### `Arrow Function`의 인자가 1개일 때 괄호를 넣지 않는다.

**🚫 Bad**
```javascript
arr.map((v) => {
});
```

**✅ Good**
```javascript
arr.map(v => {
});
```

### 리턴만 존재하는 `Arrow Function`은 한줄로 축약한다.

**🚫 Not Good**
```javascript
const sum = (a, b) => {
    return a + b;
};
```

**✅ Good**
```javascript
const sum = (a, b) => a + b;
```


### 많은 단계의 `callback`은 `async`와 `await`으로 대체한다.

**🚫 Not Good**
```javascript
function main() {
    first().then(() => {
        second().then(() => {
            third().then(() => {
                // ...
            });
        });
    });
}
```

**✅ Good**
```javascript
async function main() {
    await first();
    await second();
    await third();
}
```


## JavaScript

### `String`은 작은따옴표로 표시하는 것이 좋다.

**✅ Good**
```javascript
let str = "TEST";
```

**✅ Very Good**
```javascript
let srt = 'TEST';
```

### `Object`의 길이 체크는 `Object.keys`를 사용한다.

**🚫 Bad**
```javascript
const obj = { a: 1 };

if (obj.length !== 0) {
    // ...
}
```

**✅ Good**
```javascript
const obj = { a: 1 };

if (Object.keys(obj).length) {
    // ...
}
```

### `Object`의 속성과 값이 동일한 이름일 경우 단축문을 사용한다.

**🚫 Bad**
```javascript
const apple = 'mac';

const obj = {
    apple: apple,
};
```

**✅ Good**
```javascript
const apple = 'mac';

const obj = {
    apple,
};
```

### `Object`의 단축 속성, 단축되지 않은 속성 순서로 균일하게 배치한다.

**🚫 Bad**
```javascript
const apple = 'mac';
const microsoft = 'windows';
const obj = {
    microsoft,
    redhat: 'rhel',
    apple,
};
```

**✅ Good**
```javascript
const apple = 'mac';
const microsoft = 'windows';
const obj = {
    apple,
    microsoft,
    redhat: 'rhel',
};
```

### 변수 할당 시 `null` 값을 대체할 값을 지정할 때 `if`문 대신 `OR` 기호나 `nullish (??)`를 활용한다.

**🚫 Bad**
```javascript
let value = currentValue;

if (!value) {
    value = 'Unknown';
}
```

**✅ Good**
```javascript
let value = currentValue || 'Unknown';
```

**✅ Good**
```javascript
let value = currentValue ?? 'Unknown';
```

### `for`문에서 `length`를 사용할 때 조건식에는 캐시된 값을 사용한다.

**🚫 Bad**

조건문이 실행될 때 마다 `length` 값을 계산한다.

```javascript
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
}
```

**✅ Good**
```javascript
const arr = [1, 2, 3, 4];
const arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
}
```

**✅ Good**
```javascript
const arr = [1, 2, 3, 4];

for (let i = 0, iLength = arr.length; i < iLength; i++) {
}
```

### 리턴할 때 한번만 사용되는 변수는 가급적 사용하지 않는다.

**🚫 Bad**
```javascript
function sum(a, b) {
    const test = a + b;
    return test;
}
```

**✅ Good**
```javascript
function sum(a, b) {
    return a + b;
}
```

### `null`과 `undefined`는 `false`값으로 대체할 수 있다.

**🚫 Bad**
```javascript
if (value === null) {
    // ...
}
```

**✅ Good**
```javascript
if (!value) {
    // ...
}
```

### 모호한 부울연산은 괄호로 구분한다.

**🚫 Bad**
```javascript
if (a || b && c) {
    // ...
}
```

**✅ Good**
```javascript
if (a || (b && c)) {
    // ...
}

```
### `switch`문에서 `default`는 하단에 배치한다. 

**🚫 Bad**
```javascript
switch (company) {
    default:
        break;
    case 'apple':
        // apple...
        break;
    case 'samsung':
        // samsung...
        break;
}
```

**✅ Good**
```javascript
switch (company) {
    case 'apple':
        // apple...
        break;
    case 'samsung':
        // samsung...
        break;
    default:
        break;
}
```

### 비교 연산자는 자료형을 확인할 수 있도록 동등 연산자(`==`) 대신 일치 연산자(`===`)를 사용한다.
숫자 `1`과 문자열 `'1'`을 엄격하게 비교하기 위해서는 `==` 를 사용해서는 안된다.

**🚫 Bad**
```javascript
if (a == 0) {
    // ...
}
```

**✅ Good**
```javascript
if (a === 0) {
    // ...
}
```

### `Accessor`는 `get`, `set`을 활용한 이름으로 지정한다.

**🚫 Bad**
```javascript
const box = new Box();

box.color(); // get current color
box.color('red'); // set color to red
```

**✅ Good**
```javascript
const box = new Box();

box.getColor(); // get current color
box.setColor('red'); // set color to red
```

### 긴 메소드 체이닝 함수는 여러줄로 표시하고 인덴트를 활용한다.

**🚫 Bad**
```javascript
box().select().delete().updateStatus().refresh();
```

**✅ Good**
```javascript
box()
    .select()
    .delete()
    .updateStatus()
    .refresh();
```

### 중첩되는 여러줄의 코드는 의미있는 묶음일 경우 한줄 주석으로 작성하지 않는다.

**🚫 Bad**
```javascript
function sum() {
    // let a = 1;
    // let b = 2;
    // return a + b;
}
```

**✅ Good**
```javascript
function sum() {
    /*
    let a = 1;
    let b = 2;
    return a + b;
    */
}
```

### 추가 작성 또는 수정이 필요한 내용은 작업 주석을 사용한다.

- `TODO`: 추후 작성해야하는 기능 또는 리팩토링이 필요한 코드
- `FIXME`: 해당 부분에 문제가 있어 추후 수정이 필요한 코드
- `XXX`: 구현이 완료되지 않았거나 재작성 필요, 또는 완전하지 않은 코드

**🚫 Bad**
```javascript
function sum() {
    // The given argument values must be added together
}
```

**✅ Good**

작업 주석의 콜론 뒤에는 공백이 들어가야 한다.
```javascript
function sum() {
    // TODO: The given argument values must be added together
}
```


### `alert`, `confirm`은 가능한 배제하고 로깅은 `console`을 사용한다.

**🚫 Bad**
```javascript
alert('error!');
if (confirm('continue?')) {
}
```

**✅ Good**
```javascript
console.error('error!');
console.log('log');
console.info('info');
```

### Console log에 `String`과 `Object`를 효율적으로 표시하는 방법

**🚫 Bad**

```javascript
const obj = { a: 1 };

console.log('test:' + obj); // return 'test: [object Object]'
```

**✅ Good**
```javascript
const obj = { a: 1 };

console.log('test:', obj); // return 'test: { a: 1 }'
```

## Prettier

### `if`와 `else`가 있을 경우 중괄호를 혼용하거나 한줄로 작성하지 않는다.

**🚫 Bad**
```javascript
if (isTrue) doFunction();
else {
    doAnotherFunction();
}
```

**🚫 Bad**
```javascript
if (isTrue) doFunction();
else doAnotherFunction();
```

**✅ Good**
```javascript
if (isTrue) {
    doFunction();
} else {
}
```

### `if`문이 종료되는 중괄호는 `else` 앞에 붙인다.

**🚫 Bad**
```javascript
if (isTrue) {
}
else {
}
```

**✅ Good**
```javascript
if (isTrue) {
} else {
}
```

### `if`와 `else`문의 리턴값이 각각 `true`/`false`값일 경우 한줄로 축약한다.

**🚫 Bad**
```javascript
if (isTrue) {
    return true;
} else {
    return false;
}
```

**✅ Good**
```javascript
return isTrue;
```
