const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
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

const Product = mongoose.model('Products', productSchema)
module.exports = Product