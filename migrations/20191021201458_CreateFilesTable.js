
exports.up = function(knex) {
  return knex.schema.hasTable('files')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('files', function (t) {
          t.increments('id')
          t.string('name')
          t.bigInteger('contact_id')
          t.bigInteger('user_id')
          t.string('amazon_url')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('files')
};
