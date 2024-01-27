import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  BelongsTo,
  beforeSave,
  BaseModel,
  beforeCreate,
  belongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Role from './Role'

export default class User extends BaseModel {
  @beforeCreate()
  public static async createUUID(model: User) {
    model.id = uuid()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column()
  public image: string | null

  @column()
  public roleId: string | undefined

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
