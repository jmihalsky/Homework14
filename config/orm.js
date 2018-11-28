var connection = require("./connection.js");

var orm = {
    all_burgers: function(tableInput, qryres){
        var qrystrg = "select * from ??";
        connection.query(qrystrg, [tableInput],function(err,res){
            if(err) throw err;
            qryres(res);
        });
    },
    create: function(tableInput,flds,vls,qryres){
        
    }
};

module.exports = orm;