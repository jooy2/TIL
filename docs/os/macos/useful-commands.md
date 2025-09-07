# macOS 유용한 커맨드라인 명령어

## 전체 디스크 디렉토리를 가장 많은 용량을 차지하는 순(GB 이상)으로 정렬

```shell
$ du -h /System/Volumes/Data | grep "G\t" | sort
```
