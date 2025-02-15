let BASE_URL = ''
//vite提供import.meta.env.MODE，区分开发生产
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://codercba.prod:8000'
} else {
  BASE_URL = 'http://coderwhy.dev:8000'
}
console.log(BASE_URL)
export { BASE_URL }
export const TIME_OUT = 10000
