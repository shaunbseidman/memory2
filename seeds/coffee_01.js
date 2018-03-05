
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("DELETE FROM coffee; Alter Sequence coffee_id_seq RESTART WITH 4;")
  // return knex('coffee').del()
    .then(function () {
      // Inserts seed entries
      return knex('coffee').insert([
        {id: 1, name: 'Black and Tan', roaster: 'Ink', aroma: 3},
        {id: 2, name: 'Holiday', roaster: 'Starbucks', aroma: 9},
        {id: 3, name: 'House Quake', roaster: 'Denver Coffee', aroma: 6},
      ]);
    });
};
