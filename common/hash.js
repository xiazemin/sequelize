const {SHA256} = require('crypto-js');

function hash(value){
    return SHA256(value).toString();
}

module.exports={hash}