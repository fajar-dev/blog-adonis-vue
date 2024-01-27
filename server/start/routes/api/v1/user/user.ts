import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.resource('user', 'UsersController').only(['index', 'show', 'store', 'update', 'destroy'])
}
