# Electron 에러로 인한 크래시 처리

[Electron](https://www.electronjs.org)을 사용한 코드에서 에러가 발생하면 발생 위치에 따라 애플리케이션 크래시가 발생한다.

메인 프로세스에서 크래시가 발생하면 시스템 다이얼로그가 표시되며, 렌더러 프로세스(BrowserWindow)에서 크래시가 발생하면 DevTool이 죽으면서 앱이 동작하지 않는다.

## 메인 프로세스 크래시 처리

- 문서: https://nodejs.org/api/process.html#event-uncaughtexception

```javascript
process.on('uncaughtException', (err, origin) => {
  // 메인 프로세스 크래시 발생 시 처리할 코드
})
```

## 렌더러 프로세스 크래시 처리

- 문서: https://www.electronjs.org/docs/latest/api/app#event-render-process-gone

이외에도 `child-process-gone` 이벤트도 있다.

```javascript
import { app } from 'electron';

app.on('render-process-gone', (event, webContents, details) => {
  // 렌더러 프로세스 크래시 발생 시 처리할 코드
})
```
