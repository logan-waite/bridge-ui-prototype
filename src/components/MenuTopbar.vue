<script setup>
import oceanxLogoUrl from "@/assets/oceanx-logo.png";
</script>

<template>
  <header>
    <div class="logos">
      <img :src="oceanxLogoUrl" alt="oceanx logo" />
      <span class="vertical-bar"></span>
      <h1 class="tenant-logo">[Your Logo Here]</h1>
    </div>
    <div class="buttons">
      <FontAwesomeIcon class="icon" icon="fa-regular fa-bell" />
      <!-- <FontAwesomeIcon class="icon" icon="fa-regular fa-gear" /> -->
      <!-- <FontAwesomeIcon class="icon" icon="fa-regular fa-circle-question" /> -->
      <FontAwesomeIcon class="icon" icon="fa-regular fa-user" />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #45454a;
  height: 50px;
  color: white;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  height: 25px;
}
.logos {
  height: 100%;
  display: flex;
  align-items: center;
}
.vertical-bar {
  width: 0px;
  height: 75%;
  border-left: 1px solid white;
  opacity: 25%;
  margin: 0px 15px;
}
.tenant-logo {
  margin: 0;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 400;
}
.buttons {
  font-size: 20px;
}
.icon {
  margin: 0px 7px;
}
</style>
