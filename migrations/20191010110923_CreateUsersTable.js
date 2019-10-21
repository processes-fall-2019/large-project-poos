
exports.up = function(knex) {
  return knex.schema.hasTable('users')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('users', function (t) {
          t.increments('id')
          t.string('user_name')
          t.string('email')
          t.string('password')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
