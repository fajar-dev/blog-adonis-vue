import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .uuid('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
        .index()
        .notNullable()
      table
        .uuid('post_id')
        .references('posts.id')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
        .index()
        .notNullable()
      table.text('content').notNullable()
      table.boolean('is_publish').defaultTo(true).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
