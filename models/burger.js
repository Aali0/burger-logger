var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("burgers", col, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, conditon, function(res) {
            cb(res);
        });
    },

    delete: function(conditon, cb) {
        orm.delete("burgers", conditon, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;

