<template>
  <section class="infos">
    <div class="container">
      <div class="why-particip">
        <section-heading>Почему стоит принять участие?</section-heading>
        <p class="why-participate-title">
          Даст возможность познакомиться и пообщаться с людьми, чьи интересы и
          увлечения близки к моим собственным. Также набраться больше опыта.
        </p>
      </div>

      <div class="benefits">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="benefit"
        >
          <ImageWithSkeleton
            :src="benefit.icon"
            :alt="benefit.text"
            wrap-class="benefit-icon-wrap"
            img-class="benefit-icon"
          />
          <p>{{ benefit.text }}</p>
        </div>
      </div>

      <ImageWithSkeleton
        :src="dogImg"
        alt=""
        wrap-class="dog-wrap"
        img-class="dog-img"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/shared/SectionHeading.vue";
import ImageWithSkeleton from "@/shared/ImageWithSkeleton.vue";
import workIcon from "@/assets/images/icons/work-icon.svg";
import partyIcon from "@/assets/images/icons/party-icon.svg";
import userIcon from "@/assets/images/icons/user.svg";
import likeIcon from "@/assets/images/icons/like.svg";
import dogImg from "@/assets/images/icons/dog.svg";

const benefits = [
  { icon: workIcon, text: "Работа" },
  { icon: partyIcon, text: "Тусовка" },
  { icon: userIcon, text: "Полезно" },
  { icon: likeIcon, text: "Бесплатно" },
];
</script>

<style scoped>
.dog-img {
  display: block;
}

.infos {
  position: relative;
  max-width: 1200px;
  text-align: center;
  height: auto;
  box-sizing: border-box;
  border: 20px solid rgba(31, 184, 147, 0.17);
  background: rgba(255, 255, 255, 0.3);
  margin: 80px auto;
  padding: 40px 40px;
  border-radius: 16px;
}

.why-particip {
  flex: 1 1 45%;
  margin-top: 40px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

.why-participate-title {
  margin-top: 20px;
  color: #000;
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  position: relative;
  z-index: 3;
}

.benefits {
  margin-top: 40px;
  flex: 1 1 45%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.benefit {
  text-align: center;
}

.benefit-icon-wrap {
  min-height: 44px;
  min-width: 44px;
  max-width: 75px;
  margin: 0 auto 8px;
}

.benefit-icon-wrap :deep(.img-skeleton-img) {
  width: 75px;
  height: auto;
}

.dog-wrap {
  position: absolute;
  right: 0;
  bottom: -250px;
  min-height: 60px;
  min-width: 60px;
}

.dog-wrap :deep(.img-skeleton-img) {
  display: block;
}

.benefit p {
  color: rgb(90, 100, 130);
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

@media (max-width: 1346px) {
  .dog-img {
    display: none;
  }
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .infos {
    border: none;
  }

  .benefits {
    flex: 1 1 100%;
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
    height: auto;
    box-sizing: border-box;
    border: 5px solid rgba(31, 184, 147, 0.17);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  .benefits .benefit {
    margin: 16px 24px;
  }

  .why-participate-title {
    display: none;
    font-size: 18px;
  }

  .benefit p {
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .benefits {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .benefit-icon-wrap {
    min-height: 28px;
    min-width: 28px;
    max-width: 32px;
  }

  .benefit-icon-wrap :deep(.img-skeleton-img) {
    width: 32px;
  }

  .benefit p {
    font-size: 15px;
  }
}
</style>
