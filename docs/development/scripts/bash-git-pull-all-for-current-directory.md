# 현재 디렉토리의 모든 하위 디렉토리에 대해 `git pull`을 수행

아래 스크립트는 현재 디렉토리에 있는 모든 하위 디렉토리 중 `.git`폴더가 존재하는 디렉토리에 대해 각각 `git pull`명령을 수행하여 리포지토리를 한번에 업데이트하도록 돕는 `bash` 스크립트이다.

```shell
#!/bin/bash

dir=`pwd`

for d in $(find $dir -type d)
do
    if [ -d "$d/.git" ]; then
        echo "git pull: $d"
        cd $d
        git pull
        cd $dir
    fi
done
```
