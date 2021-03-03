const { Sequelize, Model, DataTypes}=require("sequelize")

const sequelize =new Sequelize('mysql://root:@localhost:3306/test')

//afterDefine
const User =sequelize.define('user_money',{
    name:DataTypes.TEXT,
    favoriteColor:{
        type:DataTypes.TEXT,
        defaultValue:'gren'
    },
    age:DataTypes.INTEGER,
    cash :DataTypes.INTEGER
},{fore:true});

(async ()=>{
    await sequelize.sync({fore:true});
})();


const jane=User.build({name:'Jane'});
console.log(jane instanceof User);
console.log(jane.name);

(async ()=>{
    await jane.save();
    console.log('jane saved');
})();


(async()=>{
    const jane = await User.create({ name: "Jane1" });
// Jane 现在存在于数据库中！
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"

const jane2 = await User.create({ name: "Jane2" });
// console.log(jane); // 不要这样!
console.log(jane2.toJSON()); // 这样最好!
console.log(JSON.stringify(jane2, null, 4)); // 这样也不错!

jane.name = "Ada";
// 数据库中的名称仍然是 "Jane"
await jane.save();
// 现在该名称已在数据库中更新为 "Ada"！

jane.name = "Ada1";
await jane.reload();
console.log(jane.name); // "Ada"

})();

(async ()=>{
    const jane = await User.create({ name: "Jane", age: 100, cash: 5000 });
await jane.increment({
  'age': 2,
  'cash': 100
});

// 如果值增加相同的数量,则也可以使用以下其他语法：
await jane.increment(['age', 'cash'], { by: 2 });
})();