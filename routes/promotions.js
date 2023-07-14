const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)
//Import controllers
const {
    addPromotion,
    updatePromotion,
    deletePromotion,
    getPromotions,
    getPromotionsFilterParams
} = require("../controllers/promotions");


// @route   POST /slides
// @desc    Create new slide
// @access  Private
router.post(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    addPromotion
);

// @route   PUT /slides/:id
// @desc    Update existing slide
// @access  Private
router.put(
    "/:customId",
    passport.authenticate("jwt-admin", { session: false }),
    updatePromotion
);

// @route   DELETE /slides/:id
// @desc    Delete existing slide
// @access  Private
router.delete(
    "/:customId",
    passport.authenticate("jwt-admin", { session: false }),
    deletePromotion,
);

// @route   GET /slides
// @desc    GET existing slides
// @access  Public
router.get("/", getPromotions);

// @route   GET /products/filter
// @desc    GET appropriate filtered products
// @access  Public
router.get("/filter", getPromotionsFilterParams);
module.exports = router;