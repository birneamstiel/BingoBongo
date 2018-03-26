var express = require('express');
var router = express.Router();

/* GET capNumbers. */
router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        count: 0
    }, {
        id: 2,
        count: 3
    }, {
        id: 3,
        count: 1
    }]);
});

module.exports = router;
