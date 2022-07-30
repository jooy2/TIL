# Clasp
`clasp`는 **[Google Apps Script](https://developers.google.com/apps-script)** 기반 프로젝트를 로컬에서 작업하고 서비스 중인 파일로 `push`하여 업데이트할 수 있도록 도와주는 라이브러리이다. `clone` 스크립트가 탑재된 새로운 문서를 생성할 수도 있다.

- GitHub: https://github.com/google/clasp
- Documents: https://developers.google.com/apps-script/guides/clasp

# 설치
`clasp`는 **NodeJS** 런타임에서 구동되는 `CLI` 명령어 도구이다. 따라서 `npm` 패키지를 통해 아래와 같이 설치할 수 있다.

```shell
$ npm install -g @google/clasp
```

`clasp`의 모든 구성을 제대로 사용하려면 다음 페이지에 Google 계정으로 로그인한 후 Google Apps Script API의 사용 설정을 '사용'으로 변경해야 한다: https://script.google.com/home/usersettings

이후 다음 명령어를 실행하여 계정 정보를 로컬 데스크톱에 저장한다. 앞으로 사용하는 명령어는 구글 계정 액세스를 요구할 수 있다.

```shell
$ clasp login
```

# 사용법

`clasp`를 활용하여 Apps Script 프로젝트를 새로 생성하려면 다음 명령어를 사용한다.

```shell
$ clasp create

? Create which script? sheets
Created new Google Sheet: https://drive.google.com/open?id=1yEnsWrCybp-KKKMHX-#########################
Created new Google Sheets Add-on script: https://script.google.com/d/1U3UDIRjB_##############################################/edit
Warning: files in subfolder are not accounted for unless you set a '/home/user/project/.claspignore' file.
Cloned 1 file.
└─ /home/user/project/appsscript.json
```

문서 형식(문서, 스프레드시트...)에 대한 URL과 스크립트 프로젝트의 URL 두개가 생성된다. 문서 파일은 Google 드라이브의 최상위 경로에 생성되어 있을 것이다.

이렇게하면 프로젝트 루트에 `.clasp.json` 파일이 생성된다. 해당 파일을 열어보면 현재 가리키고 있는 Google Script ID를 확인할 수 있다.

이후 로컬에서 작업한 내역을 문서 스크립트로 업로드하여 갱신하려는 경우 다음 명령어를 사용한다.

```shell
$ clasp push
```

코드를 `push`할 때 주의해야 할 것이 있다. 프로젝트 내에 Apps Script와는 무관한 파일들이 존재하면 이 파일들도 같이 업로드될 수 있다. (예: `node_modules`, `package.json`...)

업로드한다고 스크립트 자체에 영향을 미치지는 않지만 가능한 프로젝트와 연관있는 파일만 업로드하는 것이 좋기 때문에 업로드하지 않아도 되는 파일은 `.claspignore` 파일을 생성하여 무시할 수 있다.

`.claspignore`는 `.gitignore`와 유사하다. 아래는 `node_modules`와 `package.json` 파일을 업로드하지 않는 규칙의 예시이다.

```text
package.json
node_modules/**
node_modules/**/.*/**
node_modules/**/.*
```

코드를 `push`한 후 문서 파일이나 스크립트 에디터가 웹페이지에 열려있다면 새로고침으로 갱신이 필요할 수 있다.
