<template>
  <section class="container">
    <div class="section">
      <h2 class="section-title">Площадки проведения</h2>
      <div class="lecture-section">
        <div class="lecture-block">
          <!-- Лектория 1 -->
          <div class="lecture-item">
            <div class="dots"></div>
            <div class="lecture-image-wrapper">
              <div class="lecture-bg"></div>
              <img
                src="@/assets/images/lectures/lecture1.png"
                alt="Лектория 1"
                class="lecture-image"
              />
            </div>
            <p class="lecture-text">Лектория 1</p>
          </div>

          <!-- Лектория 2 -->
          <div class="lecture-item lecture-item--reverse">
            <div class="lecture-image-wrapper">
              <div class="lecture-bg"></div>
              <img
                src="@/assets/images/lectures/lecture2.png"
                alt="Лектория 2"
                class="lecture-image"
              />
            </div>
            <p class="lecture-text">Лектория 2</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.lecture-section {
  background: #ffffff;
  border: 8px solid #cceae3;
  border-radius: 8px;
  padding: 40px;
  margin: 40px auto;
}

.dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  height: 150px;
  background-image: radial-gradient(#c9d2db 2px, transparent 2px);
  background-size: 20px 20px;
  background-repeat: repeat;
  opacity: 0.8;
  z-index: 0;
  transform: translate(-30px, -30px);
}

.dots::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: white;
  z-index: 1;
}

.section-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #000;
  margin-bottom: 40px;
  font-family: "Work Sans", sans-serif;
}

.lecture-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: flex-start;
}

.lecture-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  position: relative;
}

.lecture-item--reverse {
  flex-direction: row-reverse;
}

.lecture-text {
  font-size: 36px;
  font-weight: 700;
  color: #000;
  font-family: "Work Sans", sans-serif;
}

.lecture-image-wrapper {
  position: relative;
  display: inline-block;
  max-width: 450px;
  flex-shrink: 0;
}

.lecture-bg {
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  background-color: #6ea797;
  border-radius: 8px;
  z-index: 1;
}

.lecture-image {
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
}

.lecture-item--reverse .lecture-bg {
  left: auto;
  right: -10px;
}

/* ——————— АДАПТИВНОСТЬ ——————— */

@media (max-width: 1392px) {
  .section {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
}

@media (max-width: 1001px) {
  .section {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
}

/* планшеты */
@media (max-width: 992px) {
  .section {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .lecture-section {
    padding: 30px;
  }

  .section-title {
    font-size: 30px;
  }

  .lecture-text {
    font-size: 28px;
  }

  .lecture-item {
    gap: 24px;
  }

  .lecture-image-wrapper {
    max-width: 350px;
  }
}

/* мобильные */
@media (max-width: 800px) {
  .lecture-item,
  .lecture-item--reverse {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .lecture-text {
    font-size: 24px;
    margin-top: 16px;
  }

  .lecture-image-wrapper {
    width: 90%;
    max-width: 320px;
  }

  .dots {
    width: 180px;
    height: 100px;
    transform: translate(-20px, -20px);
  }
}

/* маленькие телефоны */
@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }

  .lecture-text {
    font-size: 20px;
  }

  .lecture-section {
    padding: 20px;
    border-width: 6px;
  }

  .dots {
    width: 140px;
    height: 80px;
    background-size: 16px 16px;
  }
}
</style>
