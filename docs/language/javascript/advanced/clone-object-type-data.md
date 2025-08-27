# 객체 타입의 데이터 복제

**JavaScript**에서 **객체(object)** 형식의 데이터는 다른 변수에 재할당하여도 속성 값이 동시에 변경될 수 있다.

예를 들어 다음과 같이 `objA`, `objB`의 두 변수가 있고, `objB` 변수에는 `objA`를 대입한다. 이후 `objB` 변수의 `age` 속성 값을 `20`으로 변경하였다.

```javascript
const objA = { name: 'Lee', age: 10 };
const objB = objA;

objB.age = 20;

console.log(objA.age); // 20
console.log(objB.age); // 20
```

이 때 직접적으로 조작하지 않은 `objA`의 `age` 속성 값도 `20`으로 변경되었음을 확인할 수 있다.

자바스크립트 객체를 다른 변수에 할당할 경우 데이터 그대로를 복제하는 것이 아닌 **참조값**을 저장한다. 또한 복잡한 단계로 구성된 객체를 복제하기 위해 `Object.assign`을 사용할 때에도 문제가 발생할 수 있다. 따라서 원본 객체를 유지하면서 객체 값 그대로 새로운 변수에 복제하려면 다른 방법을 사용해야 한다.

아래 방법 중 일부는 객체 내 속성값의 모든 데이터 타입을 지원하지 않을 수 있다. 여기서는 중첩된 데이터 속성까지 모두 복제 가능한 방법만 기술하였다.

### `structuredClone` 사용 (권장)

`structuredClone`은 브라우저 레벨에서 지원되는 객체 복제 메소드이다. 별도의 서드파티 모듈이나 직접적으로 구현할 필요 없이 단 한줄로 사용할 수 있다.

```javascript
const objA = { name: 'Lee', age: 10 };

const objB = structuredClone(objA);

objB.age = 20;

console.log(objA.age); // 10
console.log(objB.age); // 20
```

`structuredClone`은 최신 브라우저에서 지원되며 오래된 브라우저에서는 동작하지 않을 수 있으므로 다음 페이지에서 호환 여부를 확인한다: https://caniuse.com/?search=structuredclone

**Node.js**는 18.x 버전 이후부터 정식으로 사용할 수 있다.

### lodash `cloneDeep` 사용

**[lodash](https://lodash.com)** 모듈은 자바스크립트 코드 작성에 많은 도움을 주는 유틸리티 함수의 집합체 모듈이다. 유사 모듈로는 `jquery`, `underscore.js` 등이 있다.

```javascript
const objects = [{ a: 1 }, { b: 2 }];

const deep = _.cloneDeep(objects);

console.log(deep[0] === objects[0]); // false
```

여러가지 형식에 대해 객체 복제에 대한 많은 검증이 완료된 메소드이므로 안심하고 사용할 수 있다. 하지만 이 메소드를 사용하기 위해 무거운 `lodash` 모듈을 사용해야 하는 것이 단점이 될 수 있다.

### `clone` 모듈 사용

**[node-clone](https://github.com/pvorb/clone)** 객체 복제 전용 모듈을 사용하여 객체를 복제할 수 있다. 많은 다운로드 수와 GitHub 스타 수로 신뢰할 수 있고 위 방법들 중에서 퍼포먼스가 가장 좋다고 한다. 하지만 유지보수가 오래전에 끊겼으며 몇가지 이슈도 존재하는 것으로 보인다.

```javascript
const clone = require('clone');

const a = { foo: { bar: 'baz' } }; // initial value of a
const b = clone(a); // clone a -> b

a.foo.bar = 'foo'; // change a

console.log(a); // show a
console.log(b); // show b
```
