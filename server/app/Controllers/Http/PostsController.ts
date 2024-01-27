import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApiResponse from 'App/Helpers/ApiResponse'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const q = request.input('q', '')
    const data = await Post.query()
      .preload('category')
      .preload('user')
      .where('title', 'LIKE', `%${q}%`)
      .paginate(page, limit)
    return ApiResponse.ok(response, data, 'Posts retrieved successfully')
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Post.query()
      .where('id', params.id)
      .preload('category')
      .preload('user')
      .first()
    return ApiResponse.ok(response, data, 'post retrieved successfully')
  }
}
