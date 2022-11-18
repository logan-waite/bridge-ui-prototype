<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }" active-class="active" class="router-link"
      >Dashboard</RouterLink
    >
    <RouterLink
      :to="{ name: 'products' }"
      active-class="active"
      class="router-link"
      >Products</RouterLink
    >
    <RouterLink
      :to="{ name: 'inventory' }"
      active-class="active"
      class="router-link"
      >Inventory</RouterLink
    >
    <RouterLink
      :to="{ name: 'shipments' }"
      active-class="active"
      class="router-link"
      >Shipments</RouterLink
    >
    <RouterLink
      :to="{ name: 'returns' }"
      active-class="active"
      class="router-link"
      >Returns</RouterLink
    >
  </nav>
</template>

<style scoped>
nav {
  height: 100%;
  background-color: #00253b;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
}
.router-link {
  color: white;
  padding: 10px;
  padding-left: 20px;
  font-size: 14pt;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-decoration: none;
}
.active {
  color: #00253b;
  background-color: white;
}
</style>
