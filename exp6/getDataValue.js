const { DataTypes } = require("sequelize");
const {sequelize} =require("../common/conn")
const {hash}=require("../common/hash")

const User =sequelize.define('user',{
    username:{
        type:DataTypes.STRING,
        get(){
            const rawValue=this.getDataValue("username");
            return rawValue?rawValue.toUpperCase():null;
        }
    },
    password:{
        type:DataTypes.STRING,
        set(value){
            this.setDataValue('password',hash(value));
        }
    }
});

const user=User.build({username:'superUser123'});
console.log(user.username);
console.log(user.getDataValue('username'));

const user1=User.build({username:'username',password:'password'});
console.log(user1.password);
//user1.setDataValue("xxxxxx");
console.log(user1.getDataValue('password'));