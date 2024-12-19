# JavaScript Array `every`와 `some`

자바스크립트의 Array 메소드 `every`와 `some`은 배열 내 요소가 지정한 조건에 일치하는지 확인하고 `boolean`값을 리턴하는 메소드이다.

## `every`

`every`는 AND 조건 처럼 배열 내 모든 요소가 조건에 모두 일치할 경우에만 `true`를 반환한다.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.every((item) => item < 5)); // Returns `false`
console.log(arr.every((item) => typeof item === 'number')); // Returns `true`
console.log(arr.some((item) => item === 1)); // Returns `false`
```

조건식의 결과가 `false`가 나올 때 까지 배열의 요소를 조회하지만, `false`가 나온다면 배열의 순회를 즉시 중단한다.

## `some`

반면 `some`은 OR 조건 처럼 배열 내 요소 중 하나 이상이 조건에 일치할 경우 `true`를 반환한다.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.some((item) => item < 5)); // Returns `true`
console.log(arr.some((item) => typeof item === 'number')); // Returns `true`
console.log(arr.some((item) => item === 1)); // Returns `true`
```

`every`와는 반대로 조건식 중 `true`가 반환되면 즉시 배열의 순회를 중단한다.
