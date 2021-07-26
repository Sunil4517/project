
exports.up = function (knex) {
  return knex.raw (`
  CREATE TABLE IF NOT EXISTS lookup
  (
    id serial,
    type varchar(20),
    key varchar(200)
  )
  `)
};

exports.down = function(knex) {
  return knex.schema.dropTable('lookup');
};
