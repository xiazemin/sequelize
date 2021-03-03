const {sequelize,User} =require("../common/user");
const { Op } = require("sequelize");

(async ()=>{
    // 创建一个新用户
    console.log(User)
    console.log(sequelize)
const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
console.log("Jane's auto-generated ID:", jane.id);

const user = await User.create({
    firstName: 'alice123',
    lastName: 'xxxx'
  }, { fields: ['firstName'] });
  // 假设 isAdmin 的默认值为 false
  console.log(user.firstName); // 'alice123'
  console.log(user.lastName); // false


  // 查询所有用户
const users = await User.findAll({
    attributes:['firstName',
    ['firstName','first_name'],
    //[sequelize.fn('COUNT', sequelize.col('firstName')), 'n_hats'],
    'lastName']
});
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

const users1 = await User.findAll({
    attributes:[//'firstName',
    //['firstName','first_name'],
    [sequelize.fn('COUNT', sequelize.col('firstName')), 'n_hats']//,
   // 'lastName'
    ]
});
console.log("All users:", JSON.stringify(users1, null, 2));

console.log("All users:", JSON.stringify( await User.findAll({
    attributes: { exclude: ['age'] },
    where: {
        //id: 2
        id:{
            //[Op.eq]: 2
            [Op.or]:[2,3]
        }
      }
  }),null,2));

})();

