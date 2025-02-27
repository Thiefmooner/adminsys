let BASE_URL = ''
//vite提供import.meta.env.MODE，区分开发生产
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  BASE_URL = 'http://152.136.185.210:5000'
}
export { BASE_URL }
export const TIME_OUT = 10000
