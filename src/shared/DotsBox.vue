<template>
  <div class="dots-box">
    <div class="dots-line top"></div>
    <div class="dots-line"></div>
    <div class="dots-line"></div>
    <div class="dots-line bottom"></div>
  </div>
</template>

<style scoped>
.dots-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Линия из точек */
.dots-line {
  margin: 12px auto 0;
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(
    to right,
    #ccc 0,
    #ccc 2px,
    transparent 2px,
    transparent 8px
  );
  opacity: 0.7;
}

.dots-line.top {
  margin-top: 50px;
}

.dots-line.bottom {
  margin-bottom: 20px;
}
</style>
