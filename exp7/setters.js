const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require("../common/conn");

const User = sequelize.define('user_setter', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING
}, {
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  setterMethods: {
    fullName(value) {
      // 注意：这仅用于演示.
      // 查阅: https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/
      const names = value.split(' ');
      const firstName = names[0];
      const lastName = names.slice(1).join(' ');
      this.setDataValue('firstName', firstName);
      this.setDataValue('lastName', lastName);
    }
  }
});

(async () => {
  await sequelize.sync();
  let user = await User.create({ firstName: 'John',  lastName: 'Doe' });
  console.log(user.fullName); // 'John Doe'
  user.fullName = 'Someone Else';
  await user.save();
  user = await User.findOne();
  console.log(user.firstName); // 'Someone'
  console.log(user.lastName); // 'Else'
})();