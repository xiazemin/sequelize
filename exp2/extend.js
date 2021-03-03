const {Sequelize,DataTypes,Model}=require('sequelize')
const sequelize=new Sequelize("mysql://root@:localhost/test")

class User extends Model{
    static classLevelMethod() {
        return 'foo';
      }
      instanceLevelMethod() {
        return 'bar';
      }
      getFullname() {
        return [this.firstname, this.lastname].join(' ');
      }
}

User.init({
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
    }
},{
    sequelize,
    modelName:'User',
    freezeTableName: true//禁止通过称为 inflection 的库在后台完成的自动复数
});

console.log(User.classLevelMethod()); // 'foo'
const user = User.build({ firstname: 'Jane', lastname: 'Doe' });
console.log(user.instanceLevelMethod()); // 'bar'
console.log(user.getFullname()); // 'Jane Doe'