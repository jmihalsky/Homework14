var orm = require("../config/orm.js");

var brgr = {
    all: function(qryres){
        orm.all("burgers", function(res){
            qryres(res);
        });
    },
    create: function(flds,vls,qryres){
        orm.create("burgers",flds,vls,qryres, function(res){
            qryres(res);
        });
    },
    update: function(flds,cond,qryres){
        orm.update("burgers",flds,cond, function(res){
            qryres(res);
        });
    }
};

module.exports = brgr;