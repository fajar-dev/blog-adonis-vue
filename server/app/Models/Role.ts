import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import uuid from 'uuid-wand'

export default class Role extends BaseModel {
  public static paginate: any

  @beforeCreate()
  public static async createUUID(model: Role) {
    model.id = uuid.v4()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
