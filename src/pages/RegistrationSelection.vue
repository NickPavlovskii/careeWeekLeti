<template>
  <div class="registration-select">
    <h1 class="title">Выберите, для кого регистрация</h1>

    <div class="options">
      <div class="card">
        <img src="@/assets/images/ImgParticipantReg.png" alt="Участники" />
        <h2>Участники</h2>
        <button @click="$router.push('/registration/participant/step-1')" class="btn">
          Регистрация участника
        </button>
      </div>

      <div class="card">
        <img src="@/assets/images/ImgEmployerReg.png" alt="Работодатели" />
        <h2>Работодатели</h2>
        <button @click="$router.push('/registration/employer/step-1')" class="btn">
          Регистрация работодателя
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Ничего сложного не нужно — просто переход по клику
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
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 20px;
  width: 300px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  border-radius: 12px;
}

.card h2 {
  margin-top: 15px;
  font-size: 20px;
}

.btn {
  margin-top: 15px;
  background: #0077ff;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #005fd1;
}
</style>
