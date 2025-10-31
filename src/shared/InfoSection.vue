<template>
  <section id="location" class="info">
    <div class="container">
      <div class="branding">
        <p class="eyebrow">ПРОСТО</p>
        <h1 class="title">Студенческая карьерная неделя</h1>
        <p class="subtitle">Начать карьеру легко.</p>

        <div class="cta-buttons">
          <div class="cta cta-primary">
            <p class="cta-subtitle">14,15 И 16 МАЯ В 11:00</p>
          </div>
          <div class="cta cta-primary cta-primary-subtitle">
            <p class="cta-subtitle">ПРОСТО НА КАРПОВКЕ</p>
          </div>
          <button @click="$router.push('/registration')" class="cta cta-outline reg" >
            <p>Зарегистрироваться</p>
          </button>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="../assets/images/icons/logo.png"
          alt="Студенческая Карьерная Неделя"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800&display=swap");

.cta-outline:hover {
  background-color: rgba(108, 31, 184, 0.15);
}

.cta-outline:active {
  background-color: rgba(108, 31, 184, 0.3);
}
.info {
  transition: background-color 0.4s ease;
}

.info.active {
  background-color: rgba(108, 31, 184, 0.15);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  text-align: center;
  margin-left: 76px;
  margin-right: 46px;
  flex-wrap: wrap;
}

.branding {
  max-width: 50%;
  text-align: left;
  margin-bottom: 30px;
}

.eyebrow {
  display: none;
}

.title {
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 10px;
  font-size: 36px;
  text-align: center;
}

.subtitle {
  font-size: 40px;
  color: #6b7280;
  margin-bottom: 20px;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cta {
  width: 370px;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-align: center;
}

.cta p {
  font-size: 22px;
}

.cta-primary {
  width: 370px;
  background-color: rgba(108, 31, 184, 0.64);
  color: white;
}
.cta-primary-subtitle {
  margin-left: 50px;
}
.cta-subtitle {
  font-size: 22px;
}
.cta-outline {
  width: 370px;
  border: 2px solid black;
  border-radius: 16px;
  color: #5a6482;
  background: #fff;
}

.reg {
  display: none;
}

.hero-image img {
  max-width: 470px;
  width: 100%;
  height: auto;
  margin-right: 40px;
}

/* Мобильные устройства */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
  .reg {
    display: block;
  }
  .branding {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .cta-primary-subtitle {
    margin-left: 0px;
  }
  .cta {
    width: 310px;
  }

  .cta p {
    font-size: 16px;
  }

  .cta-buttons {
    align-items: center;
  }

  .reg {
    display: block;
  }

  .hero-image {
    display: none;
  }

  .title {
    font-size: 36px;
  }

  .subtitle {
    text-align: center;
    font-size: 25px;
  }

  .cta {
    font-size: 16px;
  }

  .eyebrow {
    display: block;
    color: #a078e3;
    font-weight: 700;
    font-size: 16px;
    margin-top: 28px;
    margin-left: 138px;
  }
  .cta-buttons {
    align-items: center;
  }
}

/* Для больших экранов */
@media (min-width: 768px) {
  .title {
    font-size: 48px;
  }

  .subtitle {
    font-size: 24px;
  }

  .cta p {
    font-size: 20px;
  }
}
</style>
