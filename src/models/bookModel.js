const mongoose = require('mongoose');

const bookModel1 = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category:{
        type: String,
        unique: true,
        required: true,
    }
        
    
}, 


{ timestamps: true });


module.exports = mongoose.model('newBook1', bookModel1) //users

