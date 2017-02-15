const store = require('./store.js');
var gb = require('geckoboard')('{{token}}');

store.estConnection(function(datastore) {
  gb.datasets.findOrCreate(
  {
    "id": "deals",
    "fields": {
      "id": {
        "type": "number",
        "name": "id",
        "optional": false 
      },
      "status": {
        "type": "number",
        "name": "status",
        "optional": true 
      },
      "stage_id": {
        "type": "number",
        "name": "stage_id",
        "optional": true
      },
      "pipeline_stage_id": {
        "type": "number",
        "name": "pipeline_stage_id",
        "optional": true 
      },
      "name": {
        "type":
        "string",
        "name": "name",
        "optional": false
      },
      "scope": {
        "type": "money",
        "name": "scope",
        "currency_code": "USD",
        "optional": true
      },
      "contact_name": {
        "type": "string",
        "name": "contact_name",
        "optional": false
      },
      "updated_at": {
        "type": "datetime",
        "name": "updated_at"
      },
      "created_at": {
        "type": "datetime",
        "name": "created_at"
      },
      "last_stage_change_at": {
        "type": "datetime",
        "name": "last_stage_change_at"
      }
    },
    "unique_by": ["name"]
  },
  function (err, dataset) {
    if (err) {
      console.error('errorLog: ' + err.stack);
      return;
    }
    for(i = 0; i < 499; i++) {
      dataset.post(
        [datastore[i]],
        {delete_by: 'created_at'},
        function (err) {
          if (err) {
            console.error('errorLog: ' + err.stack);
            return;
          }
          console.log(`Success: ${datasets.id} was updated`);
        }
      );
    }
  });
});
