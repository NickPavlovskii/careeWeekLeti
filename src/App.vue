<template>
  <v-app>
    <v-main>
      <router-view />
      <Notification />
    </v-main>
  </v-app>
</template>

<script setup>
import Notification from "@/shared/NotificationMessage.vue";
</script>
