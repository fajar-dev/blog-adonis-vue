/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.post('/register', 'AuthController.register')
      Route.post('/login', 'AuthController.login')
      Route.post('/logout', 'AuthController.logout').middleware('auth')
      Route.get('/me', 'AuthController.me').middleware('auth')
      Route.post('/forget', 'AuthController.forget')
      Route.post('/reset', 'AuthController.reset')
    }).prefix('/auth')

    Route.group(() => {
      Route.resource('role', 'RolesController').only([
        'index',
        'show',
        'store',
        'update',
        'destroy',
      ])
    }).middleware('auth')

    Route.group(() => {
      Route.resource('user', 'UsersController').only([
        'index',
        'show',
        'store',
        'update',
        'destroy',
      ])
    }).middleware('auth')

    Route.group(() => {
      Route.put('/profile', 'ProfilesController.update')
      Route.put('/profile/change-password', 'ProfilesController.changePassword')
    }).middleware('auth')

    Route.group(() => {
      Route.resource('category', 'CategoriesController').only([
        'index',
        'show',
        'store',
        'update',
        'destroy',
      ])
    }).middleware('auth')
  }).prefix('/v1')
}).prefix('/api')
