<template>
  <section class="infos">
    <div class="container">
      <div class="why-particip">
        <div class="why-participate-cont">
          <div class="why-participate">
            <h2>Почему стоит принять участие?</h2>
          </div>
          <div class="why-bg"></div>
        </div>
        <p class="why-participate-title">
          Даст возможность познакомиться и пообщаться с людьми, чьи интересы и
          увлечения близки к моим собственным. Также набраться больше опыта.
        </p>
      </div>

      <div class="benefits">
        <div class="benefit" v-for="(benefit, index) in benefits" :key="index">
          <img :src="benefit.icon" :alt="benefit.text" />
          <p>{{ benefit.text }}</p>
        </div>
      </div>

      <img :src="dogImg" class="dog-img" />
    </div>
  </section>
</template>

<script setup>
import workIcon from "@/assets/images/work-icon.svg";
import partyIcon from "@/assets/images/party-icon.svg";
import userIcon from "@/assets/images/user.svg";
import likeIcon from "@/assets/images/like.svg";
import dogImg from "@/assets/images/dog.svg";

const benefits = [
  { icon: workIcon, text: "Работа" },
  { icon: partyIcon, text: "Тусовка" },
  { icon: userIcon, text: "Полезно" },
  { icon: likeIcon, text: "Бесплатно" },
];
</script>

<style scoped>
.dog-img {
  position: absolute;
  right: 0px;
  bottom: -250px;
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

.why-participate-cont {
  min-width: 300px;
  position: relative;
}

.why-participate {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  border: 4px solid rgb(48, 48, 49);
  border-radius: 16px;
  background: #fff;
  padding: 24px;
  z-index: 2;
}

.why-bg {
  position: absolute;
  top: 10px;
  left: 20px;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  background: rgb(113, 168, 148);
  z-index: 1;
}

.why-participate h2 {
  color: rgb(90, 100, 130);
  font-family: "Work Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
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
  flex: 1 1 45%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.benefit {
  text-align: center;
}

.benefit img {
  width: 100px;
  height: auto;
  margin-bottom: 12px;
}

.benefit p {
  color: rgb(90, 100, 130);
  font-family: "Work Sans", sans-serif;
  font-size: 28px;
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

  .why-participate-cont,
  .benefits {
    flex: 1 1 100%;
  }

  .why-bg {
    display: none;
  }

  .benefits {
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
    height: auto;
    box-sizing: border-box;
    border: 5px solid rgba(31, 184, 147, 0.17);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
  }

  .benefits .benefit {
    width: 100px;
    margin: 22px 65px;
  }

  .why-participate-title {
    display: none;
  }

  .why-participate h2 {
    font-size: 28px;
  }

  .why-participate-title {
    font-size: 18px;
  }

  .benefits {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefit p {
    font-size: 22px;
  }
}

@media (max-width: 600px) {
  .benefits {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .benefit img {
    width: 80px;
  }

  .benefit p {
    font-size: 20px;
  }
}
</style>
