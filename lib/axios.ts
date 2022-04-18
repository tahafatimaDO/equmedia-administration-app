import axios, { HeadersDefaults } from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import * as cookie from 'cookie'
import * as setCookie from 'set-cookie-parser'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
})

createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
  axiosInstance.get('/api/refreshToken').then((res) => {
    if (axiosInstance.defaults.headers.common['setCookie']) {
      delete axiosInstance.defaults.headers.common['setCookie']
    }
    const { accessToken } = res.data
    const bearer = `Bearer ${accessToken}`
    axiosInstance.defaults.headers.common['Authorization'] = bearer

    const responseCookie = setCookie.parse(res.headers['set-cookie']!)[0] 
    axiosInstance.defaults.headers.common['setCookie'] = res.headers['set-cookie']![0];
    axiosInstance.defaults.headers.common['cookie'] = cookie.serialize(
      responseCookie.name,
      responseCookie.value
    )
    
    failedRequest.response.config.headers.common['Authorization'] = bearer

    return Promise.resolve()
  })
)

export default axiosInstance
