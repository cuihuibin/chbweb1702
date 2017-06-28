CREATE DATABASE kjmanager CHARSET=utf8;
use kjmanager;
CREATE TABLE t_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(32),
email VARCHAR(50),
upwd VARCHAR(32),
regtime DATETIME,
lasttime DATETIME
);
INSERT INTO t_user VALUES(null,'小明','tom@qq.com',123321,now(),0);
INSERT INTO t_user VALUES(null,'小李','lilei@qq.com',123456,now(),0);
INSERT INTO t_user VALUES(null,'小崔','wangtao@163.com',123123,now(),0);