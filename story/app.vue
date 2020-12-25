<template>
  <app-navigator defaultPath="normal/button">
    <h1><app-navigator-page></app-navigator-page></h1>
  </app-navigator>
</template>

<script>
import AppNavigator from "./components/navigator/app-navigator";
import AppNavigatorPage from "./components/navigator/app-navigator-page";

export default {
  name: "app",
  components: { AppNavigator, AppNavigatorPage },
};
</script>

<style lang="scss"></style>
