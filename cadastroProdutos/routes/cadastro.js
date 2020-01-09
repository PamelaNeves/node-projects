var express = require('express');
var router = express.Router();

/* GET Cadastro. */
router.get('/', function(req, res, next) {
  res.render('cadastro',  {});
});

/* POST Cadastro. */
router.post('/', function(req, res, next) {
    global.cadastros.push({nome: req.body.nome, categoria: req.body.categoria, preco: req.body.preco});
    res.redirect('/');
  });

module.exports = router;