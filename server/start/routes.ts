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

import authRoutes from './routes/api/v1/auth/auth'
import roleRoutes from './routes/api/v1/role/role'
import userRouter from './routes/api/v1/user/user'
import profileRouter from './routes/api/v1/profile/profile'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      authRoutes()
    })

    Route.group(() => {
      roleRoutes()
    }).middleware('auth')

    Route.group(() => {
      userRouter()
    }).middleware('auth')

    Route.group(() => {
      profileRouter()
    }).middleware('auth')
  }).prefix('/v1')
}).prefix('/api')
