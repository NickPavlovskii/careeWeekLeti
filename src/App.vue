<template>
  <v-app class="app-root">
    <header class="app-header">
      <router-view name="header" />
    </header>
    <main class="app-main">
      <router-view />
      <Notification />
    </main>
  </v-app>
</template>

<script setup>
import Notification from "@/shared/NotificationMessage.vue";
</script>

<style>
html,
body {
  height: 100%;
  overflow: hidden !important;
  margin: 0;
}

#app {
  height: 100%;
  overflow: hidden;
}

.app-root.v-application {
  overflow: hidden;
}

.app-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.app-header {
  flex-shrink: 0;
  z-index: 100;
}

.app-main {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.app-main::-webkit-scrollbar {
  width: 6px;
  border-radius: 20px;
  padding-bottom: 10px;
}

.app-main::-webkit-scrollbar-track {
  border-radius: 20px;
}

.app-main::-webkit-scrollbar-thumb {
  background-color: rgba(31, 184, 147, 0.17);
  border-radius: 10px;
}

.app-main::-webkit-scrollbar-thumb:hover {
  background-color: rgb(113, 168, 148);
}

</style>
