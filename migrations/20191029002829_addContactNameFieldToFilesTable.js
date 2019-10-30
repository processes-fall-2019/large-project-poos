
exports.up = function(knex) {
  return knex.schema.table('files', function(t) {
    t.string('contact_name')
  })
}

exports.down = function(knex) {
  return knex.schema.table('files', function(t) {
    t.dropColumn('contact_name')
  })
}
