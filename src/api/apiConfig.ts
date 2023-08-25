import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.E4rMCmvZ8aYZmlLltafykXU1lgOFDVDkq9hY4mQzBIK_gqeLZHHrR0X46Bka',
  },
})
