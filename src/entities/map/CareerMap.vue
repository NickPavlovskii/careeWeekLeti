<template>
  <section class="map-section">
    <div class="container">
      <div class="why-participate-cont">
        <div class="center-wrapper">
          <div class="why-participate">
            <h2>Как нас найти</h2>
          </div>
          <div class="why-bg"></div>
        </div>

        <div class="map-wrapper">
          <img
            src="@/assets/images/map/map-icon-left.png"
            alt="Иллюстрация слева"
            class="side-image left-image"
          />
          <img
            src="@/assets/images/map/map-icon-right.png"
            alt="Иллюстрация справа"
            class="side-image right-image"
          />
          <img src="@/assets/images/map/map_exp.png" alt="" class="map-image" />
          <!-- <yandex-map
            :settings="mapSettings"
            style="width: 650px; height: 550px"
          >
            <ymap-marker
              :coords="[55.751244, 37.618423]"
              :properties="{ balloonContent: 'Т-Банк — Карьерная неделя' }"
            />
          </yandex-map> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { yandexMap, ymapMarker } from 'vue-yandex-maps'

// const mapSettings = {
//   location: {
//     center: [55.751244, 37.618423],
//     zoom: 15
//   },
//   controls: ['zoomControl', 'fullscreenControl']
// };
</script>

<style scoped>
.map-container {
  margin-top: 100px;
}

.map-section {
  padding: 20px 30px;
}
.center-wrapper {
  
}
.why-participate {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 4px solid rgb(48, 48, 49);
  border-radius: 16px;
  background: rgb(255, 255, 255);
  width: 559px;
  height: 164px;
  left: 212px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 24px;
  z-index: 2;
  top: 153px;
}

.why-bg {
  position: relative;
  margin-right: 30px;
  border-radius: 16px;
  width: 552px;
  height: 164px;
  left: 222px;
  bottom: 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 24px 16px;
  background: rgb(113, 168, 148);
}

.why-participate h2 {
  color: rgb(90, 100, 130);
  font-family: "Work Sans", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  text-align: center;
}

.map-wrapper {
  position: relative;
  width: 100%;
}

.side-image {
  position: absolute;
  top: 69%;
  transform: translateY(-50%);
  z-index: 2;
}

.left-image {
  left: -150px;
  top: 66.5%;
}

.right-image {
  right: -10px;
  top: 84%;
}

.map-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .why-participate {
    left: 100px;
  }

  .why-bg {
    left: 93px;
  }

}

/* Адаптив для планшетов */
@media (max-width: 768px) {
  .side-image {
    max-width: 50px;
  }

  .left-image {
    max-width: 190px;
    left: -40px;
  }

  .right-image {
    right: -40px;
  }

  .why-participate {
    left: 0px;
  }

  .why-bg {
    left: 0px;
  }
}

/* Адаптив для телефонов */
@media (max-width: 480px) {
  .left-image {
    max-width: 170px;
  }

  .right-image {
    right: 0px;
  }

  .why-participate {
    width: 360px;
    left: -30x;
  }

  .why-bg {
    width: 370px;
    left: -30x;
  }

  .map-image[data-v-006555fe] {
    width: 90%;
  }
}

/* Адаптив для телефонов */
@media (max-width: 360px) {
  .left-image {
    max-width: 170px;
  }

  .right-image {
    right: 0px;
  }

  .why-participate {
    width: 97%;
    left: -30x;
  }

  .why-bg {
    width: 100%;
    left: -30x;
  }

  .map-image[data-v-006555fe] {
    width: 90%;
  }
}
</style>
