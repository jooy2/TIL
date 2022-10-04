# HTML5 Code Style Guide

개인적이지만 합당한, 간결하면서도 모던한 코드 작성 스타일 가이드

## HTML

### 태그는 모두 소문자로 작성한다.

**🚫 Bad**
```html
<DIV id='container'></DIV>
```

**🚫 Bad**
```html
<Div id='container'></Div>
```

**✅ Good**
```html
<div id="container"></div>
```

### 태그의 시작점과 끝점, 속성과 속성 사이에는 공백을 넣지 않는다.

**🚫 Bad**
```html
<div id="root"   class="container" ></div>
```

**✅ Good**
```html
<div id="root" class="container"></div>
```

### 태그 속성은 큰따옴표(`“`)로 구분한다.

**🚫 Bad**
```html
<div id='container'></div>
```

**✅ Good**
```html
<div id="container"></div>
```

### 인라인 스타일을 가능한 사용하지 않는다.

**🚫 Bad**
```html
<div style="color: green"></div>
```

**✅ Good**
```html
<div class="myDiv"></div>
...
<style>
  .myDiv { color: green }
</style>
```

### `script` 태그는 `body` 하단에 두는 것을 권장한다.

**🚫 Bad**
```html
<head>
  <script>...</script>
</head>
<body>
...
</body>
```

**🚫 Bad**
```html
<head>
...
</head>
<body>
...
<script>...</script>
...
</body>
```

**✅ Good**
```html
<body>
...
</body>
<script>...</script>
```

### Heading 태그에서 `h1`은 한번만 사용한다.

**🚫 Bad**
```html
<h1>코드 스타일 가이드</h1>
<p>내용</p>
<h1>참고자료</h1>
<p>내용</p>
```

**✅ Good**
```html
<h1>코드 스타일 가이드</h1>
<p>내용</p>
<h2>참고자료</h2>
<p>내용</p>
```

### Heading은 높은 순서대로, 의미있게 사용해야 하며 내용 콘텐츠에는 사용하지 않는다.

- 핵심적인 제목은 `h1` 태그로 한번만
- `h2`, `h3`, `h4`... 순서로 작성
- `h1`은 제목, `h2`~`h6`은 분류, 부제목에만 사용할 것

**🚫 Bad**
```html
<h1>코드 스타일 가이드</h1>
<h3>JavaScript</h3>
<p>내용</p>
<h3>HTML5</h3>
<h6>HTML 태그를 올바르게 사용해야 한다.</h6>
<p>내용</p>
<h5>참고자료</h5>
<p>내용</p>
```

**✅ Good**
```html
<h1>코드 스타일 가이드</h1>
<h2>JavaScript</h2>
<p>내용</p>
<h2>HTML5</h2>
<p>HTML 태그를 올바르게 사용해야 한다.</p>
<p>내용</p>
<h2>참고자료</h2>
<p>내용</p>
```

### 리스트나 목록을 태그로 표현할 때 개행을 활용한다.

**🚫 Bad**
```html
<ul>
    <li>사과</li><li>바나나</li><li>포도</li>
</ul>
```

**✅ Good**
```html
<ul>
    <li>사과</li>
    <li>바나나</li>
    <li>포도</li>
</ul>
```

### 이벤트 처리 명령은 `script` 태그로 빼는 것이 좋다.

**🚫 Bad**
```html
<button onclick="{ console.log('hello'); }">Test Button</button>
```

**✅ Good**
```html
<body>
    <button onclick="onClickTestButton()">Test Button</button>
</body>

<script type="text/javascript">
    function onClickTestButton() {
        console.log('hello');
    }
</script>
```
