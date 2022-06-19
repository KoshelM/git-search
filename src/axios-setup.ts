import axios from 'axios'
const requests: Record<string, AbortController | null> = {}

export const axiosSetup = () => {
  axios.interceptors.request.use(async config => {
    const baseURL = 'https://api.github.com'

    if (config.url && config.headers?.cancellable) {
      requests[config.url]?.abort()
      requests[config.url] = new AbortController()
    }

    return {
      ...config,
      baseURL,
      headers: {
        ...config.headers
      },
      params: {
        ...config.params
      }
    }
  })
}
