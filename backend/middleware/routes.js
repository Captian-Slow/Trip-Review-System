var express = require('express');
app = express();
router = express.Router();
var logger = require('./logger');

router.use(logger.log_time_date_req);

router.get('/', function (req, res) {
    res.send('Home page');
});

router.get('/login', function (req, res) {
    res.send('Login');
});

module.exports = router;
