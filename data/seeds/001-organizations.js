exports.seed = function(knex) {
  return knex('organizations').insert([
    { name: 'Lambda School' },
    { name: 'Smart Lot' }
  ])
}
