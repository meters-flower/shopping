const aModel = require('../models/authority');
const dbHelper = require('../dbHelper');

exports.addData = function(conditions,callback) {
    dbHelper.addData(aModel,conditions,function(result) {
        callback(result);
    });
};

exports.findData = function(conditions,callback) {
    var fields   = {};
    var options  = {};
 
    dbHelper.findData(aModel,conditions,fields,options,function(result){
        callback(result);
    });
}
 
 exports.delData= function(conditions,callback) {
    dbHelper.removeData(aModel,conditions,function(result){
        callback(result);
    });
}
 
exports.updateData = function(conditions,update,options,callback) {
    dbHelper.updateData(aModel,conditions,update,options,function(result){
        callback(result);
    });
}