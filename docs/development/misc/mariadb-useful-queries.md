# MariaDB 유용한 쿼리 모음

## 모든 파라미터 옵션 확인

```mariadb
SHOW VARIABLES;
```

## 특정 파라미터 옵션 확인

```mariadb
SHOW VARIABLES LIKE 'innodb_io_capacity';
```

## 데이터베이스별 전체 용량 확인

```mariadb
SELECT table_schema "Database", SUM(data_length + index_length) / 1024 / 1024 "Sizes (MB)"
FROM information_schema.TABLES
GROUP BY table_schema;
```
