# Git 로컬 프로젝트에 변경된 기본 브랜치 이름 적용하기

GitHub에서 프로젝트의 기본 브랜치 이름이 변경되고 로컬 프로젝트에서 클론한 파일들이 있다면 로컬 프로젝트에서 변경사항을 반영해주어야 한다.

일반적으로 변경된 브랜치로 리다이렉션되어 코드를 push하는 데에는 큰 문제가 없겠지만 추후의 상황을 위해 가급적 빠르게 변경사항을 갱신해주는 것이 좋다.

만약 `master` 브랜치가 `main` 브랜치로 변경되었을 경우, 프로젝트 루트에서 아래 커맨드를 모두 실행한다.

```shell
$ git branch -m master main
$ git fetch origin
$ git branch -u origin/main main
$ git remote set-head origin -a
```
