var express = require('express');
var router = express.Router();
var authority = require('../src/controller/authorityCtrl');

/* 权限操作 */
router.post('/add',authority.addAction());
router.get('/getAll',authority.findAction());

module.exports = router;
