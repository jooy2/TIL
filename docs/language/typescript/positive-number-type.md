# TypeScript Positive Number Type

타입스크립트에서 `number` 데이터 타입은 모든 숫자를 허용한다. 만약 `-1`, `-2`와 같은 값이 아닌 양수만 허용하고 싶은 경우는 별도의 타입을 선언해주어야 한다.

자세한 내용은 아래 `Stackoverflow` 링크를 참고한다. https://stackoverflow.com/questions/21224922/is-there-a-way-to-represent-a-non-negative-integer-in-typescript-so-that-the-com

```typescript
declare type PositiveNumber<N extends number> = number extends N
	? N
	: `${N}` extends `-${string}`
	? never
	: N;
```

위 링크에 설명된대로 `PositiveNumber`라는 데이터 타입을 `declare`를 사용하여 선언한다. `number` 데이터형의 속성을 상속받은 후 템플릿 리터럴을 사용하여 제공받은 값이 음수값인지 확인된다면 `never`형으로 인식되게 한다.

위와 같이 선언하였다면 `PositiveNumber<N>`과 같이 사용할 수 있다. 주의할 점은 선언된 `N` 타입 변수는 `number`형으로 확장되어야 한다.

```typescript
function sum<N extends number>(number1: PositiveNumber<N>, number2: PositiveNumber<N>): number {
	return number1 + number2;
}
```

이제 아래 코드로 타입 체크가 정상적으로 이루어지는지 확인해본다.

```typescript
sum(-1, -2);
```

위 코드를 사용했을 경우 아래와 같은 오류가 발생해야 한다.

```shell
TS2345: Argument of type 'number' is not assignable to parameter of type 'never'.
```
