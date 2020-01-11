var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = require("../models/db");
  db.findClientes(function(err,docs){
    if(err)return console.log(err);
    res.render('index', { title: 'Clientes', clientes: docs });

  })
});

module.exports = router;
