//require dir 的时候必须有这个index 文件，否则会报错,每个loader 只处理一层，所以需要每一层下面写一个新loader

const fs=require("fs")

const path =require("path")

function load(dir){
   const services={}
   const dirs=fs.readdirSync(dir)
   for (let i=0;i<dirs.length;i++){
       if (path.extname(dirs[i])==='index.js'){
          continue
       }
       const name=path.basename(dirs[i],'.js')
       services[name]=require(path.join(dir,dirs[i]))
   }
   //console.log(services)
   return services
}

module.exports=load(path.join(__dirname,"./"))