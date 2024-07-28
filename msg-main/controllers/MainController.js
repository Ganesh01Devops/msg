//const Product =  require("../models/Product");
const axios = require('axios');
const serverReviewsUrl = "msg-reviews.msg.svc.cluster.local:8080"
const serverProductsUrl = "msg-products.msg.svc.cluster.local:8090"

const getProductReviews = (productId) => {
    console.log('productId >> ', productId)
    
    const url = `http://${serverReviewsUrl}/api/v1/reviews/${productId}`
    /*const reviews = fetch(url).then(response => response.json());
    console.log('reviews >>> ', reviews)
    return "welcome"*/
    return axios({
        method:'get',
        url
    })
    .then(response => {
        return response.data.response
        //await res.send(response.data.response);
    })
    .catch(error => {
        console.log("error >>", error)
        /*res.json({
            message: "An Error Occured in reviews api!"
        })*/
    })
}

//show products
const getAllProducts = (req, res, next) => {
    const url = `http://${serverProductsUrl}/api/v1/products`
    
    axios({
        method:'get',
        url
    })
    .then(async (response) => {
        let productArr = []
        let products = response.data.response

        var reviewAdded = new Promise((resolve, reject) => {

            products.forEach(async (product, index, array) => {        
                const reviews = await getProductReviews(product.id)
                product.reviews = reviews
                console.log('each product >> ', product)
                productArr.push(product)
                if (index === array.length -1) resolve();
            })

            
        });
        
        reviewAdded.then(() => {
            res.send(productArr);
        })        
        
    })
    .catch(error => {
        res.json({
            message: "An Error Occured in products api!"
        })
    })
}

const addProduct = (req,res,next) => {
    const url = `http://${serverProductsUrl}/api/v1/products`
    
    axios({
        method:'post',
        url,
        data: req.body
    })
    .then(async (response) => {
        res.json({
            message: "Product Added Successfully from Main!"
        })  
        
    })
    .catch(error => {
        res.json({
            message: "Main - An Error Occured in products api!"
        })
    })
}

const addReview = (req,res,next) => {
    const url = `http://${serverReviewsUrl}/api/v1/reviews`
    
    axios({
        method:'post',
        url,
        data: req.body
    })
    .then(async (response) => {
        res.json({
            message: "Review Added Successfully from Main!"
        })  
        
    })
    .catch(error => {
        res.json({
            message: "Main - An Error Occured in products api!"
        })
    })
}






module.exports = {
    getAllProducts, addProduct, addReview
}