<template>
  <section class="employers">
    <h2 class="employers-title">Работодатели</h2>

    <!-- Фильтр -->
    <div class="filter">
      <v-select
        v-model="selectedType"
        :items="['Все', ...types]"
        variant="outlined"
        density="comfortable"
        hide-details
        class="filter-select"
      />
    </div>

    <!-- Слайдер -->
    <Swiper
      v-if="filteredEmployers.length"
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      navigation
      pagination
      autoplay
      class="employers-swiper"
    >
      <SwiperSlide
        v-for="employer in filteredEmployers"
        :key="employer.alt"
        class="employer-slide"
      >
        <a
          v-for="(company, i) in companies"
          :key="i"
          :href="company.link"
          target="_blank"
        >
          <img :src="company.logo" :alt="company.alt" />
        </a>
      </SwiperSlide>
    </Swiper>

    <button class="employers-btn">Приду!</button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Данные напрямую из JS
import employersData from "../data/companies.js";

const selectedType = ref("Все");
const types = ["IT", "Производство", "Образование"];
const employers = ref(employersData);

const filteredEmployers = computed(() => {
  console.log(employers.value);
  if (selectedType.value === "Все") return employers.value;
  return employers.value.filter((e) => e.type === selectedType.value);
});
</script>

<style scoped>
.employers {
  text-align: center;
  padding: 40px 20px;
}

/* Стрелки */
.swiper-button-next,
.swiper-button-prev {
  color: #000668;
  width: 44px;
  height: 44px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper) {
  height: 200px;
}
/* Точки (pagination) */
:deep(.swiper-pagination) {
  margin-top: 70px;
}

:deep(.v-input__control) {
  background-color: #bdc6d2;
}

:deep(.v-select--active-menu) {
  color: #bdc6d2;
}

:deep(.v-icon) {
  opacity: var(--v-medium-emphasis-opacity);
  color: white;
}
:deep(.swiper-pagination-bullet-active) {
  background: #5a6482;
}
:deep(.v-select__selection-text) {
  color: white;
}
.employers-title {
  font-size: 40px;
  font-weight: 600;
  color: #2e355c;
  border: 2px solid #2e355c;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.filter {
  width: 150px;
}

.filter-select {
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  background: #f9f9f9;
  cursor: pointer;
}

.employer-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.employer-logo {
  max-width: 120px;
  max-height: 80px;
  object-fit: contain;
}

.employers-btn {
  margin-top: 30px;
  background: #2e2e2e;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  width: 200px;
}
.employers-btn:hover {
  background: #6c1fb8;
}
</style>
