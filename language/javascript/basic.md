# [JavaScript] Basic

## 삼항연산자
조건부 삼항연산자(Ternary Conditional Operator)라고도 부른다. `if`문을 간략히 작성하기 위해 사용되며 `if`문과의 성능 차이가 있을 수는 있지만 성능폭이 크지는 않다.

아래와 같은 `if`문이 주어진 경우,
```javascript
if (isExists) {
    return 'Exist';
}
return 'Not Exist';
```

삼항연산자로 바꾼다면 아래와 같이 작성할 수 있다.
```javascript
return isExists ? 'Exist' : 'Not Exist';
```

`?` 앞에는 조건문을 넣고, `:` 기호로 참일 때와 거짓일 때를 구분한다. 조건문 또는 참이나 거짓에 복잡한 구문이 들어가는 경우 괄호를 사용할 수 있다.

참이나 거짓에 삼항연산자를 다시 한번 사용하여 중첩 삼항연산자를 만들 수도 있다.
```javascript
return isExists ? 'Exist' : showError ? 'ERR' : null;
```

다만 위와 같은 중첩 삼항연산자는 코드 가독성에 호불호가 있으므로 가급적 사용하지 않는 것이 좋다.
필요한 경우 아래와 같은 방법으로 가독성을 높일 수 있다.
```javascript
return isExists ? 'Exist' : (showError ? 'ERR' : null);
```

```javascript
return isExists ? 'Exist' :
       showError ? 'ERR' :
       null;
```

삼항 연산자의 참과 거짓에는 리턴값 외에 함수를 사용하지 않는 것이 좋다. 분기가 많아질 경우는 `if`문을 쓰는 것이 더욱 바람직 할 수 있다.
