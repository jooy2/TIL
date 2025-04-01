# Git Submodules

Git 프로젝트 파일에서 별도의 Git 리포지토리의 파일을 연결하여 불러올 수 있다. 이렇게 하면 기존의 프로젝트의 Git 파일에 추가되지 않고, 모듈처럼 설치되어 관리할 수 있다.

## 서브모듈 초기화

```shell
$ git submodule add [Repository URL] [Path]
```

예를 들어 TIL 리포지토리 파일을 AAA 프로젝트 경로 루트의 /til 폴더로 불러오려면, 아래와 같이 사용한다.

```shell
$ git submodule add git@github.com:jooy2/TIL.git til
```

이 때 프로젝트 루트에 `.gitmodules` 파일이 만들어지는 것을 확인한다.

```text
[submodule "til"]
	path = til
	url = git@github.com:jooy2/TIL.git
```

커밋할 때는 `.gitmodules` 파일만 커밋되어야 한다. 또한 해당 서브모듈 디렉토리의 커밋 정보가 담긴 파일을 같이 커밋해야 할 수 있다.

## 서브모듈 업데이트

프로젝트에서 설정된 특정 커밋으로 서브모듈을 불러온다.

```shell
$ git submodule update --recursive
```

## 서브모듈 업데이트 & 원격 최신 정보 pull

프로젝트에서 설정된 것이 아닌 서브모듈 리포지토리의 최신 커밋으로 서브모듈을 업데이트한다.

```shell
$ git submodule update --recursive --remote
```

## 서브모듈 초기화

서브모듈을 사용하지 않거나 다시 설정하려는 경우 아래 방법을 사용한다.

```shell
$ git submodule deinit --all

# 필요한 경우 캐시 삭제
$ git rm --cached [path]

# 필요한 경우 서브모듈 파일 삭제
$ rm -r .git/modules/[path]
```
