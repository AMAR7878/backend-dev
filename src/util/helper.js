const date=new Date();
const months = ["January ,February ,March ,April ,May ,June ,July ,August ,September ,October ,November ,December "]

const printDate=()=>{
    const TodayDate = date.getDate()
    console.log("Todays Date:" + TodayDate +" "+ months[date.getMonth()])
}

const printMonth=()=>{
    const month = date.getMonth()
    console.log("Month: "+ months[month])
}

const getBatchInfo=()=>{
    console.log("Plutonium w3d5 the topic for today is Nodejs  Module system ")
}
 
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo