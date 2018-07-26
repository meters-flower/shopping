const authorityDao = require('../dbSql/authorityDao');

/* 添加权限(菜单) */
exports.addAction = function() {
    return function(req, res) {
        let obj = {
            title: req.body.title,
            sort: 1,
            url: ''
        };
        authorityDao.addData(obj,function(result){
            res.json(result);
        });         
    }
}

/* 权限查询 */
exports.findAction = function() {
    return function(req, res) {
        authorityDao.findData({},function(result){
            res.json(result);
        });         
    }
}

