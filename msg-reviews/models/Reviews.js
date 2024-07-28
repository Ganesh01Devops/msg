const mongoose = require('mongoose')
const Schema = mongoose.Schema  

const reviewsSchema = new Schema({
    productId: {
        type: String
    },
    userId: {
        type: String
    },
    desc: {
        type: String
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: {
        transform(doc, ret){
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        }
    }
})



const Reviews = mongoose.model('Reviews', reviewsSchema)
module.exports = Reviews