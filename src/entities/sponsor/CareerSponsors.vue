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
  gap: 30px;
  flex-wrap: wrap;
}

.sponsor-wrap {
  min-height: 50px;
  min-width: 80px;
}

.sponsor-wrap :deep(.img-skeleton-img) {
  max-height: 60px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.sponsor:hover .sponsor-wrap :deep(.img-skeleton-img) {
  transform: scale(1.1);
}

/* планшет */
@media (max-width: 1024px) {
  .sponsors-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

/* телефон */
@media (max-width: 750px) {
  .sponsors-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
  }

  .sponsor-wrap :deep(.img-skeleton-img) {
    max-height: 50px;
  }
}
</style>
