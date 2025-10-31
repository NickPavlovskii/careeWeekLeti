<template>
  <section class="details">
    <h2 class="details-title">ПОДРОБНЕЕ</h2>

    <div class="qr-codes">
      <div v-for="(qr, index) in qrCodes" :key="index" class="qr-card">
        <img :src="qr" alt="QR code" />
      </div>
    </div>

    <button
      @click="$router.push('/registration/employer')"
      class="details-btn"
    >
      Заявка на участие работодателей
    </button>

    <DotsBox />
  </section>
</template>

<script setup>
import qr1 from "@/assets/images/icons/qr1.png";
import qr2 from "@/assets/images/icons/qr2.png";
import DotsBox from "../../shared/DotsBox.vue";

const qrCodes = [qr1, qr2];
</script>

<style scoped>
.details {
  text-align: center;
  margin: 60px auto;
}

.details-title {
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: 600;
  color: #6c1fb8;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.qr-codes {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.qr-card {
  width: 340px;
  height: 340px;
  background: #eaf7f5;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.qr-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

.qr-card img {
  width: 320px;
  height: 320px;
  object-fit: contain;
}

.details-btn {
  background: #333;
  width: 400px;
  height: 60px;

  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.details-btn:hover {
  background: #555;
}

.details-btn:active {
  background: #222;
}

/* Адаптив */
@media (max-width: 700px) {
  .details {
    display: none;
  }
}
</style>
