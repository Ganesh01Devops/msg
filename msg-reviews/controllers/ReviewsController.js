const Reviews =  require("../models/Reviews");

//show products
const index = (req, res, next) => {
    Reviews.find()
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
    Reviews.find({productId: productId })
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
    let reviews = new Reviews({
        productId: req.body.productId,
        userId: req.body.userId,
        desc: req.body.desc,
        rating: req.body.rating
    })
    reviews.save()
    .then(response => {
        res.json({
            message: "Review Added Successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured!"
        })
    })
}


//delete Product
const destroy = (req, res, next) => {
    let reviewId = req.params.reviewId
    //Product.deleteOne({_id:productId})
    //Product.findByIdAndDelete(productId) 
    Reviews.findByIdAndDelete({_id: reviewId})
    .then(response => {
        res.json({
            message: "Review Deleted Successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: `An Error Occured! : ${error}`
        })
    })
}

module.exports = {
    index, show, store, destroy
}