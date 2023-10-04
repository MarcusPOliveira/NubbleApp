import { userAdapter } from './userAdapter'
import { userApi } from './userApi'
import { User } from './userTypes'

async function getUserById(id: number): Promise<User> {
  const userAPI = await userApi.getUserById(id.toString())
  return userAdapter.toUser(userAPI)
}

export const userService = {
  getUserById,
}
