const Product =  require("../models/Product");

//show products
const index = (req, res, next) => {
    Product.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured!"
        })
    })
}

//show singe product
const show = (req, res, next) => {
    const productId = req.params.productId
    Product.findById(productId)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured!"
        })
    })
}

// add Product
const store = (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
    product.save()
    .then(response => {
        res.json({
            message: "Product Added Successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured!"
        })
    })
}

//update Product
const update = (req, res, next) => {
    let productId = req.params.productId
    let updatedData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    Product.findByIdAndUpdate(productId, {$set: updatedData})
    .then(response => {
        res.json({
            message: "Product Updated Successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: `An Error Occured! : ${error}`
        })
    })
}

//delete Product
const destroy = (req, res, next) => {
    let productId = req.params.productId
    //Product.deleteOne({_id:productId})
    //Product.findByIdAndDelete(productId) 
    Product.findByIdAndDelete({_id: productId})
    .then(response => {
        res.json({
            message: "Product Deleted Successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: `An Error Occured! : ${error}`
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}