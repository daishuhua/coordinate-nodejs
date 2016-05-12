var express = require('express');
var router = express.Router();

/* GET baidu coordinate according to address name. */
router.get('/', function(req, res, next) {
  res.render('test', {tv: 'delivery'});
});

module.exports = router;
