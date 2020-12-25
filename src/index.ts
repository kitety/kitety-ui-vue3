import Input from './packages/input'
import { App } from 'vue'

const plugins = [Input]

function install(app: App) {
  plugins.forEach(app.use)
}
export { Input, install }
export default { install };
