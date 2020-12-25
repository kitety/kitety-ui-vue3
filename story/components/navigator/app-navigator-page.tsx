import { DefineComponent, defineComponent, markRaw, reactive, watch } from "vue";
import { injectAppNavigator } from "./app-navigator";

const AppNavigatorPage = defineComponent({
  setup() {
    const navigator = injectAppNavigator()
    const state = reactive({
      PageComponent: null as null | DefineComponent
    })

    const utils = {
      reset: async () => {
        const { route } = navigator.state
        let { path } = route
        // 没有path return
        if (!path) return
        // 根据path引入文件
        if (path.charAt(0) === '/') {
          path = path.slice(1)
        }
        // 拿到es模块
        const Component = (await import(`story/pages/${path}`)).default
        // 要展示出来 变为非响应式的
        state.PageComponent = markRaw(Component)
      }
    }
    watch(() => navigator.state.route.path, utils.reset, { immediate: true })
    return () => {
      const { PageComponent } = state
      return PageComponent ? <PageComponent /> : null
    }
  }
})
export default AppNavigatorPage;
