var express = require('express');
var router = express.Router();
var newsneventsModel = require('../../models/newsneventsModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) { 
    
    var newsnevents = await newsneventsModel.getNewsEvents();

    newsnevents = newsnevents.map(newsnevents => {
        if (newsnevents.img_id) {
            const image = cloudinary.image(newsnevents.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...newsnevents,
                image
            }
        } else {
            return {
                ...newsnevents,
                image:''
            }
        }
    });

    res.render('admin/newsnevents', { 
        layout: 'admin/layout',
        username: req.session.username,
        newsnevents,
     });  
    });

router.get('/insert', (req, res, next) => {
    res.render('admin/insert', {
        layout: 'admin/layout'
    });
});

router.post('/insert', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            image = req.files.image;
            img_id = (await uploader(image.tempFilePath)).public_id;
        }

        if (req.body.title != "" && req.body.subtitle !="" && req.body.body != "") {
            await newsneventsModel.insertNewsEvents({
                ...req.body,
                img_id
            });
            res.redirect('/admin/newsnevents')
        } else {
            res.render('admin/insert', {
                layout:'admin/layout',
                error: true,
                message: 'All fields are required!'
            })
        }
        } catch (error) {
            console.log(error)
            res.render('admin/insert', {
                layout: 'admin/layout',
                error: true,
                message: 'Error. Entry could not be saved.'
            });
        }
    });

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;

    let newsnevents = await newsneventsModel.getNewsEventsById(id);
    if (newsnevents.img_id) {
        await (destroy(newsnevents.img_id));
    }

    await newsneventsModel.deleteNewsEventsById(id);
    res.redirect('/admin/newsnevents')
});

router.get('/update/:id', async (req, res, next) => {
    var id = req.params.id;
    var newsnevents = await newsneventsModel.getNewsEventsById(id);
    res.render('admin/update', {
        layout:'admin/layout',
        newsnevents
        
    });
});

router.post('/update/', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let delete_old_img = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            delete_old_img = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                image = req.files.image;
                img_id = (await uploader(image.tempFilePath)).public_id;
                delete_old_img = true;
            }
        }
        if (delete_old_img && req.body.img_original) {
            await (destroy(req.body.img_original))
        }

        var obj = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            body: req.body.body,
            img_id
        }

        await newsneventsModel.updateNewsEventsById(obj, req.body.id);
        res.redirect('/admin/newsnevents');
    }
    catch (error) {
        console.log(error)
        res.render('admin/update', {
            layout:'admin/layout', 
            error: true,
            message: 'Error. The entry could not be updated!'
        })
    }
});
module.exports = router;