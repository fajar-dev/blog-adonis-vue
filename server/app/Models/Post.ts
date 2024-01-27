import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import uuid from 'uuid-wand'
import Category from './Category'
import User from './User'

export default class Post extends BaseModel {
  @beforeCreate()
  public static async createUUID(model: Post) {
    model.id = uuid.v4()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public slug: string

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public categoryId: string

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public image: string

  @column()
  public metaDescription: string

  @column()
  public tags: JSON

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
