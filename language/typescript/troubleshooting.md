# [TypeScript] Troubleshooting

## Type number trivially inferred from a number literal
```shell
Type number trivially inferred from a number literal, remove type annotation  @typescript-eslint/no-inferrable-types
```
파라미터 특정 인자값에 기본값을 지정한 경우 TypeScript는 자동 추론에 의해 타입을 알아서 판단하므로 타입을 별도로 선언하지 않아도 된다.

위 에러 메시지는 `eslint`에서 표시되는 메시지로 간단히 해당 규칙(`@typescript-eslint/no-inferrable-types`)을 비활성화하여 끌 수 있기도 하다.

```typescript
export function getUserAccount(isGoogleAccount : boolean = true) : boolean {
    if (isGoogleAccount) {
        // code here
    }
    return true
}
```
다음 코드에서 `isGoogleAccount : boolean`은 기본값으로 지정된 `true`로 인해 `boolean` 타입임을 추론할 수 있으므로 `boolean`을 별도로 선언할 필요가 없다.

수정된 코드는 다음과 같다.

```typescript
export function getUserAccount(isGoogleAccount = true) : boolean {
    if (isGoogleAccount) {
        // code here
    }
    return true
}
```
