var express = require('express');
var router = express.Router();
var usersModel = require('../../models/usersModel');

/*Diseno del login */
router.get('/', function (req, res, next) { 
    res.render('admin/login', { 
        layout: 'admin/layout'
     }); 
    
    });

/*Cerrar login/sesion */
router.get('/logout', function(req, res, next){
    req.session.destroy(); //destruye las variables de sesion
    res.render('admin/login', {
        layout:'admin/layout'
    });
});


/*Funcionamiento del login */
router.post('/', async(req, res, next) => {
    try{
        console.log(req.body);
        var user= req.body.user;
        var password = req.body.password;

        var data = await usersModel.getUserByUsernameAndPassword(user, password);

        if (data != undefined) {
            req.session.user_id = data.user_id;
            req.session.username = data.user;

            res.redirect('/admin/newsnevents');
        } else {
            res.render('admin/login', {
                layout:'admin/layout',
                error:true
             });
        } 
        } catch (error) {
            console.log(error);
        }
});

module.exports = router;