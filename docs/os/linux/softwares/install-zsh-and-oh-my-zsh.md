# 리눅스 `Zsh`와 `Oh My Zsh` 설치하기

**Zsh**(Z Shell)은 기존의 Bash Shell에서 많은 개선사항과 여러가지 확장 기능을 지원하는 셸이다. [Oh My Zsh](https://ohmyz.sh)는 Zsh에 확장 및 구성을 관리해주는 프레임워크이며 Zsh를 설치할 때 함께 설치하는 경우가 많다.

## Zsh 설치

### Ubuntu 계열

`apt` 패키지 관리자 명령어로 `Zsh`를 설치한다.

```shell
$ sudo apt install zsh
```

### macOS

macOS의 최신 버전 부터는 `Zsh`이 기본 로그인 셸로 동작한다. 따라서 최신 버전을 사용하고 별다른 설정을 하지 않았다면 별도로 설치할 필요가 없다. 만약 설치되어있지 않다면 수동으로 설치해줄 수 있다. 설치를 위해서는 `brew`가 사전에 설치되어있어야 한다.

```shell
$ brew install zsh
```

### 설치 후 기본 셸을 Zsh로 전환하기

`chsh` 명령어를 이용하여 기본 로그인 셸을 변경할 수 있다. 명령을 실행한 현재 사용자에게만 적용된다.

```shell
$ chsh -s $(which zsh)
```

제대로 설정이 반영되려면 터미널 앱을 껐다가 켜야 할 수 있다.

## Oh My Zsh 설치

`curl` 또는 `wget` 명령어로 설치할 수 있으며 `curl`, `wget`은 기본 명령어가 아닐 수 있으므로 사전에 설치해야할 수 있다.

`Zsh`를 활성화할 때와 마찬가지로 `Oh My Zsh`를 활성화할 사용자의 터미널에서 아래 명령을 실행한다. 다른 사용자에도 적용하려면 각자 명령을 실행해야 한다.

### `curl` 명령어로 설치

```shell
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### `wget` 명령어로 설치

```shell
$ sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

## 설치 이후

설치 후 `~/.zshrc` 파일을 편집하여 `Zsh`를 사용자 지정할 수 있다.

상단의 `ZSH_THEME` 값을 변경하여 원하는 `Zsh` 테마를 지정할 수 있다.

```shell
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
#ZSH_THEME="agnoster"
ZSH_THEME="simple"
```

`Zsh`에서 Home/End 키가 정상 동작하지 않는 경우 `.zshrc` 하단에 다음 내용을 추가한다.

```shell
bindkey "\033[1~" beginning-of-line
bindkey "\033[4~" end-of-line
```

설정을 편집한 후에는 다음 명령을 실행하여 적용한다.

```shell
$ source ~/.zshrc
```
