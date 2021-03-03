https://sequelize.org/v3/

https://www.sequelize.com.cn/

npm install --save sequelize
npm install --save mysql2


cd /usr/local/mysql/bin/
./mysqld_safe --skip-grant-tables &
./mysql
 FLUSH PRIVILEGES;
 SET PASSWORD FOR 'root'@'localhost' ='';
mysql -uroot
 create database test;


/usr/local/mysql-8.0.11-macos10.13-x86_64/bin/mysqld &
[1] 36258
xiazemin@xiazemindeMacBook-Pro bin % 2021-03-02T09:06:45.655657Z 0 [System] [MY-010116] [Server] /usr/local/mysql-8.0.11-macos10.13-x86_64/bin/mysqld (mysqld 8.0.11) starting as process 36258
2021-03-02T09:06:45.660140Z 0 [Warning] [MY-010159] [Server] Setting lower_case_table_names=2 because file system for /usr/local/mysql-8.0.11-macos10.13-x86_64/data/ is case insensitive

xiazemin@xiazemindeMacBook-Pro bin % 2021-03-02T09:06:45.947708Z 0 [ERROR] [MY-011947] [InnoDB] InnoDB: Cannot open '/usr/local/mysql-8.0.11-macos10.13-x86_64/data/ib_buffer_pool' for reading: Permission denied
[warn] kq_init: detected broken kqueue; not using.: Invalid argument
2021-03-02T09:06:45.972057Z 0 [System] [MY-010229] [Server] Starting crash recovery...
2021-03-02T09:06:45.972084Z 0 [System] [MY-010232] [Server] Crash recovery finished.
2021-03-02T09:06:45.976787Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2021-03-02T09:06:45.982205Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/usr/local/mysql-8.0.11-macos10.13-x86_64/data' in the path is accessible to all OS users. Consider choosing a different directory.
2021-03-02T09:06:45.994112Z 0 [System] [MY-010931] [Server] /usr/local/mysql-8.0.11-macos10.13-x86_64/bin/mysqld: ready for connections. Version: '8.0.11'  socket: '/tmp/mysql.sock'  port: 3306  MySQL Community Server - GPL.


% sudo vi /etc/my.conf

sudo /usr/local/mysql/support-files/mysql.server start
Starting MySQL
 SUCCESS!


brew install mysql

 To connect run:
    mysql -uroot

To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start

  mysql> create database test;


npm install --save crypto-js

pm install --save zlib  


function * generator
https://segmentfault.com/q/1010000000367154