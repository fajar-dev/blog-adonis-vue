import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.put('/profile', 'ProfilesController.update')
  Route.put('/profile/change-password', 'ProfilesController.changePassword')
}
