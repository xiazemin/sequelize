const { Sequelize, Model, DataTypes}=require("sequelize")

const sequelize =new Sequelize('mysql://root:@localhost:3306/test')

module.exports={sequelize}