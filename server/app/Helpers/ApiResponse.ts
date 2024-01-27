// app/Helpers/Response.ts

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiResponse {
  /**
   * Send a success response with data and an optional message
   *
   * @param response - HttpContext response object
   * @param statusCode - HTTP status code for the error
   * @param data - Data to be sent in the response
   * @param message - Optional message to include in the response
   */
  public static sendSuccess(
    response: HttpContextContract['response'],
    statusCode: number,
    data: any,
    message?: string
  ) {
    const responseData = { success: true, message, data }

    return response.status(statusCode).json(responseData)
  }

  /**
   * Send a Ok response with data and an optional message
   *
   * @param response - HttpContext response object
   * @param data - Data to be sent in the response
   * @param message - Optional message to include in the response
   */
  public static ok(response: HttpContextContract['response'], data: any, message?: string) {
    return this.sendSuccess(response, 200, data, message)
  }

  /**
   * Send a created response with data and an optional message
   *
   * @param response - HttpContext response object
   * @param data - Data to be sent in the response
   * @param message - Optional message to include in the response
   */
  public static created(response: HttpContextContract['response'], data: any, message?: string) {
    return this.sendSuccess(response, 201, data, message)
  }

  /**
   * Send an error response with a specific status code, message, and optional data
   *
   * @param response - HttpContext response object
   * @param statusCode - HTTP status code for the error
   * @param message - Error message
   * @param data - Optional additional data to include in the response
   */
  public static sendError(
    response: HttpContextContract['response'],
    statusCode: number,
    message: string,
    errors?: any,
    data?: any
  ) {
    const errorResponse = { success: false, message, error: { code: statusCode, errors } }

    if (data) {
      errorResponse['data'] = data
    }

    return response.status(statusCode).json(errorResponse)
  }

  /**
   * Send an internal server error response with an optional custom message
   * The message is displayed in development mode, while in production, a generic message is shown.
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for internal server error
   * @param errors - error stack to display
   */
  public static internalServerError(
    response: HttpContextContract['response'],
    message: string = 'Internal Server Error',
    errors: any
  ) {
    const isProduction = process.env.NODE_ENV === 'production'

    if (isProduction) {
      return this.sendError(response, 500, 'Internal Server Error')
    } else {
      return this.sendError(response, 500, message, errors)
    }
  }

  /**
   * Send a not found response
   *
   * @param response - HttpContext response object
   * @param message - Custom message for not found error
   */
  public static notFound(response: HttpContextContract['response'], message: string = 'Not Found') {
    return this.sendError(response, 404, message)
  }

  /**
   * Send a bad request response
   *
   * @param response - HttpContext response object
   * @param message - Custom message for bad request error
   */
  public static badRequest(
    response: HttpContextContract['response'],
    message: string = 'Bad Request'
  ) {
    return this.sendError(response, 400, message)
  }

  /**
   * Send an unauthorized response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for unauthorized error
   */
  public static unauthorized(
    response: HttpContextContract['response'],
    message: string = 'Unauthorized'
  ) {
    return this.sendError(response, 401, message)
  }

  /**
   * Send a forbidden response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for forbidden error
   */
  public static forbidden(
    response: HttpContextContract['response'],
    message: string = 'Forbidden'
  ) {
    return this.sendError(response, 403, message)
  }

  /**
   * Send a conflict response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for conflict error
   */
  public static conflict(response: HttpContextContract['response'], message: string = 'Conflict') {
    return this.sendError(response, 409, message)
  }

  /**
   * Send a validation error response with details
   *
   * @param response - HttpContext response object
   * @param errors - Validation errors object
   */
  public static validationError(response: HttpContextContract['response'], errors: any) {
    return this.sendError(response, 422, 'Validation Error', errors)
  }

  /**
   * Send a method not allowed response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for method not allowed error
   */
  public static methodNotAllowed(
    response: HttpContextContract['response'],
    message: string = 'Method Not Allowed'
  ) {
    return this.sendError(response, 405, message)
  }

  /**
   * Send a gone response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for gone error
   */
  public static gone(response: HttpContextContract['response'], message: string = 'Gone') {
    return this.sendError(response, 410, message)
  }

  /**
   * Send a precondition failed response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for precondition failed error
   */
  public static preconditionFailed(
    response: HttpContextContract['response'],
    message: string = 'Precondition Failed'
  ) {
    return this.sendError(response, 412, message)
  }

  /**
   * Send a too many requests response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for too many requests error
   */
  public static tooManyRequests(
    response: HttpContextContract['response'],
    message: string = 'Too Many Requests'
  ) {
    return this.sendError(response, 429, message)
  }
}
