import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.FweynixNbBUJJs5MocKivsHXRzlXNCvyZYw2tRoMx_RikJoV7GTG1K0jrmx4',
  },
})
