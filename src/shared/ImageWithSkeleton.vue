<template>
  <div :class="['img-skeleton-wrap', wrapClass]">
    <div
      v-if="!loaded"
      class="skeleton-pulse"
      aria-hidden="true"
    />
    <img
      decoding="async"  
      :src="src"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :class="['img-skeleton-img', imgClass, { loaded }]"
      @load="onLoad"
      @error="onError"
    >
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  src: { type: [String, Object], required: true },
  alt: { type: String, default: "" },
  wrapClass: { type: [String, Object, Array], default: "" },
  imgClass: { type: [String, Object, Array], default: "" },
  /** false = lazy (для карт/лекторий ниже экрана), true = загружать сразу */
  eager: { type: Boolean, default: false },
});

const loaded = ref(false);
let fallbackTimer = null;

function onLoad() {
  loaded.value = true;
  clearFallback();
}

function onError() {
  loaded.value = true;
  clearFallback();
}

function clearFallback() {
  if (fallbackTimer) {
    clearTimeout(fallbackTimer);
    fallbackTimer = null;
  }
}

onMounted(() => {
  fallbackTimer = setTimeout(() => {
    loaded.value = true;
    fallbackTimer = null;
  }, 6000);
});

onUnmounted(clearFallback);
</script>

<style scoped>
.img-skeleton-wrap {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: inherit;
}

.skeleton-pulse {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e8ecf2 25%,
    #f3f5f9 50%,
    #e8ecf2 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.img-skeleton-img {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.img-skeleton-img.loaded {
  opacity: 1;
}
</style>
