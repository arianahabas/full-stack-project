
exports.up = async function(knex) {
  await knex.schema.createTable('posts', (table)=>{
      table.increments('id')
      table.text('title')
      table.text('body')
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('posts')
};
