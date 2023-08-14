import axios from 'axios'
import Cookies from 'js-cookie'

export const AuthApi = axios.create({
  baseURL: 'https://address-book-system.onrender.com/api/v1/auth',
})

const token = Cookies.get('access_token')
export const ContactApi = axios.create({
  baseURL: 'https://address-book-system.onrender.com/api/v1/contact',
  headers: { Authorization: `Bearer ${token}` },
})
