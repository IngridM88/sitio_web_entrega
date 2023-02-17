var express = require('express');
var router = express.Router();
var newsneventsModel = require('./../models/newsneventsModel');
var cloudinary = require('cloudinary').v2;

router.get('/newsnevents', async function (req, res, next) {
    let newsnevents = await newsneventsModel.getNewsEvents();

    newsnevents = newsnevents.map(newsnevents => {
        if (newsnevents.img_id) {
            const image = cloudinary.url(newsnevents.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...newsnevents,
                image
            }
        } else {
            return{
                ...newsnevents,
                image:''
            }
        }
    });
    res.json(newsnevents);
});

module.exports = router;