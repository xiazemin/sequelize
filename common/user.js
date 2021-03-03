const { Model, DataTypes}=require("sequelize")

const {sequelize} =require("./conn")

//afterDefine
const User =sequelize.define('user_money',{
    name:DataTypes.TEXT,
    favoriteColor:{
        type:DataTypes.TEXT,
        defaultValue:'gren'
    },
    age:DataTypes.INTEGER,
    cash :DataTypes.INTEGER,
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
    }
},{fore:true});

(async ()=>{
    await sequelize.sync({fore:true});
})();

//Module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是Module.exports而不是exports。
module.exports= {sequelize,User}
//但是exports 不能导出多个