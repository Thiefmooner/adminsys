import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局注册下icons
function registerIcons(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
export default registerIcons
