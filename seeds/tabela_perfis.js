
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('perfis').del()
    .then(function () {
      return knex('perfis').insert([
        {nome: 'comum', rotulo: 'Comum'},
        {nome: 'administrador', rotulo: 'Administrador'},
        {nome: 'master', rotulo: 'Master'}
      ]);
    });
};
