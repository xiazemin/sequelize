const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/test',{
    // 选择一种日志记录参数
    logging: console.log,                  // 默认值,显示日 // Postgres 示例
})
/*
//Error: connect ECONNREFUSED 127.0.0.1:3306  
开启了 skip-networking 
*/

/*
let sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
     socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
    },
    pool: {  //Error: pool is draining and cannot accept work
        max: 5,
        min: 0,
        idle: 10000
       }
   });*/

 sequelize.authenticate().then(() => {
        console.log('连接成功');
        console.log("hello");
        sequelize.close()
      })
      .catch(err => {
        console.log(err);
        sequelize.close()
      })
      //sequelize.close()  //Error: pool is draining and cannot accept work  ,注意异步编程的思路