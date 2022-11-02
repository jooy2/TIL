# 널 병합 연산자 (Nullish coalescing operator)

널 병합 연산자(`??`)는 **ES2020(ES11)** 표준으로 지정된 `JavaScript`의 연산자이다. 기존의 논리 OR 연산자 (`||`)와 논리 AND 연산자 (`&&`)에서 좌측의 값(피연산자)이 `falsy`한 값일 때 우측의 값을 반환하는 형식이었다면, 널 병합 연산자는 좌측의 값이 오직 `null`이나 `undefined`일 때만 우측의 값을 반환한다.

여기서 `falsy`한 값은 주로 다음과 같은 값들이 있다:

- `false`
- `0`
- `''`
- `null`
- `undefined`
- `NaN`

위의 값을 일반적으로 사용하는 연산자를 사용하여보면, `falsy`한 값에 대해 우측의 값 `'FALSE'`를 반환할 것이다.

```javascript
console.log(0 || 'FALSE'); // 'FALSE'
console.log(false || 'FALSE'); // 'FALSE'
console.log('' || 'FALSE'); // 'FALSE'
console.log(null || 'FALSE'); // 'FALSE'
console.log(undefined || 'FALSE'); // 'FALSE'
```

그러나 널 병합 연산자를 사용하면 결과가 달라진다.

```javascript
console.log(0 || 'FALSE'); // 0
console.log(false || 'FALSE'); // false
console.log('' || 'FALSE'); // ''
console.log(null || 'FALSE'); // 'FALSE'
console.log(undefined || 'FALSE'); // 'FALSE'
```

피연산자가 `null`과 `undefined`일 경우에만 `'FALSE'`가 반환된다.

이러한 특성 때문에 조금 더 명확하게 `nullish`한 데이터를 잡아낼 수 있다. `0`과 `1`로 리턴되는 값에 대해 조건문의 처리에서 실수가 발생할 가능성도 적어진다.

## Reference

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
