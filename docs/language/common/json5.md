# JSON5 파일 확장자

[**JSON5**](https://json5.org)는 기존 JSON 포맷에서 부족했던 여러가지 단점을 보완한 파일 포맷이다. 파일 확장자가 `.json5`로 시작하여야 한다.

가장 큰 변동사항은 파일 내에 **주석**을 달 수 있다. 대부분의 프로그래밍 언어에서 사용하는 것과 동일하게 한줄 주석은 `//`로, 여러 줄 주석은 `/*`로 시작하고 `*/`로 끝난다.

```json5
{
	id: 1234,
	// This is single line comment
	fruits: [
		'apple',
		'orange',
		'banana' // Fruits
	],
	/* This
     is
     Multi line
     comment
    */
	isEnable: true
}
```

마지막 키값의 끝에 콤마(`,`)를 넣어도 오류가 발생하지 않는다. 선택적으로 데이터 끝에 콤마를 붙일 수 있다.

```json5
{
	id: 1234,
	name: 'lee' // <<--- ','
}
```

문자열 데이터는 `\` 기호를 끝에 붙여 여러줄로 작성할 수 있다. (주의: `\`는 반드시 끝에 붙여야 한다. 마지막 줄엔 붙이지 않는다.)

```json5
{
	multiLineString: 'Hello\
  World\
  JSON5\
  Sample'
}
```

16진수, 소수점 표현, `+` 또는 `-` 기호, `NaN` 등의 여러 값 형식을 추가로 지원한다.

```json5
{
	id: 12345678,
	NaN: NaN, // <--- NaN 데이터
	infinity: Infinity, // <--- Infinity 데이터
	plus: +1234, // <--- + 사용
	minus: -1234, // <--- - 사용
	hexadecimal: 0xbc614e, // <--- 16진수 데이터
	leadingDecimalPoint: 0.1234 // <--- 선행 소수점 데이터
}
```
