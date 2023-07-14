const Promotions = require("../models/Promotions");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");
const filterParser = require("../commonHelpers/filterParser");


exports.addPromotion = (req, res, next) => {
    Promotions.findOne({ customId: req.body.customId }).then(promotion=> {
        if (promotion) {
            res.status(400).json({
                message: `Promotion with customId '${promotion.customId}' is already exists. cutomId must be unique.`
            });
        } else {
            const promotionData = _.cloneDeep(req.body);
            const newPromotion = new Promotions(queryCreator(promotionData));

            newPromotion
                .execPopulate();

            newPromotion
                .save()
                .then(slide => res.json(promotion))
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};
exports.updatePromotion = (req, res, next) => {
    Promotions.findOne({ customId: req.params.customId })
        .then(promotion => {
            if (!promotion) {
                return res.status(400).json({
                    message: `Promotion with customId "${req.params.customId}" is not found.`
                });
            } else {
                const promotionData = _.cloneDeep(req.body);
                const updatedPromotion = queryCreator(promotionData);


                Promotions.findOneAndUpdate(
                    { customId: req.params.customId },
                    { $set: updatedPromotion },
                    { new: true }
                )
                    .then(promotion => res.json(promotion))
                    .catch(err =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `
                        })
                    );
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};
exports.deletePromotion = (req, res, next) => {
    Promotions.findOne({ customId: req.params.customId }).then(async promotion => {
        if (!promotion) {
            return res.status(400).json({
                message: `Promotion with customId "${req.params.customId}" is not found.`
            });
        } else {
            const promotionToDelete = await Promotions.findOne({
                customId: req.params.customId
            });

            Promotions.deleteOne({ customId: req.params.customId })
                .then(deletedCount =>
                    res.status(200).json({
                        message: `Promotion witn customId "${promotionToDelete.customId}" is successfully deletes from DB.`,
                        deletedPromotionInfo: promotionToDelete
                    })
                )
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};
exports.getPromotions = (req, res, next) => {
    Promotions.find()
        .then(promotions => res.status(200).json(promotions))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};
exports.getPromotionsFilterParams = async (req, res, next) => {
    const mongooseQuery = filterParser(req.query);
    const perPage = Number(req.query.perPage);
    const startPage = Number(req.query.startPage);
    const sort = req.query.sort;

    try {
        const products = await Promotions.find(mongooseQuery)
            .skip(startPage * perPage - perPage)
            .limit(perPage)
            .sort(sort);

        const promotionsQuantity = await Promotions.find(mongooseQuery);

        res.json({ products, promotionsQuantity: promotionsQuantity.length });
    } catch (err) {
        res.status(400).json({
            message: `Error happened on server: "${err}" `
        });
    }
};

