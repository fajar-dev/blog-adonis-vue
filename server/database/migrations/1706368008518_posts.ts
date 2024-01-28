import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('slug').index().notNullable().unique()
      table.string('title').index().notNullable()
      table.text('content').notNullable()
      table
        .uuid('category_id')
        .references('categories.id')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
        .index()
        .notNullable()
      table
        .uuid('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
        .index()
        .notNullable()
      table.string('image').notNullable()
      table.string('meta_description').notNullable()
      table.json('tags').notNullable()
      table.boolean('is_publish').defaultTo(true).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
