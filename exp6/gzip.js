const { gzipSync, gunzipSync } = require('zlib');
const {DataTypes}=require("sequelize");
const {sequelize}=require("../common/conn");
const Post = sequelize.define('post', {
  content: {
    type: DataTypes.TEXT,
    get() {
      const storedValue = this.getDataValue('content');
      const gzippedBuffer = Buffer.from(storedValue, 'base64');
      const unzippedBuffer = gunzipSync(gzippedBuffer);
      return unzippedBuffer.toString();
    },
    set(value) {
      const gzippedBuffer = gzipSync(value);
      this.setDataValue('content', gzippedBuffer.toString('base64'));
    }
  } ,
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      throw new Error('不要尝试设置 `fullName` 的值!');
    }
  }
},{
    force:true
});

/*
(async ()=>{
    await sequelize.sync({fore:true});
})();

//时序问题，会报错
*/


( async ()=>{
    await sequelize.sync({fore:true});
const post = await Post.create(
    { content: 'Hello everyone!' }
);

console.log(post.content); // 'Hello everyone!'
// 一切都在幕后进行,所以我们甚至都可以忘记内容实际上是
// 作为 gzip 压缩的 base64 字符串存储的！

// 但是,如果我们真的很好奇,我们可以获取 'raw' 数据...
console.log(post.getDataValue('content'));
// Output: 'H4sIAAAAAAAACvNIzcnJV0gtSy2qzM9LVQQAUuk9jQ8AAAA='

const user = await Post.create({ firstName: 'John', lastName: 'Doe' });
console.log(user.fullName); // 'John Doe'

})();