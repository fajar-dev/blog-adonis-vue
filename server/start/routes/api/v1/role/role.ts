import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.resource('role', 'RolesController').only(['index', 'show', 'store', 'update', 'destroy'])
}
