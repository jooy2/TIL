# 템플릿 리터럴 (Template literals)

템플릿 리터럴은 문자열과 문자열 또는 변수 사이에서의 연산에 대해 가독성 있는 코드를 작성할 수 있게 해주는 문법이다. 템플릿 스트링이나 템플릿 문자열 모두 같은 말이지만 **[ECMA Script](https://www.ecma-international.org/)** 표준이 개정되면서 템플릿 리터럴로 불리게 되었다. 템플릿 리터럴은 **ES2015(ES6)** 이상의 표준을 사용하는 환경에서만 사용할 수 있다.

## 기존 방식(String literals)의 단점
기존 문자열 리터럴의 표현은 다음과 같이 이루어졌다.

```javascript
const str = "Hello " + 12345 + " World!";
console.log(str); // Hello 12345 World!
```

병합할 문자열 또는 변수들 사이에 `+` 기호를 사용했었다. 다만 이렇게 되면 병합해야 할 요소들이 많아지게 될 때 문제가 발생한다.

```javascript
const aNum = 1;
const bNum = 2;
const cNum = 3;
const str = "[ A is: " + aNum + ", B is: " + bNum + ", C is: " + cNum + " ]";
console.log(str); // [ A is: 1, B is: 2, C is: 3 ]
```

하나의 변수 안에 들어가야 하는 조합이 많아질 수록 한 줄이 너무 길어지게 될 뿐만 아니라 보기에도 다소 헷갈릴 수 있다.

## 템플릿 리터럴 사용하기

위와 같은 가독성 문제를 해결하기 위해 템플릿 리터럴이 등장했다. 사용법은 아주 간단하다. 기존의 따옴표(`"` 또는 `'`) 대신 백틱(`` ` ``) 기호를 사용하여 시작과 끝을 지정한다.

```javascript
const aNum = 1;
const bNum = 2;
const cNum = 3;
const str = `[ A is: ${aNum}, B is: ${bNum}, C is: ${cNum} ]`;
```

`+` 기호 대신 달러(`$`)와 중괄호(`{`와 `}`) 기호를 사용함으로서 변수를 포함할 수 있으며 이외에는 보이는 그대로 사용하기 때문에 조금 더 코드가 간단히 표현되었다.

템플릿 리터럴의 또 다른 특징은 텍스트 개행을 단순히 엔터로 구분할 수 있다는 것이다. 아래와 같은 문자열 리터럴 코드가 있다고 가정한다면:

```javascript
const str = "Hello\nWorld\nLorem\nIpsum";
// OR...
const str = "Hello"
    + "\nWorld"
    + "\nLorem"
    + "\nIpsum";
```

템플릿 리터럴로는 다음과 같이 표현할 수 있다:

```javascript
const str = `Hello
World
Lorem
Ipsum`;
```
주의할 점은 `World`, `Lorem`, `Ipsum` 앞에 공백이나 탭 기호가 있다면 해당 문자가 같이 포함되므로 위와 같이 좌측에 붙여서 표현해야 할 수 있다.

또한 템플릿 리터럴에서는 아래 코드와 같이 따옴표(`'` 또는 `"`)를 별도의 이스케이프 처리 없이도 사용할 수 있다.

```javascript
const str = `'Apple' is "Fruit".`;
```
