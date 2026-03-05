<template>
  <div class="section-heading">
    <div class="center-wrapper">
      <div class="heading-box">
        <h2><slot>{{ title }}</slot></h2>
      </div>
      <div class="heading-bg" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
});
</script>

<style scoped>
.section-heading {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.center-wrapper {
  position: relative;
}

.heading-box {
  position: relative;
  text-align: center;
  box-sizing: border-box;
  border: 4px solid rgb(48, 48, 49);
  border-radius: 16px;
  background: rgb(255, 255, 255);
  padding: 24px 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading-bg {
  position: absolute;
  top: 10px;
  left: -5px;
  right: 10px;
  bottom: -10px;
  border-radius: 16px;
  background: rgb(113, 168, 148);
  z-index: 1;
}

.heading-box h2 {
  color: rgb(90, 100, 130);
  font-family: "Work Sans", sans-serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  margin: 0;
}

@media (max-width: 768px) {
  .heading-box {
    padding: 20px 28px;
  }
  .heading-box h2 {
    font-size: 26px;
  }
}

@media (max-width: 480px) {
  .section-heading {
    margin-bottom: 24px;
  }
  .heading-box {
    padding: 16px 20px;
    border-width: 2px;
  }
  .heading-box h2 {
    font-size: 22px;
  }
}
</style>
