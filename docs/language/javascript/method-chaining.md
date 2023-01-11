# 메소드 체이닝

**메소드 체이닝(Method Chaining)** 은 코드를 작성할 때 클래스 내의 메소드를 연속적으로 사용하기 위해 다음 메소드를 이어서 작성하는 프로그래밍 기법이다. 일반적으로 배열의 메소드나 **[jQuery](https://jquery.com)** 라이브러리에서 주로 사용하는 방법이기도 하다.

아래 `Company`라는 클래스가 있다고 가정한다.

```javascript
class Company {
	constructor() {
		this.uniqueId = 0;
		this.name = '';
		this.country = '';
	}

	setName(name) {
		this.name = name;

		return this;
	}

	setUniqueId(id) {
		this.uniqueId = id;

		return this;
	}

	setCountry(country) {
		this.country = country;

		return this;
	}
}
```

자바스크립트에서는 특정 클래스의 메소드를 사용할 때 다음과 같이 사용한다.

```javascript
const company = new Company();

company.setName('Samsung');
company.setUniqueId(12345678);
company.setCountry('South Korea');
```

위와 같이 한번에 사용해야 하는 메소드가 많으면 많을수록 코드가 복잡해 보일 수 있다. 메소드 체이닝을 활용한다면 다음과 같이 간략하게 코드를 작성할 수 있다.

```javascript
const company = new Company();

company.setName('Samsung').setUniqueId(12345678).setCountry('South Korea');
```

또는 다음과 같이 개행으로 구분하여 사용해도 된다.

```javascript
const company = new Company();

company.setName('Samsung').setUniqueId(12345678).setCountry('South Korea');
```

다만 메소드 체이닝을 사용하기 위한 조건이 있다. 메소드 체이닝에 사용되는 메소드는 모두 `this`로 리턴되어야 한다.

```javascript
class Company {
	setCountry(country) {
		this.country = country;

		return this; // <---- Add this
	}
}
```

이렇게 해야만 이전 메소드에서 리턴된 객체로 다시 메소드를 호출할 수 있다.

메소드 체이닝은 코드의 복잡성에 따라서 간결해보이면서도 코드 해석에 대해 혼동을 줄 수 있기 때문에 상황에 따라서 사용하는 것이 좋다.

또한 매번 자기 자신의 객체를 리턴하기 때문에 성능면에서는 좋지 않을 수 있다.
