import { defineComponent, reactive, provide, inject, onBeforeUnmount } from 'vue'

interface Route {
  path?: string
  hash?: string
  param?: { [key: string]: string }
}
const APP_NAVIGATION_PROVIDER = '@@APP_NAVIGATION_PROVIDER'
/**
 * hash 路由
 */
function getRoute(): Route {
  let locationHash = window.location.hash || ''
  if (locationHash.charAt(0) === '#') {
    locationHash = locationHash.slice(1)
  }
  const [path, hash] = (decodeURIComponent(locationHash)).split('#')
  return { path, hash }
}

function useAppNavigation(props: { defaultPath?: string }) {
  const currentRoute = getRoute()
  !currentRoute.path && (currentRoute.path = props.defaultPath)
  const state = reactive({
    route: currentRoute
  })
  const methods = {
    go(path: string) {
      window.location.hash = path
    }
  }
  const handle = {
    hashChange: () => {
      state.route = getRoute()
    }
  }
  const refer = { state, methods }
  window.addEventListener('hashchange', handle.hashChange)
  onBeforeUnmount(() => {
    () => {
      window.removeEventListener('hashchange', handle.hashChange)
    }
  })
  provide(APP_NAVIGATION_PROVIDER, refer)
  return refer
}
export function injectAppNavigator(): ReturnType<typeof useAppNavigation> {
  // 组件调用的时候方便获取类型
  return inject(APP_NAVIGATION_PROVIDER) as ReturnType<typeof useAppNavigation>
}
const AppNavigation = defineComponent({
  name: 'app-navigation',
  props: { defaultPath: String },
  setup(props, setupContext) {
    useAppNavigation(props)
    return () => !!setupContext.slots.default ? setupContext.slots.default() : null
  }
})
export default AppNavigation;
