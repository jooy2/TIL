# CSS3 Code Style Guide

개인적이지만 합당한, 간결하면서도 모던한 코드 작성 스타일 가이드

## CSS

### 마지막 속성에는 세미콜론(`;`)을 붙이지 않는다.

**🚫 Bad**

```css
.myClass {
	display: block;
	background: red;
}
```

**✅ Good**

```css
.myClass {
	display: block;
	background: red;
}
```

### 속성과 속성 사이, 속성과 값 사이에 공백을 붙인다.

**🚫 Bad**

```css
.myClass {
	display: block;
	background: red;
}
```

**✅ Good**

```css
.myClass {
	display: block;
	background: red;
}
```

### 여러 단계의 선택자일 수록 아래쪽에 배치한다.

**🚫 Bad**

```css
.myClass > div > p {
	color: white;
}
.myClass > div {
	background: blue;
}
.myClass {
	display: block;
	background: red;
}
```

**✅ Good**

```css
.myClass {
	display: block;
	background: red;
}
.myClass > div {
	background: blue;
}
.myClass > div > p {
	color: white;
}
```

### 필요하지 않은 경우 `important`를 남용하지 않는다.

**🚫 Bad**

```css
.active {
	color: blue !important;
}
.another-active {
	color: red !important;
	background: black !important;
}
```

**✅ Good**

```css
.active {
	color: blue;
}
.another-active {
	color: red !important;
	background: black;
}
```

### 속성 값이 0인 경우 단위를 사용하지 않는다.

**🚫 Bad**

```css
.myDiv {
	padding: 0px;
}
```

**✅ Good**

```css
.myDiv {
	padding: 0;
}
```

### 여러 방향의 속성을 정의할 경우 (특히 같은 값일 때) 가능한 한줄로 축약할 수 있도록 한다.

**🚫 Not Good**

```css
.myDiv {
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
}
```

**✅ Good**

```css
.myDiv {
	padding: 10px;
}
```

각 방향 마다 서로 다른 값을 가지는 경우 `padding`이나 `margin` 속성의 경우 `TRBL`(Top, Right, Bottom, Left)의 순서로 작성할 수 있다.

```css
.myDiv {
	padding: 10px 5px 10px 20px;
}
```
