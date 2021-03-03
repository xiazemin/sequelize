const fs=require("fs")

const path =require("path")
const mitt = require('./mitt')
//module.exports=load(path.join(__dirname,"./"))

exports = module.exports = mitt

/*
exports.get = function (key) {
   return key && exports[key]
 }
 */
Object.assign(exports, require('./sequelize'))