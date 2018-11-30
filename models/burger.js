var orm = require("../config/orm.js");

var brgr = {
    all: function(qryres){
        orm.all("burgers", function(res){
            qryres(res);
        });
    },
    create: function(flds,vals,qryres){
        orm.create("burgers",flds,vals,function(res){
            qryres(res) 
        });
    },
    update: function(flds,cond,qryres){
        orm.update("burgers",flds,cond, function(res){
            qryres(res);
        });
    }
};

module.exports = brgr;