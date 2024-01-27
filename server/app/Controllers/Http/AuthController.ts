import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import ApiResponse from 'App/Helpers/ApiResponse'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'
import Mail from '@ioc:Adonis/Addons/Mail'
import { v4 as uuid } from 'uuid'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const registerSchema = schema.create({
      name: schema.string(),
      email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string([rules.minLength(6)]),
    })
    const payload = await request.validate({ schema: registerSchema })

    const user = new User()
    user.name = payload.name
    user.email = payload.email
    user.password = payload.password
    const data = await user.save()

    return ApiResponse.created(response, data, 'User register created successfully')
  }

  public async login({ auth, request, response }: HttpContextContract) {
    try {
      const loginSchema = schema.create({
        email: schema.string([rules.email()]),
        password: schema.string(),
      })
      const payload = await request.validate({ schema: loginSchema })

      const user = await User.query().where('email', payload.email).preload('role').first()
      const email = payload.email
      const password = payload.password
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1 days',
      })

      return ApiResponse.ok(
        response,
        { user: user, access_token: token },
        'User Login successfully'
      )
    } catch (error) {
      return ApiResponse.unauthorized(response, 'Invalid Credentials')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    return ApiResponse.ok(response, null, 'User logged out successfully')
  }

  public async me({ auth, response }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    // Assuming you want to preload the 'role' relationship
    await user.preload('role')
    return ApiResponse.ok(response, { user }, 'User details fetched successfully')
  }

  public async forget({ request, response }: HttpContextContract) {
    const forgotPasswordSchema = schema.create({
      email: schema.string({}, [rules.email()]),
    })

    const payload = await request.validate({ schema: forgotPasswordSchema })

    const user = await User.findBy('email', payload.email)
    if (!user) return ApiResponse.badRequest(response, 'User not found')

    const token = uuid()

    await Database.insertQuery()
      .table('password_reset_tokens')
      .insert({
        email: user.email,
        token: token,
        expires_at: new Date(Date.now() + 3600000), // 1 hour expiration
      })

    const resetUrl = `https://your-app-url/reset-password?token=${token}` // Change to your app's reset password page URL

    await Mail.send((message) => {
      message
        .from('support@metromatika.com')
        .to(user.email)
        .subject('Reset Password')
        .htmlView('emails/password_reset', { user, resetUrl })
    })

    return ApiResponse.ok(response, null, 'Password reset email sent successfully')
  }

  public async reset({ request, response }: HttpContextContract) {
    const resetPasswordSchema = schema.create({
      token: schema.string(),
      email: schema.string({}, [rules.email()]),
      password: schema.string({}, [rules.minLength(6)]),
    })

    const payload = await request.validate({ schema: resetPasswordSchema })

    // Find the user with the email
    const user = await User.findBy('email', payload.email)

    if (!user) return ApiResponse.notFound(response, 'User not found')

    const resetRecord = await Database.from('password_reset_tokens')
      .where('email', payload.email)
      .where('token', payload.token)
      .where('expires_at', '>', new Date())
      .first()

    if (!resetRecord) return ApiResponse.unauthorized(response, 'Invalid or expired reset token')

    user.password = payload.password
    await user.save()

    await Database.from('password_reset_tokens').where('email', payload.email).delete()

    return ApiResponse.ok(response, null, 'Password reset successful')
  }
}
