<template>
  <transition name="fade">
    <div class="notification" :class="type">
      <span>{{ message }}</span>
      <button class="close" @click="$emit('close')">&times;</button>
    </div>
  </transition>
</template>

<script setup>

import { defineProps } from "vue";
defineProps({
  type: { type: String, default: "success" }, // success | error
  message: { type: String, required: true },
});
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.notification.success {
  background-color: #2f8a63;
}
.notification.error {
  background-color: #d9534f;
}
.close {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
