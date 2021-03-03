const {sequenlize,User}=require("../common/user");

(async ()=>{
    const captains = await User.bulkCreate([
        { name: 'Jack Sparrow' ,firstName:"Jack"},
        { name: 'Davy Jones',firstName:"Jack" }
      ]);
      console.log(captains.length); // 2
      console.log(captains[0] instanceof User); // true
      console.log(captains[0].name); // 'Jack Sparrow'
      console.log(captains[0].id); // 1 // (或另一个自动生成的值)
})();