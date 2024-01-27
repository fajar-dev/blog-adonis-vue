import Hash from '@ioc:Adonis/Core/Hash'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: await Hash.make('password'),
      },
    ])
  }
}
