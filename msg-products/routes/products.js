const express = require('express')
const router = express.Router()

const ProductController = require("../controllers/ProductController")

router.get("/", ProductController.index)
router.post("/:productId", ProductController.show)
router.post("/", ProductController.store)
router.put("/:productId", ProductController.update)
router.delete("/:productId", ProductController.destroy)

module.exports = router