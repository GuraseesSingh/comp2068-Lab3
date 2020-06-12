'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/', function (req, res) {
    res.render('Harinder', { name: 'Harinder' });
});

router.get('/', function (req, res) {
    res.render('Gurasees', { name: 'Gurasees' });
});

router.get('/', function (req, res) {
    res.render('Amandeep', { name: 'Amandeep' });
});

router.get('/', function (req, res) {
    res.render('Harjap', { name: 'Harjap' });
});
module.exports = router;
