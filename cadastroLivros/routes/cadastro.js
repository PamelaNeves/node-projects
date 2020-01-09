var express = require('express');
var router = express.Router();

/* GET Cadastro. */
router.get('/', function(req, res, next) {
  res.render('cadastro',  {});
});

/* POST Cadastro. */
router.post('/', function(req, res, next) {
    global.livros.push({titulo: req.body.titulo, genero: req.body.genero, numeroPaginas: req.body.numeroPaginas, preco: req.body.preco});
    res.redirect('/');
  });

module.exports = router;