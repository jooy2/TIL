# 옵셔널 체이닝 (Optional Chaining)

옵셔널 체이닝은 **[ECMAScript 2020(ES11)](https://www.ecma-international.org/)** 표준을 지원하는 환경에서 사용할 수 있다.

```javascript
const layout = {
	header: {
		menu: {
			active: 0,
			items: ['home', 'login', 'admin']
		},
		height: 100,
		onMenuClick: function (index) {
			console.log('Click: ', index);
		}
	},
	body: {
		heading: 'hello',
		desc: 'world'
	},
	footer: {
		copyright: 'ⓒ 2022'
	}
};
```

위 코드와 같이 단계적으로 구성된 객체가 주어질 때 헤더의 메뉴 리스트에 접근하기 위해서는 `layout.header.menu.items`와 같이 하위 속성에 순차적으로 접근하여 값을 얻을 수 있다.

```javascript
const menus = layout.header.menu.items;
console.log(menus); // ['home', 'login', 'admin']
```

그렇다면 `layout` 또는 하위 객체 중 하나가 `null` 또는 `undefined`일 경우에는 어떻게 될까? **JavaScript**에서는 다음과 같은 에러 메시지를 출력한다.

```shell
TypeError: Cannot read properties of null (reading 'header')
```

`header`를 참조하기 전 상위 값이 `null`이거나 `undefined`이므로 더 이상 참조할 속성이 없어 발생하는 에러이다. 따라서 일반적으로는 `layout`에 대한 참조 가능한 값이 없을 때에 대한 예외 처리가 필요하다.

```javascript
if (layout && layout.header && layout.header.menu) {
	console.log(layout.header.menu.items); // ['home', 'login', 'admin']
}
```

위 조건문에서는 `layout`, `header`, `menu`까지 모두 유효한 값일 때만 찾으려는 `items`값을 읽도록 한다. 다만 위 코드에서 보다시피 참조해야 하는 단계가 많아질 경우 `if`문에 작성해야 하는 코드는 점점 길어질 것이다. 매번 하위 속성 마다 예외 처리를 하기에는 번거로울 수 있다.

이러한 문제를 해결하기 위하여 **옵셔널 체이닝**이 등장하였다. 옵셔널 체이닝은 `?.` 연산자를 사용하며 상위 참조값이 `null`이거나 `undefined`인 경우 다음 표현식의 리턴값을 `undefined`로 리턴시켜준다.

```javascript
const layout = null;
console.log(layout?.header); // undefined

const layout2 = {};
console.log(layout2?.header?.menu?.items); // undefined
```

위 `if`문을 사용한 코드와 달리 훨씬 더 코드를 간결하게 표현할 수 있다는 장점이 있다.

`array`나 `function`도 마찬가지로 옵셔널 체이닝을 사용할 수 있다.

```javascript
const layout = {};
console.log(layout?.header?.menu?.items?.[0]); // undefined

console.log(layout?.header?.onMenuClick?.()); // undefined
```

여기서 유의할 점은 `onMenuClick`이 함수가 아니면서 `null`이나 `undefined`가 아닌 값을 가지고 있는 경우 다음과 같은 호출 에러가 발생할 수 있으므로 여전히 관련된 예외 처리를 해주어야 할 수 있다.

```shell
TypeError: layout?.header?.onMenuClick is not a function
```

## Reference

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
