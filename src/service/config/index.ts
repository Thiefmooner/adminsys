let BASE_URL = ''
//vite提供import.meta.env.MODE，区分开发生产
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://152.16.185.210:4000'
} else {
  BASE_URL = 'http://127.0.0.1:4523/m1/4923274-4580354-default'
}
export { BASE_URL }
export const TIME_OUT = 10000
