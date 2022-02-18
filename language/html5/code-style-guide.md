# HTML5 Code Style Guide

개인적이지만 합당한, 간결하면서도 모던한 코드 작성 스타일 가이드

## HTML

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
