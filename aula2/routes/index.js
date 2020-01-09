var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = require("../db");
  global.db.findAll(function(err, docs){
    if (err) 
      res.render('index', { title: 'ERRO', clientes: [] });
    else
      res.render('index', { title: 'Express', clientes: docs });
  });
});

module.exports = router;
