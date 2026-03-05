<template>
  <section class="employers">
    <section-heading>Работодатели</section-heading>
    <div class="filter-row">
      <div class="filter-tabs">
        <button
          v-for="t in allTypes"
          :key="t"
          :class="['filter-tab', { active: selectedType === t }]"
          @click="selectedType = t"
        >
          {{ t }}
        </button>
      </div>
    </div>

    <div class="swiper-wrapper-outer">
      <Swiper
        v-if="filteredEmployers.length"
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :loop="filteredEmployers.length > 3"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }"
        navigation
        :pagination="{ clickable: true }"
        class="employers-swiper"
      >
        <SwiperSlide
          v-for="(employer, i) in filteredEmployers"
          :key="i"
          class="employer-slide"
        >
          <a
            :href="employer.link"
            target="_blank"
            class="employer-card"
          >
            <div class="logo-wrap">
              <ImageWithSkeleton
                wrap-class="employer-skeleton-wrap"
                img-class="employer-logo"
                :src="employer.logo"
                :alt="employer.alt"
              />
            </div>
            <span class="employer-name">{{ employer.alt }}</span>
            <span class="employer-type">{{ employer.type }}</span>
          </a>
        </SwiperSlide>
      </Swiper>

      <div
        v-else
        class="no-employers"
      >
        <p>Нет компаний в выбранной категории</p>
      </div>
    </div>

    <button
      class="employers-btn"
      @click="$router.push('/registration/participant')"
    >
      Приду
    </button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionHeading from "@/shared/SectionHeading.vue";
import ImageWithSkeleton from "@/shared/ImageWithSkeleton.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

const selectedType = ref("Все");
const types = ["IT", "Производство", "Финансы"];
const allTypes = ["Все", ...types];

const filteredEmployers = computed(() => {
  if (selectedType.value === "Все") return employers.value;
  return employers.value.filter((e) => e.type === selectedType.value);
});
</script>

<style scoped>
.employers {
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.filter-row {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 8px 20px;
  border: 2px solid #e0e3ec;
  border-radius: 24px;
  background: white;
  color: #5a6482;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
}

.filter-tab:hover {
  border-color: #2e355c;
  color: #2e355c;
}

.filter-tab.active {
  background: #2e355c;
  border-color: #2e355c;
  color: white;
}

.swiper-wrapper-outer {
  position: relative;
  padding: 0 50px;
}

:deep(.swiper) {
  padding: 10px 0 50px;
}

.employer-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.employer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 28px 16px 20px;
  background: white;
  border-radius: 16px;
  border: 1px solid #eaedf5;
  transition: all 0.3s ease;
  text-decoration: none;
  width: 100%;
  min-height: 160px;
  box-shadow: 0 2px 8px rgba(46, 53, 92, 0.04);
}

.employer-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(46, 53, 92, 0.12);
  border-color: #2e355c;
}

.logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 65px;
  height: 70px;
  width: 100%;
}

.employer-skeleton-wrap {
  min-height: 50px;
  min-width: 80px;
}

.employer-skeleton-wrap :deep(.img-skeleton-img) {
  max-height: 65px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.3s;
}

.employer-card:hover .employer-skeleton-wrap :deep(.img-skeleton-img) {
  transform: scale(1.08);
}

.employer-logo {
  max-height: 65px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.3s;
}

.employer-card:hover .employer-logo {
  transform: scale(1.08);
}

.employer-name {
  font-size: 15px;
  color: #2e355c;
  font-weight: 600;
}

.employer-type {
  font-size: 12px;
  color: #8892a8;
  background: #f0f2f8;
  padding: 3px 12px;
  border-radius: 12px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #2e355c;
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #2e355c;
  color: white;
  box-shadow: 0 4px 16px rgba(46, 53, 92, 0.25);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 18px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #d5d9e4;
  opacity: 1;
  transition: all 0.3s;
}

:deep(.swiper-pagination-bullet-active) {
  background: #2e355c;
  width: 28px;
  border-radius: 5px;
}

.no-employers {
  padding: 60px 20px;
  color: #8892a8;
  font-size: 16px;
  text-align: center;
}

.employers-btn {
  display: block;
  margin: 24px auto 0;
  background: #2e355c;
  color: #fff;
  border: none;
  padding: 14px 48px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 0.5px;
}

.employers-btn:hover {
  background: #6c1fb8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 31, 184, 0.3);
}

@media (max-width: 768px) {
  .employers {
    padding: 40px 16px;
  }

  .filter-row {
    justify-content: center;
  }

  .filter-tabs {
    gap: 6px;
  }

  .filter-tab {
    padding: 6px 14px;
    font-size: 13px;
  }

  .swiper-wrapper-outer {
    padding: 0 10px;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 36px;
    height: 36px;
  }

  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    font-size: 14px;
  }

  .employer-card {
    padding: 18px 12px 14px;
    min-height: 130px;
  }

  .employer-logo {
    max-height: 50px;
    max-width: 110px;
  }

  .employers-btn {
    font-size: 16px;
    padding: 12px 36px;
  }
}

@media (max-width: 480px) {
  .employers {
    padding: 24px 12px;
  }

  .filter-tab {
    padding: 5px 12px;
    font-size: 12px;
  }

  .swiper-wrapper-outer {
    padding: 0;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }

  .employer-card {
    padding: 14px 10px 12px;
    min-height: 110px;
    gap: 6px;
  }

  .logo-wrap {
    height: 50px;
  }

  .employer-logo {
    max-height: 40px;
    max-width: 90px;
  }

  .employer-name {
    font-size: 13px;
  }

  .employer-type {
    font-size: 11px;
  }

  .employers-btn {
    font-size: 14px;
    padding: 10px 28px;
  }
}
</style>
