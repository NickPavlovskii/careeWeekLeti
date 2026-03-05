<template>
  <div class="registration-select">
    <h1 class="title">
      Выберите, для кого регистрация
    </h1>

    <div class="options">
      <div class="card">
        <ImageWithSkeleton
          :src="participantImg"
          alt="Участники"
          wrap-class="card-img-wrap"
          img-class="card-img"
        />
        <h2>Участники</h2>
        <button
          class="btn"
          @click="$router.push('/registration/participant')"
        >
          Регистрация участника
        </button>
      </div>

      <div class="card">
        <ImageWithSkeleton
          :src="employerImg"
          alt="Работодатели"
          wrap-class="card-img-wrap"
          img-class="card-img"
        />
        <h2>Работодатели</h2>
        <button
          class="btn"
          @click="$router.push('/registration/employer')"
        >
          Регистрация работодателя
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageWithSkeleton from "@/shared/ImageWithSkeleton.vue";
import participantImg from "@/assets/images/participants/ImgParticipantReg.png";
import employerImg from "@/assets/images/employers/ImgEmployerReg.png";
</script>

<style scoped>
.registration-select {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.options {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(12, 10, 10, 0.1);
  padding: 20px;
  width: 300px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-wrap {
  min-height: 200px;
  border-radius: 12px;
}

.card-img-wrap :deep(.img-skeleton-img) {
  width: 100%;
  border-radius: 11px;
}

.card h2 {
  margin-top: 15px;
  font-size: 18px;
}

.btn {
  margin-top: 15px;
  background: #0662cc;
  color: white;
  border: none;
  padding: 10px 17px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}


.btn:hover {
  background: #005fd1;
}
</style>
