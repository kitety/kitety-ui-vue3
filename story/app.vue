<template>
  <app-navigator defaultPath="normal/button">
    <article class="app-home">
      <section class="app-header">kitety-ui-vue3</section>
      <section class="app-body">
        <section class="app-menu"><app-menu></app-menu></section>
        <section class="app-content">
          <app-navigator-page> </app-navigator-page>
        </section>
      </section>
    </article>
  </app-navigator>
</template>

<script>
import AppNavigator from "./components/navigator/app-navigator";
import AppNavigatorPage from "./components/navigator/app-navigator-page";
import AppMenu from "./components/app/app-menu";

export default {
  name: "app",
  components: { AppNavigator, AppNavigatorPage, AppMenu },
};
</script>

<style lang="scss">
$headSize: 60px;
$menuSize: 300px;
body {
  margin: 0;
}
#app {
  height: 100vh;
}
.app-home {
  height: 100vh;
  .app-header {
    height: $headSize;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    padding: 0 40px;
    align-items: center;
    color: chocolate;
  }
  .app-body {
    display: flex;
    position: fixed;
    top: $headSize;
    left: 0;
    bottom: 0;
    right: 0;
    .app-menu {
      width: $menuSize;
      overflow-y: auto;
      overflow-x: hidden;
      border-right: 1px solid #ccc;
    }
    .app-content {
      flex: 1;
      padding: 20px;
    }
  }
}
</style>
