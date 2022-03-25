var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',{layout: false});
});

router.get('/dashboard', function(req, res) {
  res.render('dashboardTable');
});
router.get('/listCar', function(req, res) {
  res.render('listCars');
});
router.get('/addNewCars', function(req, res) {
  res.render('addNewCar');
});

module.exports = router;
