<template>
  <section
    id="partners"
    class="sponsors"
  >
    <div class="container">
      <div class="sponsors-logos">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          class="sponsor"
        >
          <ImageWithSkeleton
            wrap-class="sponsor-wrap"
            img-class="sponsor-img"
            :src="logo.src"
            :alt="logo.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageWithSkeleton from "@/shared/ImageWithSkeleton.vue";
import partner1 from '@/assets/images/partners/partner1.png';
import partner2 from '@/assets/images/partners/partner2.png';
import partner3 from '@/assets/images/partners/partner3.png';
import partner4 from '@/assets/images/partners/partner4.png';
import partner5 from '@/assets/images/partners/partner5.png';

const logos = [
  { src: partner1, alt: "Профсоюзный комитет" },
  { src: partner2, alt: "СОКТ" },
  { src: partner3, alt: "ПРОСТО" },
  { src: partner4, alt: "СКС Профсоюза" },
  { src: partner5, alt: "Общероссийский профсоюз образования" },
];
</script>

<style scoped>
.sponsors {
  padding: 40px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.sponsors-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1c1c1c;
}

.sponsors-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px 40px;
}

.sponsor {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  flex: 0 1 auto;
}

.sponsor-wrap {
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 72px;
  width: auto;
  max-width: 220px;
  min-width: 0;
  overflow: visible !important;
}

.sponsor-wrap :deep(.skeleton-pulse) {
  display: none;
}

.sponsor-wrap :deep(.img-skeleton-img) {
  width: auto !important;
  max-width: 100%;
  max-height: 64px;
  height: auto;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}

.sponsor:hover .sponsor-wrap :deep(.img-skeleton-img) {
  transform: scale(1.06);
}

@media (max-width: 1024px) {
  .sponsors-logos {
    gap: 24px 32px;
  }

  .sponsor,
  .sponsor-wrap {
    height: 64px;
  }

  .sponsor-wrap {
    max-width: 180px;
  }

  .sponsor-wrap :deep(.img-skeleton-img) {
    max-height: 56px;
  }
}

@media (max-width: 750px) {
  .sponsors-logos {
    gap: 20px 24px;
  }

  .sponsor,
  .sponsor-wrap {
    height: 56px;
  }

  .sponsor-wrap {
    max-width: 150px;
  }

  .sponsor-wrap :deep(.img-skeleton-img) {
    max-height: 48px;
  }
}
</style>
