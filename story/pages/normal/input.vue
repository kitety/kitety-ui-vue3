<template>
  <div class="demo-input">
    <pl-input></pl-input>
    <h4>状态</h4>
    <pl-input
      v-for="item in ['primary', 'success', 'warn', 'error', 'info']"
      :status="item"
      :key="item"
      style="margin-right: 8px; margin-top: 8px"
    />
  </div>
</template>

<script>
export default {
  name: "demo-input",
};
</script>

<style>
</style>
