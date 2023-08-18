import { MetaDataPageAPI, PageAPI, api } from '@api'

import { PostApi } from './postTypes'

async function getList(): Promise<PageAPI<PostApi>> {
  // with fetch api
  // let response = await fetch('http://127.0.0.1:3333/user/post', {
  //   method: 'GET',
  //   headers: {
  //     Authorization:
  //       'Bearer NA.QM6dw7w8FlJeyV72kWXeagn8dXNIb_5yCWKA9VSPzZe2J0Ha8aMxAN8J1MNz',
  //   },
  // })
  // let data: PageAPI<PostApi> = await response.json()
  // return data

  // with axios
  const response = await api.get<PageAPI<PostApi>>('/user/post')
  return response.data
}

export const postApi = {
  getList,
}
