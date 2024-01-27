import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'password_reset_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('email')
      table.string('token')
      table.timestamp('expires_at')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
