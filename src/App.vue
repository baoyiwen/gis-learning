<template>
  <div class="app-root" id="app">
   <CesiumViewer></CesiumViewer>
  </div>
</template>
<script setup lang="ts">
import CesiumViewer  from './components/CesiumModel/CesiumViewer.vue';
</script>
<style scoped>
.app-root {
  width: 100vw;
  height: 100vh;
}
</style>
