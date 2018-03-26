var express = require('express');
var router = express.Router();
var r = require('rethinkdb');

/* GET home page. */
router.get('/', function(req, res, next) {
  // var connection = null;
  // var test = 'fail...';
  // console.log('executed');
  // r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
  //     if (err) throw err;
  //     connection = conn;
  //     console.log('connected');
  //     this.test = 'success!';
  // })
  res.render('index', { title: 'Express' });
});



module.exports = router;
