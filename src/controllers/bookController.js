const BookModel= require("../models/bookModel")
// const { all } = require("../routes/route")

const createBook1= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookData1= async function (req, res) {
 
    let allBooks= await BookModel.find()
    
    res.send({msg: allBooks})
}

// const bookList= async function (req, res) {
 
//     let allBooks= await BookModel.find().select({bookName: 1, authorName:1, _id:0})
    
//     res.send({msg: allBooks})
// }

// const getBooksInYear= async function (req, res) {
//     let year = req.body
//     let allBooks= await BookModel.find(year).select({bookName: 1, year:1, _id:0})
    
//     res.send({msg: allBooks})
// }

// const getParticularBooks= async function (req, res) {
//     let data = req.body
//     let allBooks= await BookModel.find(data).select({bookName: 1, _id: 0})  
    
//     res.send({msg: allBooks})
// }

// const getXINRBooks= async function (req, res) {
   
//     let allBooks= await BookModel.find({"price.indianPrice" :{$in: ["INR 100", "INR 200", "INR 500"]}}).select({bookName: 1, price: 1, _id:0})
    
//     res.send({msg: allBooks})
// }

// const getRandomBooks = async function (req, res) {
        
//     let allBooks= await BookModel.find({$or:[{"stockAvailable":{$eq:true}}, {"totalPages":{$gt:500}}]}).select({bookName: 1, stockAvailable: 1, totalPages:1, _id: 0})

// res.send({msg: allBooks})
// }

module.exports.createBook1= createBook1

module.exports.getBookData1 = getBookData1

// module.exports.bookList= bookList

// module.exports.getBooksInYear=getBooksInYear

// module.exports.getParticularBooks = getParticularBooks

// module.exports.getXINRBooks=getXINRBooks

// module.exports.getRandomBooks =getRandomBooks 

