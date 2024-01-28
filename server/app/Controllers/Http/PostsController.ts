import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApiResponse from 'App/Helpers/ApiResponse'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Post from 'App/Models/Post'
import Application from '@ioc:Adonis/Core/Application'

export default class PostsController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const q = request.input('q', '')
    const data = await Post.query()
      .preload('category')
      .preload('user')
      .where('isPublish', true)
      .where('title', 'LIKE', `%${q}%`)
      .paginate(page, limit)
    return ApiResponse.ok(response, data, 'Posts retrieved successfully')
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Post.query()
      .where('isPublish', true)
      .where('id', params.id)
      .preload('category')
      .preload('user')
      .first()
    return ApiResponse.ok(response, data, 'post retrieved successfully')
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    const newUserSchema = schema.create({
      title: schema.string(),
      content: schema.string(),
      categoryId: schema.string([rules.exists({ table: 'categories', column: 'id' })]),
      image: schema.file({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
      metaDescription: schema.string(),
      isPublish: schema.boolean(),
      tags: schema.string(),
    })
    const payload = await request.validate({ schema: newUserSchema })

    // Handle file upload for the image
    await payload.image.move(Application.publicPath('post'))

    const post = new Post()
    post.title = payload.title
    post.content = payload.content
    post.categoryId = payload.categoryId
    post.userId = user.id
    post.image = payload.image?.clientName
    post.metaDescription = payload.metaDescription
    post.tags = payload.tags
    post.isPublish = payload.isPublish
    const data = await post.save()
    return ApiResponse.created(response, data, 'post created successfully')
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateUserSchema = schema.create({
      title: schema.string(),
      content: schema.string(),
      password: schema.string.optional([rules.minLength(6)]),
      categoryId: schema.string([rules.exists({ table: 'categories', column: 'id' })]),
      image: schema.file.optional({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
      metaDescription: schema.string(),
      tags: schema.string(),
      isPublish: schema.boolean(),
    })
    const payload = await request.validate({ schema: updateUserSchema })

    // Handle file upload for the image
    if (payload.image) {
      await payload.image.move(Application.publicPath('post'))
    }

    const post = await Post.find(params.id)
    if (!post) return ApiResponse.badRequest(response, 'No data to update.')
    post.title = payload.title
    post.content = payload.content
    post.categoryId = payload.categoryId
    post.metaDescription = payload.metaDescription
    post.tags = payload.tags
    post.isPublish = payload.isPublish
    if (payload.image) {
      post.image = payload.image?.clientName
    }
    const data = await post.save()
    return ApiResponse.ok(response, data, 'Post updated successfully')
  }

  public async destroy({ response, params }: HttpContextContract) {
    const post = await Post.find(params.id)
    if (!post) return ApiResponse.badRequest(response, 'No data to delete.')
    const data = await post.delete()
    return ApiResponse.ok(response, data, 'post deleted successfully')
  }
}
