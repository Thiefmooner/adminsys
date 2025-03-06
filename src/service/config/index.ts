let BASE_URL = ''
//vite提供import.meta.env.MODE，区分开发生产
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://123.207.32.32:4000'
} else {
  BASE_URL = 'https://apifoxmock.com/m1/4923274-4580354-default'
}
export { BASE_URL }
export const TIME_OUT = 10000
