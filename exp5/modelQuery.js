const {User}=require("../common/user");

(async ()=>{
    const u =await User.findByPk(1);
    console.log(u);



    const [user, created] = await User.findOrCreate({
        where: { name: 'sdepold' },
        defaults: {
            name: 'Technical Lead JavaScript',
            firstName:"user_money.firstName"
        }
      });
      console.log(user.name); // 'sdepold'
      console.log(user.age); // 这可能是也可能不是 'Technical Lead JavaScript'
      console.log(created); // 指示此实例是否刚刚创建的布尔值
      if (created) {
        console.log(user.job); // 这里肯定是 'Technical Lead JavaScript'
      }
})();