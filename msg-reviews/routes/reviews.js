const express = require('express')
const router = express.Router()

const ReviewsController = require("../controllers/ReviewsController")

router.get("/", ReviewsController.index)
router.get("/:productId", ReviewsController.show)
router.post("/", ReviewsController.store)
router.delete("/:reviewId", ReviewsController.destroy)

module.exports = router