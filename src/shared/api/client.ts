import axios from 'axios'
import { backendBaseUrl } from '../config/backend'

const instance = axios.create({
  baseURL: backendBaseUrl,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
