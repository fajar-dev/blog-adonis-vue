import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApiResponse from 'App/Helpers/ApiResponse'
import Category from 'App/Models/Category'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CategoriesController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const data = await Category.query().paginate(page, limit)
    return ApiResponse.ok(response, data, 'Categories retrieved successfully')
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Category.find(params.id)
    return ApiResponse.ok(response, data, 'Category show successfully')
  }

  public async store({ request, response }: HttpContextContract) {
    const newRoleSchema = schema.create({
      name: schema.string(),
    })
    const payload = await request.validate({ schema: newRoleSchema })

    const role = new Category()
    role.name = payload.name
    const data = await role.save()
    return ApiResponse.created(response, data, 'Category created successfully')
  }

  public async update({ request, response, params }: HttpContextContract) {
    const updateRoleSchema = schema.create({
      name: schema.string(),
    })
    const payload = await request.validate({ schema: updateRoleSchema })

    const role = await Category.find(params.id)
    if (!role) return ApiResponse.badRequest(response, 'No data to update.')
    role.name = payload.name
    const data = await role.save()
    return ApiResponse.ok(response, data, 'Category updated successfully')
  }

  public async destroy({ response, params }: HttpContextContract) {
    const role = await Category.find(params.id)
    if (!role) return ApiResponse.badRequest(response, 'No data to delete.')
    const data = await role.delete()
    return ApiResponse.ok(response, data, 'Category deleted successfully')
  }
}
