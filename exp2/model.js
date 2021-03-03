/**
调用 sequelize.define(modelName, attributes, options)
扩展 Model 并调用 init(attributes, options)
*/

const { Sequelize, DataTypes } = require('sequelize');

const sequelize =new Sequelize('mysql://root:@localhost:3306/test',{//注意这里必须是单引号
    define: {
      freezeTableName: true
    }})

const User =sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING
    }
},{
    tableName:"User",
      // 在上面的属性中使用 `unique: true` 与在模型的参数中创建索引完全相同：
  indexes: [{ unique: true, fields: ['firstName'] }]
})

  // `sequelize.define` 会返回模型
  console.log(User === sequelize.models.User); // true

  /**
   User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.

await sequelize.sync({ force: true });
console.log("所有模型均已成功同步.");

// 仅当数据库名称以 '_test' 结尾时,它才会运行.sync()
sequelize.sync({ force: true, match: /_test$/ });
   */
  User.sync({ force: true }).then(()=>{console.log("done")},()=>{console.log('failed')});
  //sequelize.sync({force:true});
console.log("用户模型表刚刚(重新)创建！");