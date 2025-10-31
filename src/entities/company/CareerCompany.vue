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
        v-for="(employer, i) in filteredEmployers"
        :key="i"
        class="employer-slide"
      >
        <a :href="employer.link" target="_blank">
          <img :src="employer.logo" :alt="employer.alt" class="employer-logo" />
        </a>
      </SwiperSlide>
    </Swiper>

    <button
      @click="$router.push('/registration/participant')"
      class="employers-btn"
    >
      Приду
    </button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Список компаний
const employers = ref([
  {
    logo: new URL("@/assets/images/companies/baltika.svg", import.meta.url)
      .href,
    alt: "Балтика",
    type: "Производство",
    link: "https://baltika.ru/",
  },
  {
    logo: new URL("@/assets/images/companies/bee-pitron.svg", import.meta.url)
      .href,
    alt: "Bee Pitron",
    type: "IT",
    link: "https://beepitron.com/",
  },
  {
    logo: new URL("@/assets/images/companies/sbank.svg", import.meta.url).href,
    alt: "Совкомбанк",
    type: "Финансы",
    link: "https://sovcombank.ru/",
  },
  {
    logo: new URL("@/assets/images/companies/stc.svg", import.meta.url).href,
    alt: "СТЦ",
    type: "IT",
    link: "https://stcgroup.ru/",
  },
  {
    logo: new URL("@/assets/images/companies/yadro.svg", import.meta.url).href,
    alt: "Ядро",
    type: "IT",
    link: "https://yadro.com/",
  },
  {
    logo: new URL("@/assets/images/companies/zvezda.svg", import.meta.url).href,
    alt: "Звезда",
    type: "Производство",
    link: "https://zvezda.ru/",
  },
]);

// 🔽 Фильтр
const selectedType = ref("Все");
const types = ["IT", "Производство", "Образование"];

const filteredEmployers = computed(() => {
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
  max-height: 80px;
  object-fit: contain;
  transition: transform 0.3s;
}

.employer-logo:hover {
  transform: scale(1.1);
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

@media (max-width: 768px) {
  .employers {
    padding: 20px 10px;
  }

  .employers-title {
    font-size: 28px;
    padding: 8px 20px;
  }

  .filter {
    width: 120px;
    margin-bottom: 20px;
  }

  :deep(.swiper) {
    height: 160px;
  }

  .employer-logo {
    max-height: 60px;
  }

  .employers-btn {
    font-size: 16px;
    width: 160px;
    padding: 10px 20px;
  }

  /* Уменьшаем стрелки свайпера */
  .swiper-button-next,
  .swiper-button-prev {
    width: 32px;
    height: 32px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
}

/* Для маленьких телефонов */
@media (max-width: 480px) {
  .employers-title {
    font-size: 22px;
    border-width: 1.5px;
    padding: 6px 16px;
  }

  .employer-logo {
    max-height: 30px;
  }

  :deep(.swiper) {
    height: 140px;
  }

  .employers-btn {
    font-size: 14px;
    width: 140px;
    padding: 8px 16px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none; /* можно скрыть стрелки на телефоне */
  }

  :deep(.swiper-pagination) {
    margin-top: 30px;
  }
}
</style>
