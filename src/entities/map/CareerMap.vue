<template>
  <section class="map-section">
    <div class="container">
      <section-heading>Как нас найти</section-heading>
      <div class="map-wrapper">
        <img
          alt=""
          class="side-image left-image"
          :src="mapIconLeft"
        >
        <img
          alt=""
          class="side-image right-image"
          :src="mapIconRight"
        >
        <ImageWithSkeleton
          :src="mapExp"
          alt="Карта"
          wrap-class="map-image-wrap"
          img-class="map-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/shared/SectionHeading.vue";
import ImageWithSkeleton from "@/shared/ImageWithSkeleton.vue";
import mapIconLeft from "@/assets/images/map/map-icon-left.png";
import mapIconRight from "@/assets/images/map/map-icon-right.png";
import mapExp from "@/assets/images/map/map_exp.png";
</script>

<style scoped>
.map-section {
  padding: 40px 30px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.map-wrapper {
  position: relative;
  width: 100%;
}

.map-image-wrap {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.map-image-wrap :deep(.img-skeleton-img) {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.map-image-wrap :deep(.skeleton-pulse) {
  border-radius: 16px;
  min-height: 280px;
}

.side-image {
  position: absolute;
  transform: translateY(-50%);
  z-index: 2;
}

.left-image {
  left: -120px;
  top: 65%;
}

.right-image {
  right: -10px;
  top: 84%;
}

.map-image-wrap .map-image {
  width: 100%;
  border-radius: 16px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

@media (max-width: 1000px) {
  .left-image {
    left: -60px;
    max-width: 160px;
  }
}

@media (max-width: 768px) {
  .map-section {
    padding: 30px 16px;
  }

  .left-image {
    left: -30px;
    max-width: 120px;
  }

  .right-image {
    right: -20px;
    max-width: 60px;
  }
}

@media (max-width: 480px) {
  .left-image {
    max-width: 80px;
    left: -10px;
  }

  .right-image {
    max-width: 40px;
    right: -5px;
  }
}
</style>
