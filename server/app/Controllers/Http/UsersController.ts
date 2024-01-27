import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import ApiResponse from 'App/Helpers/ApiResponse'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const data = await User.query().preload('role').paginate(page, limit)
    return ApiResponse.ok(response, data, 'Roles retrieved successfully')
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await User.query().where('id', params.id).preload('role').first()
    return ApiResponse.ok(response, data, 'Roles retrieved successfully')
  }

  public async store({ request, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      name: schema.string(),
      email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string([rules.minLength(6)]),
      image: schema.file({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
      roleId: schema.string.optional([rules.exists({ table: 'roles', column: 'id' })]),
    })
    const payload = await request.validate({ schema: newUserSchema })

    // Handle file upload for the image
    await payload.image.move(Application.publicPath('user'))

    const user = new User()
    user.name = payload.name
    user.email = payload.email
    user.password = payload.password
    user.image = payload.image?.clientName
    user.roleId = payload.roleId
    const data = await user.save()
    return ApiResponse.created(response, data, 'User created successfully')
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateUserSchema = schema.create({
      name: schema.string(),
      email: schema.string([
        rules.email(),
        rules.unique({
          table: 'users',
          column: 'email',
          whereNot: { id: params.id }, // Exclude the current user
        }),
      ]),
      password: schema.string.optional([rules.minLength(6)]),
      image: schema.file.optional({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
      roleId: schema.string.optional([rules.exists({ table: 'roles', column: 'id' })]),
    })
    const payload = await request.validate({ schema: updateUserSchema })

    // Handle file upload for the image
    if (payload.image) {
      await payload.image.move(Application.publicPath('user'))
    }

    const user = await User.find(params.id)
    if (!user) return ApiResponse.badRequest(response, 'No data to update.')
    user.name = payload.name
    user.email = payload.email
    if (payload.password) {
      user.password = payload.password
    }
    user.roleId = payload.roleId
    if (payload.image) {
      user.image = payload.image?.clientName
    }
    const data = await user.save()

    return ApiResponse.ok(response, data, 'User created successfully')
  }

  public async destroy({ response, params }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) return ApiResponse.badRequest(response, 'No data to delete.')
    const data = await user.delete()
    return ApiResponse.ok(response, data, 'User deleted successfully')
  }
}
