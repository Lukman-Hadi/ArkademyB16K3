var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

router.get('/', function(req,res,next){
    dbConn.query('SELECT p.id AS pid, p.nama AS pnama, cat.nama AS catnama, cas.nama AS casnama, p.price as pprice, cat.id AS catid, cas.id AS casid FROM product p INNER JOIN category cat ON p.id_category = cat.id INNER JOIN cashier cas ON p.id_cashier = cas.id', function(err,rows){
        if(err) {
            req.flash('error', err);
            // render to views/books/index.ejs
            res.render('cafe',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('cafe',{data:rows});
        }
    });
});
router.post('/add', function(req, res, next) {

    let cashier = req.body.cashier;
    let product = req.body.product;
    let category = req.body.category;
    let price = req.body.price;
    let errors = false;

    if(!errors) {

        var form_data = {
            nama : product,
            price: price,
            id_category: category,
            id_cashier: cashier
        }

        // insert query
        dbConn.query('INSERT INTO product SET ?', form_data, function(err, result) {
                req.flash('success', 'successfully added');
                res.redirect('/cafe');
        });
    }
});

router.get('/delete/(:id)', function(req, res, next) {

    let id = req.params.id;

    dbConn.query('DELETE FROM product WHERE id = ' + id, function(err, result) {
            // set flash message
            req.flash('success', 'successfully deleted! ' + id)
            res.redirect('/cafe')
    })
})

router.get('/edit/(:id)', function(req, res, next) {

    let id = req.params.id;

    dbConn.query('SELECT p.id AS pid, p.nama AS pnama, cat.nama AS catnama, cas.nama AS casnama, p.price as pprice, cat.id AS catid, cas.id AS casid FROM product p INNER JOIN category cat ON p.id_category = cat.id INNER JOIN cashier cas ON p.id_cashier = cas.id', function(err, rows, fields) {
        res.render('cafe/edit',{data:rows});
    })
})

router.post('/update', function(req, res, next) {

    let id = req.body.pid;
    let cashier = req.body.cashier;
    let product = req.body.product;
    let category = req.body.category;
    let price = req.body.price;
    let errors = false;
    // if no error
    if( !errors ) {

        var form_data = {
            id : id,
            nama : product,
            price: price,
            id_category: category,
            id_cashier: cashier
        }
        // update query
        dbConn.query('UPDATE product SET ? WHERE id = ' + id, form_data, function(err, result) {
                req.flash('success', 'Book successfully updated');
                res.redirect('/cafe');
        })
    }
})

module.exports = router;
