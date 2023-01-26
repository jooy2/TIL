# 변수 이름 명명 시 케이스 타입

변수명을 정의할 때는 프로젝트나 언어의 특성에 맞게 통일성있게 구분 기호나 대/소문자를 활용해야 한다. 아래는 대부분의 언어에서 사용되는 변수명의 케이스 타입이다.

## 카멜 케이스 (Camel Case)

낙타의 굴곡진 형태에 비롯한 케이스 표기법으로 첫 문자는 소문자로, 이후 단어 부터 첫 문자 마다 대문자로 표현한다. 단어 간 구분 문자가 없어 간결하게 표현할 수 있으므로 대부분의 언어에서 권장하기도 한다.

```txt
camelCase
getCompanyInfo
findElementById
```

## 파스칼 케이스 (Pascal Case)

카멜 케이스와 유사하지만 첫 문자를 대문자로 사용한다. 주로 클래스명을 정의할 때 첫 문자를 대문자로 사용하기 때문에 특별한 경우가 아니면 잘 사용하지 않는다.

```txt
PascalCase
GlobalOptions
SystemFileInfo
```

## 스네이크 케이스 (Snake Case)

각 단어 사이에는 언더 바(`_`)를 사용하여 구분하며 문자는 모두 소문자 또는 대문자로 변환하여 주로 사용한다. 대문자 표현의 경우 상수(`constant`)를 표현할 때 사용되기도 한다.

```txt
snake_case
get_item_info
file_size_humanized
C_MAX_UPLOAD_FILE_SIZE
```

## 케밥 케이스 (Kebab Case)

모든 문자는 소문자로 표현하고 각 단어 사이에는 대시 기호(`-`)를 사용하여 구분한다. 일부 언어에서는 대시 기호를 사용하지 못할 수 있다. `URL`을 표현할 때 자주 사용되는 형식이기도 하다.

```txt
kebab-case
my-profile-info
system-get-platform-name
```

## 헝가리안 표기법 (Hungarian Notation)

변수 앞에 데이터 타입을 붙인다. 변수에 잘못된 데이터 타입을 넣지 않도록 명확하게 인지할 수 있고 변수를 추적하지 않는 일반 텍스트 에디터나 기타 환경에서 데이터 타입을 쉽게 확인할 수 있다. 모던 프로그래밍 언어에서는 이 표기법을 권장하지 않기도 하고 최근 IDE에서는 잘못된 데이터 타입에 대한 추적이 우수하기 때문에 가급적 사용하지 않는 것이 좋다. 데이터형을 붙일 때는 전체 이름이나 축약형(`b`, `i`, `str`)을 사용하기도 하고, 카멜 케이스와 동시에 활용하기도 한다.

```txt
intUserId (Integer)
bIsActive (Boolean)
strPassword (String)
iPrice (Integer)
```
