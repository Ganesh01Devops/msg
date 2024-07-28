const express = require('express')
const router = express.Router()

const MainController = require("../controllers/MainController")

router.get("/getProducts", MainController.getAllProducts)
router.post("/addProduct", MainController.addProduct)
router.post("/addReview", MainController.addReview)

module.exports = router