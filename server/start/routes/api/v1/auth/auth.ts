import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.group(() => {
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.login')
    Route.post('/logout', 'AuthController.logout').middleware('auth')
    Route.get('/me', 'AuthController.me').middleware('auth')
    Route.post('/forget', 'AuthController.forget')
    Route.post('/reset', 'AuthController.reset')
  }).prefix('/auth')
}
