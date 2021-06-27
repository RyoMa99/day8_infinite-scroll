import axios, { AxiosError } from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 1000
})

http.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case 401:
        console.log(`interceptor 401. ${error.message}`)
        break
      case 403:
      case 404:
        console.log(`interceptor 403 or 404. ${error.message}`)
        break
      default:
        // timeoutもこっちに入る
        console.log(`interceptor default. ${error.message}`)
    }
  })

export default http
