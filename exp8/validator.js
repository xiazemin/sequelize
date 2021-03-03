const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const {sequelize} = require("../common/conn");

const User = sequelize.define("user_validator", {
  username: {
    type:  DataTypes.STRING(64),//DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
        len: [5, 10]
      }
  },
  hashedPassword: {
    type: DataTypes.STRING(64),
    is: /^[0-9a-f]{64}$/i
  }
});

(async () => {
  await sequelize.sync({ force: true });
  // 这是代码
})();