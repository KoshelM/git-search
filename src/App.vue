<template>
  <SearchLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchLayout from './components/SearchLayout.vue'
export default defineComponent({
  name: 'App',
  components: {
    SearchLayout
  }
})
</script>

<style lang="less">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
