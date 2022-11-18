<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuTopbar from "./components/MenuTopbar.vue";
import MenuSidebar from "./components/MenuSidebar.vue";
</script>

<template>
  <MenuTopbar class="top" />
  <MenuSidebar class="left" />
  <RouterView />
</template>

<style scoped>
.top {
  grid-column: 1 / 3;
}
</style>
