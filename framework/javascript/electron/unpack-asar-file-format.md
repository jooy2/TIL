# asar 파일 언팩
**[Electron](https://www.electronjs.org)** 패키지를 빌드하면 빌드 설정에 따라 `.asar` 확장자로 압축되어 패키징되는 경우가 있다.

이 파일은 `electron-builder` 기준, 패키지가 만들어지는 대상 디렉토리에서 `win-unpacked\resources`에 위치해있다. 프로덕션용 패키지 파일(`.exe` 등)을 설치하면 프로그램이 설치된 디렉토리의 `resources` 디렉토리에 존재한다.

이 파일은 실제로 암호화 보다는 패키지 압축 파일에 더 가깝다. 이 파일을 열어보면 빌드된 파일을 모두 확인해 볼 수 있다.

`.asar` 파일을 풀어보려면 `asar` 모듈의 `extract` 명령어를 사용하여 간단히 풀어볼 수 있다.

```shell
$ npx asar extract app.asar asarResources
```

`npx`는 프로젝트 디렉토리가 아닌 환경에서 설치 과정 없이 특정 모듈의 명령어를 실행해주는 명령어이다. `extract`의 처음 인자값은 `asar` 파일의 경로, 두번째 인자값은 추출할 디렉토리 경로(없다면 생성)를 입력한다.

위 명령어를 실행하면 현재 경로에 `asarResources` 디렉토리가 만들어지고 해당 디렉토리 안에 압축 해제된 파일들이 만들어진다.

`electron-builder`에서 `asar` 파일 압축 없이 패키징을 하기 위해서는 `package.json` 파일에서 빌드 옵션을 조정해주면 된다.

```json
{
  "build" {
    "asar": false
  }
}
```
