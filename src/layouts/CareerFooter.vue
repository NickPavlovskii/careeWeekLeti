<template>
  <v-container class="footer-container" fluid>
    <!-- ===== Верхняя часть футера ===== -->
    <v-row class="footer-top" justify="space-between">
      <!-- Партнёры -->
      <v-col cols="12" md="4">
        <h3 class="footer-title">Партнёры</h3>
        <div class="sponsors-logos">
          <div class="sponsor" v-for="(logo, index) in logos" :key="index">
            <img :src="logo.src" :alt="logo.alt" />
          </div>
        </div>
      </v-col>

      <!-- Информация -->
      <v-col cols="12" md="3">
        <h3 class="footer-title">Информация</h3>
        <ul class="footer-links">
          <li><a href="#">Программа</a></li>
          <li><a href="#">Работодателям</a></li>
          <li><a href="#">Где нас найти?</a></li>
        </ul>
      </v-col>

      <!-- Контакты -->
      <v-col cols="12" md="4">
        <h3 class="footer-title">Контакты</h3>

        <div class="contact-block">
          <div class="contact-links">
            <a
              href="https://vk.com/prosto_spb"
              target="_blank"
              class="footer-link"
            >
              <v-icon icon="mdi-email-outline" size="20" class="mr-1" />
              profcomstudentov@mail.ru 
            </a>
            <a
              href="https://vk.com/profcomleti?from=groups"
              target="_blank"
              class="footer-link"
            >
              <svg
                width="5%"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>VK</title>
                <path
                  d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"
                />
              </svg>
              ВКонтакте
            </a>
            <br />
            <a
              href="https://t.me/profcomlive"
              target="_blank"
              class="footer-link"
            >
              <svg
              
                width="5%"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Telegram</title>
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                />
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <!-- ===== Нижняя полоса ===== -->
    <v-row class="footer-bottom" justify="space-between" align="center">
      <v-col cols="12" sm="6">
        <a href="#" class="footer-rules"
          >Правила молодежного пространства ПРОСТО</a
        >
      </v-col>

      <v-col cols="12" sm="6" class="text-sm-right footer-copy">
        © Санкт-Петербургское государственное бюджетное учреждение «Молодежное
        пространство „ПРОСТО“»
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import partner1 from "@/assets/images/partners/partner1.png";
import partner2 from "@/assets/images/partners/partner2.png";
import partner3 from "@/assets/images/partners/partner3.png";
import partner4 from "@/assets/images/partners/partner4.png";
import partner5 from "@/assets/images/partners/partner5.png";

const logos = [
  { src: partner1, alt: "Профсоюзный комитет" },
  { src: partner2, alt: "СОКТ" },
  { src: partner3, alt: "ПРОСТО" },
  { src: partner4, alt: "СКС Профсоюза" },
  { src: partner5, alt: "Общероссийский профсоюз образования" },
];
</script>

<style scoped>
.footer-container {
  background-color: #fff;
  color: #1a1a1a;
  padding: 40px 80px;
  font-family: "Inter", sans-serif;
  border-top: 1px solid #e5e5e5;
}

.footer-title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
}

.sponsors-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.sponsor img {
  height: 40px;
  max-width: 100px;
  object-fit: contain;
  filter: grayscale(0.2);
  transition: all 0.3s ease;
}

.sponsor img:hover {
  filter: grayscale(0);
  transform: scale(1.05);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 6px;
}

.footer-links a {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 15px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.contact-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-image {
  width: 140px;
  height: 70px;
  border-radius: 4px;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #5271ff;
  text-decoration: underline;
}

.footer-rules {
  color: #5264ae;
  text-decoration: none;
  font-size: 14px;
}

.footer-rules:hover {
  text-decoration: underline;
}

.footer-copy {
  font-size: 13px;
  color: #444;
  text-align: right;
}
</style>
