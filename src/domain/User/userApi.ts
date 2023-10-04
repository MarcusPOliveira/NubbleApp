import { api } from '@api'

import { UserAPI } from './userTypes'

const PATH = 'users'

async function getUserById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`)
  return response.data
}

export const userApi = {
  getUserById,
}
