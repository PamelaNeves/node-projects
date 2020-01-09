var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!global.cadastros) global.cadastros = [];
  res.render('index', { title: 'Express', produtos:global.cadastros });
});

module.exports = router;
