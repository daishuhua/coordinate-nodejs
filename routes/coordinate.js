var express = require('express');
var coordinateHandle = require('../modules/coordinate');
var router = express.Router();

/* GET baidu coordinate according to address name. */
router.get('/baidu', function(req, res, next) {
  var coordinateContent = coordinateHandle.getBaiduCoordinate();
  res.send('get baidu coordinaet according to name!' + coordinateContent );
});

/* get baidu coordinate according to the name of the address */
router.post('/baidu', function(req, res) {
  var addressNames = '';
  if (req.body.addresses) {
    addressNames = req.body.addresses;
  } else {
    var body = '', jsonStr;
    req.on('addresses', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      try {
        console.log(body);
        jsonStr = JSON.parse(body);
      } catch (err) {
        console(err);
        jsonStr = null;
      }
      addressNames = jsonStr;
    });
  }
  console.log(addressNames);
  res.render('coordinate', { addressNames: JSON.stringify(addressNames) });
});

module.exports = router;
