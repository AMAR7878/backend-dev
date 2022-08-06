const str = "   Functionup   "
const trimFun=()=>{

    console.log(str.trim());
}

const changetoLowerCase=()=>{
    console.log(str.toLowerCase());
}

const changetoUpperCase=()=>{
    console.log(str.toUpperCase());
}

module.exports.trimFun=trimFun
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase