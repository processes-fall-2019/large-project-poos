
exports.up = function (knex) {
  return knex.schema.alterTable('users', function (t) {
    t.string('email').unique().notNullable().alter()
    t.string('user_name').unique().notNullable().alter()
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('users', function (t) {
    t.dropColumn('email')
    t.dropColumn('user_name')
  })
}
