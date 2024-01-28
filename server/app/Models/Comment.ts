import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import uuid from 'uuid-wand'
import User from './User'
import Post from './Post'

export default class Comment extends BaseModel {
  @beforeCreate()
  public static async createUUID(model: Comment) {
    model.id = uuid.v4()
  }
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public postId: string

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
