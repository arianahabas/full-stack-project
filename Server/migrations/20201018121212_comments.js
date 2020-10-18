
exports.up = async function(knex) {
  await knex.schema.createTable('comments', (table)=>{
      table.increments('id')
      table.text('comment')
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('comments')

};
