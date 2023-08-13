import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://address-book-system.onrender.com/api/v1/auth/',
})
