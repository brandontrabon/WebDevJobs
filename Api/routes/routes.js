/**
 * Created by btrabon on 6/19/16.
 */

var express = require('express');
var actions = require('../actions/methods');

var router = express.Router();
router.post('/authenticate', actions.authenticate);

module.exports = router;