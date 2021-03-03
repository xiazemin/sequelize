const { QueryTypes, DataTypes } = require('sequelize');
const {sequelize}=require('../common/conn');

( async ()=>{
    const Projects = sequelize.define("projects", {
        status:DataTypes.INTEGER,
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
      

    await sequelize.sync({ force: true });

    await sequelize.query(
        'SELECT * FROM projects WHERE status = ?',
        {
          replacements: ['active'],
          type: QueryTypes.SELECT
        }
      );
      
      await sequelize.query(
        'SELECT * FROM projects WHERE status = :status',
        {
          replacements: { status: 'active' },
          type: QueryTypes.SELECT
        }
      );

      /**
       * 如果传递一个数组, $1 被绑定到数组中的第一个元素 (bind[0]).
如果传递一个对象, $key 绑定到 object['key']. 每个键必须以非数字字符开始. $1 不是一个有效的键,即使 object['1'] 存在.
在这两种情况下 $$ 可以用来转义一个 $ 字符符号.
       */
      await sequelize.query(
        'SELECT *, "text with literal $$1 and literal $$status" as t FROM projects WHERE status = $1',
        {
          bind: ['active'],
          type: QueryTypes.SELECT
        }
      );
      
      await sequelize.query(
        'SELECT *, "text with literal $$1 and literal $$status" as t FROM projects WHERE status = $status',
        {
          bind: { status: 'active' },
          type: QueryTypes.SELECT
        }
      );
})();
