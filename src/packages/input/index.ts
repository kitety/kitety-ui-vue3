import { App } from 'vue';
import Input from './input';

export default {
  ...Input,
  install(app: App) {
    // 安装的时候全局注册组件
    app.component(Input.name, Input)
  }
}
