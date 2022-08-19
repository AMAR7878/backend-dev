const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "ATnewAuthor"
    }, 
    price: Number,
    ratings: Number,

    publisher: {
        type: ObjectId,
        ref: "ATnewPublisher",
        required: true
    },
    isHardCover :{
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('ATnewBook', bookSchema)
