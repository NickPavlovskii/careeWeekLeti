<template>
  <v-app>
    <!-- Если используешь именованные вьюхи, можно добавить header -->


    <v-main>
      <!-- Здесь рендерится содержимое по текущему маршруту -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
// Не нужно импортировать CareerMainPage — Vue Router сам подключит нужный компонент
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 0px;
  display: flex;
  align-items: center;
}
</style>
