<template>
  <div class="container">
    <div class="hall-map">
      <header class="hall-map-header">
        <div class="section-title">
          <h2>Схема зала</h2>
          <v-switch
            v-model="isInteractive"
            inset
            color="success"
            :label="modeSwitchLabel"
            hide-details
            class="hall-map-switch"
          />
        </div>
      </header>

      <interactive-hall-svg
        v-if="isInteractive" 
        @select-zone="onSelectZone" 
      />

      <div
        v-else
        class="static-image"
      >
        <ImageWithSkeleton
          alt="Схема зала"
          wrap-class="static-image-wrap"
          img-class="static-image-img"
          :src="planImage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import InteractiveHallSvg from "./InteractiveHallSvg.vue";
import ImageWithSkeleton from "@/shared/ImageWithSkeleton.vue";
import planImage from "@/assets/images/icons/plan.png";

const isInteractive = ref(false);

const modeSwitchLabel = computed(() =>
  isInteractive.value ? "Интерактивный режим" : "Картинка схемы"
);

function onSelectZone(zone) {
  console.log("Selected zone:", zone);
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.hall-map {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.hall-map-header {
  text-align: center;
  margin-bottom: 32px;
}

.hall-map-title-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
}

.hall-map-title {
  position: relative;
  z-index: 2;
  display: block;
  margin: 0;
  padding: 14px 36px;
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 600;
  color: #2e355c;
  background: #fff;
  border: 2px solid #2e355c;
  border-radius: 14px;
  font-family: "Work Sans", sans-serif;
  box-sizing: border-box;
}

.hall-map-title-shadow {
  position: absolute;
  z-index: 1;
  left: 8px;
  right: 8px;
  bottom: -8px;
  height: 100%;
  background: rgba(113, 168, 148, 0.45);
  border-radius: 14px;
}

.hall-map-subtitle {
  margin: 0 0 20px;
  font-size: clamp(14px, 2vw, 17px);
  color: #8892a8;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.hall-map-switch-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: #f8f9fd;
  border-radius: 999px;
  border: 1px solid #e8ecf4;
}

.hall-map-switch {
  margin: 0;
}

.hall-map-switch :deep(.v-label) {
  font-size: 14px;
  color: #2e355c;
  font-weight: 500;
}

.static-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 20px;
}

.static-image-wrap {
  min-height: 400px;
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
}

.static-image-wrap :deep(.img-skeleton-img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.section-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #000;
  margin-bottom: 40px;
  font-family: "Work Sans", sans-serif;
}
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .hall-map-header {
    margin-bottom: 24px;
  }

  .hall-map-title {
    padding: 12px 24px;
    font-size: 20px;
  }

  .hall-map-switch-wrap {
    padding: 8px 16px;
  }

  .static-image {
    padding: 10px;
    border-radius: 8px;
  }
}
</style>
