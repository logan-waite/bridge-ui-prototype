<script setup lang="ts">
import oceanxLogoUrl from "@/assets/oceanx-logo.png";
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const showUserMenu = ref(false);

function goToNotifications() {
  router.push({
    name: "notifications",
  });
}
</script>

<template>
  <header>
    <div class="logos">
      <img :src="oceanxLogoUrl" alt="oceanx logo" />
      <span class="vertical-bar"></span>
      <h1 class="tenant-logo">[Your Logo Here]</h1>
    </div>
    <div class="buttons">
      <FontAwesomeLayers
        full-width
        class="icon fa-2x"
        @click="goToNotifications"
      >
        <FontAwesomeIcon icon="fa-regular fa-bell" />
        <FontAwesomeLayersText
          counter
          value="6"
          position="top-right"
          style="font-size: 40px"
        />
      </FontAwesomeLayers>
      <FontAwesomeIcon
        class="icon"
        icon="fa-regular fa-user"
        @click="
          () => {
            showUserMenu = true;
          }
        "
      />
    </div>
    <div class="user-menu-wrapper" v-if="showUserMenu">
      <div class="button-cover">
        <FontAwesomeIcon
          class="icon"
          icon="fa-regular fa-user"
          @click="
            () => {
              showUserMenu = false;
            }
          "
        />
      </div>
      <div class="user-menu">
        <RouterLink :to="{ name: 'account' }">Account</RouterLink>
        <RouterLink :to="{ name: 'settings' }">Settings</RouterLink>
        <RouterLink :to="{ name: 'help' }">Help</RouterLink>
        <span>Log Out</span>
      </div>
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
  width: 300px; /* Just for keeping the text on one line in Safari */
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.icon {
  cursor: pointer;
  font-size: 25px;
  padding: 10px;
}
.user-menu-wrapper {
  position: absolute;
  right: 10px;
  top: 5px;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.user-menu {
  display: flex;
  flex-direction: column;
  color: black;
  /* border: 1px solid #7a7a7a; */
  min-width: 150px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0px 3px 3px #bbb;
  background-color: white;
  margin-top: -1px;
}
.user-menu a,
.user-menu span {
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  color: black;
}

.user-menu span:hover,
.user-menu a:hover {
  background-color: lightgrey;
}

.button-cover .icon {
  background-color: white;
  color: #45454a;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
