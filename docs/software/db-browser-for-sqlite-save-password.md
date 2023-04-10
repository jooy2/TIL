# DB Browser for SQLite 암호 기억하기

**[DB Browser for SQLite](https://sqlitebrowser.org)** 앱에서 `SQLCipher` 암호를 매번 입력하지 않고 저장된 내용으로 열고 싶은 경우 다음 절차를 따른다.

먼저 데이터베이스 파일 경로와 동일한 위치에 `.env` 파일을 생성한다. 이 파일은 암호가 포함되어 있으므로 외부에 공개되지 않아야 한다.

데이터베이스 파일명이 `mydata.db`라고 가정한다. 생성한 파일을 열고 다음 내용을 붙여넣는다.

```dotenv
mydata.db = {데이터베이스 파일 암호}
mydata.db_keyFormat =
mydata.db_pageSize =
mydata.db_kdfIter =
mydata.db_hmacAlgorithm =
mydata.db_kdfAlgorithm =
mydata.db_plaintextHeaderSize =
```

환경변수 키값에는 데이터베이스 파일명(확장자 포함)이 프리픽스로 포함되고, 부가 설정은 언더스코어(`_`)로 구분하여 뒤에 옵션 이름을 붙인다. `=` 오른쪽 값은 해당 설정에 대한 값이다.

SQLCipher 암호는 아무 설정이름이 없는 처음 값에 붙여넣으면 된다. 이후 아래 옵션은 `SQLCipher`의 버전과 각종 암호화 설정에 따라 달라질 수 있는데, 일반적으로 암호화 버전 3과 4를 사용하며 각 버전 별 기본 권장 설정은 다음과 같다:

### SQLCipher 3

- keyFormat = 0
- pageSize = 1024
- kdfIter = 64000
- hmacAlgorithm = SHA1
- kdfAlgorithm = SHA1
- plaintextHeaderSize = 0

### SQLCipher 4

- keyFormat = 0
- pageSize = 4096
- kdfIter = 256000
- hmacAlgorithm = SHA512
- kdfAlgorithm = SHA512
- plaintextHeaderSize = 0

`keyFormat`은 `0`인 경우 **Passphrase**, `1`인 경우 **RAW Key** 암호일 경우에 해당된다. 특별한 경우가 아니라면 `0`을 사용한다.

이제 프로그램을 열고 데이터베이스 파일을 열면 암호를 묻지 않고 바로 데이터베이스 파일을 읽을 수 있다.

### References

- Encrypted Databases : https://github.com/sqlitebrowser/sqlitebrowser/wiki/Encrypted-Databases
