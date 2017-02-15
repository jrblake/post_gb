var mysql = require('mysql');

module.exports = {  
  estConnection: function(callback) {
    var datastore = [];
    var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'jared_blake',
    password : '{{password}}',
    database : '{{db}}',
    port     : '33306'
    });

    connection.connect(function(err) {
    if (err) {
      console.error('errorLog: ' + err.stack);
      return;
    } else {
      console.log('Connected @ $ID: ' + connection.threadId);
      connection.query('SELECT id, status, stage_id, pipeline_stage_id, name, scope, contact_name, created_at, updated_at, last_stage_change_at FROM deals WHERE account_id = "153107" AND pipeline_stage_id = "48781" ORDER BY last_stage_change_at DESC', function (error, results, fields) {
      if (error) throw error;
      for(i = 0; i < results.length; i++) {
        datastore[i] = {
          id: results[i]["id"],
          status: results[i]["status"],
          stage_id: results[i]["stage_id"],
          pipeline_stage_id: results[i]["pipeline_stage_id"],
          name: results[i]["name"],
          scope: (100 * results[i]["scope"]),
          contact_name: results[i]["contact_name"],
          updated_at: results[i]["updated_at"],
          created_at: results[i]["created_at"],
          last_stage_change_at: results[i]["last_stage_change_at"]
        };
      };
      callback(datastore);
      });
      connection.end();

    }
    });
  }
};