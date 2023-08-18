import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.QM6dw7w8FlJeyV72kWXeagn8dXNIb_5yCWKA9VSPzZe2J0Ha8aMxAN8J1MNz',
  },
})
