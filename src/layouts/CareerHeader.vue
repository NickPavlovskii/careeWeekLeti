<template>
  <header class="header">
    <div class="container_header">
      <nav class="navbar" :class="{ open: menuOpen }">
        <ul class="nav-left">
          <li>
            <router-link to="/registration/participant" class="nav-link">
              Участвовать бесплатно
            </router-link>
          </li>
          <router-link to="/registration/employer" class="nav-link">
            Работодателям
          </router-link>
        </ul>
        <ul class="nav-right">
          <li>
            <a href="#" @click.prevent="scrollTo('partners')">Партнеры</a>
          </li>
          <li>
            <a href="#" @click.prevent="scrollTo('location')">Когда и где?</a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/icons/VK.svg" alt="VK" /></a>
          </li>
          <li><a href="#">Скачать программу</a></li>
        </ul>
      </nav>

      <!-- Бургер справа -->
      <div class="burger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    menuOpen.value = false; // закрываем бургер-меню после перехода
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.container_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

/* ===== Бургер ===== */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;
  margin-left: auto;
  z-index: 20;
}

.burger span {
  display: block;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}

.burger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ===== Навигация ===== */
.navbar {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.navbar ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar a {
  text-decoration: none;
  font-weight: 600;
  margin: 0 15px;
  color: #333;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #1fb893;
}

.nav-left a {
  color: #1fb893;
}

/* ===== Мобильные устройства ===== */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 0 20px;

    /* плавность */
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.4s ease;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .navbar.open {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
    padding: 20px;
  }

  .navbar ul {
    flex-direction: column;
    width: 100%;
  }

  .navbar li {
    margin: 12px 0;
  }

  .navbar a {
    margin: 0;
    font-size: 16px;
    display: block;
    padding: 8px 0;
    width: 100%;
    /* убрал полоски */
    border: none;
  }

  .navbar a:hover {
    color: #1fb893;
  }
}
</style>
