import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApiResponse from 'App/Helpers/ApiResponse'
import { schema } from '@ioc:Adonis/Core/Validator'
import Comment from 'App/Models/Comment'

export default class CommentsController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const data = await Comment.query().preload('user').preload('post').paginate(page, limit)
    return ApiResponse.ok(response, data, 'Comments retrieved successfully')
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Comment.query()
      .where('id', params.id)
      .preload('post')
      .preload('user')
      .first()
    return ApiResponse.ok(response, data, 'Comment show successfully')
  }

  public async ReadByPost({ params, response }: HttpContextContract) {
    const data = await Comment.query()
      .where('postId', params.postId)
      .preload('user')
      .orderBy('comments.created_at', 'desc')
    return ApiResponse.ok(response, data, 'Comment sretrieved by post successfully')
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    const newRoleSchema = schema.create({
      postId: schema.string(),
      content: schema.string(),
    })
    const payload = await request.validate({ schema: newRoleSchema })

    const comment = new Comment()
    comment.userId = user.id
    comment.postId = payload.postId
    comment.content = payload.content
    const data = await comment.save()
    return ApiResponse.created(response, data, 'comment created successfully')
  }

  public async destroy({ response, params }: HttpContextContract) {
    const comment = await Comment.find(params.id)
    if (!comment) return ApiResponse.badRequest(response, 'No data to delete.')
    const data = await comment.delete()
    return ApiResponse.ok(response, data, 'comment deleted successfully')
  }
}
