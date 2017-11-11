var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        connectionLimit : 5,
        host     : 'localhost',
        user     : 'root',
        password : 'Abcd1234',
        database : 'subdb'
      });
      return pool;
    }
};
