<template>
  <div class="modal-shell">
    <div class="modal-card">
      <div v-if="loading" class="preloader-overlay">
        <v-progress-circular
          :size="50"
          color="green"
          indeterminate
        ></v-progress-circular>
    </div>
      <div class="left-illustration">
        <img src="@/assets/images/employers/ImgEmployerReg.png" alt="illustration" />
      </div>

      <!-- Правая часть -->
      <div class="right-form">
        <header class="form-header">
          <h1 class="title">Работодатели</h1>
          <button class="close-btn" @click="router.push('/')">
            <v-icon>mdi-close</v-icon>
          </button>

          <nav class="steps">
            <div
              class="step"
              :class="{ active: step === 1, done: step > 1 }"
            >
              <span class="step-circle">1</span>
              <span class="step-label">Базовая информация</span>
            </div>

            <div
              class="step"
              :class="{ active: step === 2, done: step > 2 }"
            >
              <span class="step-circle">2</span>
              <span class="step-label">Контактная информация</span>
            </div>
          </nav>
        </header>

        <!-- Шаг 1 -->
        <section v-if="step === 1" class="section">
          <h2 class="section-title">Базовая информация</h2>
          <p class="hint">*Все поля обязательны для заполнения.</p>

          <form class="form" @submit.prevent="nextStep" novalidate>
            <div class="field">
              <label class="label" for="fio">*ФИО</label>
              <input
                id="fio"
                v-model="form.fio"
                type="text"
                class="input"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>

            <div class="field">
              <label class="label" for="company">*Название компании</label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="input"
                placeholder="ООО «Альфа», ИП Петров..."
                required
              />
            </div>

            <div class="field">
              <label class="label" for="description"
                >*Краткое описание организации</label
              >
              <textarea
                id="description"
                v-model="form.description"
                class="input textarea"
                placeholder="Чем занимается компания..."
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-primary">Дальше</button>
          </form>
        </section>

        <!-- Шаг 2 -->
        <section v-else class="section">
          <h2 class="section-title">Контактная информация</h2>
          <p class="hint">*Все поля обязательны для заполнения.</p>

          <form class="form" @submit.prevent="submitForm" novalidate>
            <div class="field">
              <label class="label" for="phone">*Номер телефона</label>
              <div class="input phone-input">
                <span class="flag">🇷🇺 +7</span>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="inner-input"
                  placeholder="Введите номер"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label" for="email">*E-mail</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="input"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div class="field">
              <label class="label" for="site">*Сайт организации</label>
              <input
                id="site"
                v-model="form.site"
                type="url"
                class="input"
                placeholder="https://example.ru"
                required
              />
            </div>

            <div class="field checkbox-field">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.agree" required />
                Даю своё согласие на обработку и передачу своих данных.
              </label>
            </div>

            <button type="submit" class="btn-primary">Зарегистрироваться</button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { notificationStore } from "@/store/notification.js";

const router = useRouter();
const step = ref(1);

const loading = ref(false);

const form = reactive({
  fio: "",
  company: "",
  description: "",
  phone: "",
  email: "",
  site: "",
  agree: false,
});

function nextStep() {
  if (!form.fio || !form.company || !form.description) {
    notificationStore.add("error", "⚠️ Заполните все обязательные поля.");
    return;
  }
  step.value = 2;
}

function submitForm() {
  if (!form.phone || !form.email || !form.site || !form.agree) {
    notificationStore.add("error", "⚠️ Заполните все поля и подтвердите согласие.");
    
    return;
  }
  loading.value = true;
fetch("http://localhost:8081/api/company-participants", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
})
  .then(async (res) => {
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);

      // Если сервер прислал error.code
      if (errorData && errorData.code) {
        switch (errorData.code) {
          case "EMAIL_EXISTS":
            throw new Error("Этот email уже зарегистрирован!");
          case "PHONE_EXISTS":
            throw new Error("Этот номер телефона уже зарегистрирован!");
          default:
            throw new Error(errorData.message || "Неизвестная ошибка сервера");
        }
      }

      throw new Error("Ошибка при регистрации компании");
    }

    notificationStore.add("success", "✅ Компания успешно зарегистрирована!");
    console.log("✅ Компания добавлена:", form);

    setTimeout(() => router.push("/"), 500);
  })
  .catch((err) => {
    loading.value = false;
    notificationStore.add("error", "❌ " + err.message);
    console.error(err);
  });

}
</script>

<style scoped>
.modal-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.02);
}
.preloader-overlay {
  position: absolute; /* поверх всего модального окна */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* полупрозрачный фон */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* поверх всего */
  pointer-events: all; /* блокирует клики по форме под overlay */
}

.modal-card {
  width: 100%;
  max-width: 1120px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.left-illustration {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 40px;
}
.left-illustration img {
  max-width: 420px;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.right-form {
  width: 520px;
  padding: 36px 48px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.title {
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  color: #0f1720;
}
.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #244c33;
  font-size: 24px;
  padding: 8px;
  transition: opacity 0.2s;
}
.steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  margin: 40px 0;
  position: relative;
}

.steps::before {
  content: "";
  position: absolute;
  top: 16px;
  left: 20%;
  right: 20%;
  height: 1px;
  background-color: #c9d1c9;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.step-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #c0cec0;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.step-label {
  font-size: 14px;
  color: #8a988a;
}

.step.active .step-circle {
  background-color: #244c33;
}
.step.active .step-label {
  color: #244c33;
  font-weight: 500;
}

.section-title {
  font-size: 18px;
  color: #1f4c3b;
  font-weight: 600;
}

.hint {
  color: #6b6b6b;
  font-size: 13px;
  margin-bottom: 16px;
}

.field {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 13px;
  color: #4b4b4b;
  margin-bottom: 6px;
}

.input {
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-size: 14px;
  color: #222;
}
.input:focus {
  border-color: #2f8a63;
  box-shadow: 0 0 0 4px rgba(47, 138, 99, 0.06);
}

.textarea {
  min-height: 86px;
  resize: vertical;
  padding-top: 10px;
}

.phone-input {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
}
.flag {
  font-size: 14px;
  color: #444;
}
.inner-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
}

.checkbox-field {
  margin-top: 10px;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #3b3b3b;
}

.btn-primary {
  width: 100%;
  height: 48px;
  border-radius: 28px;
  border: none;
  background: #bfbfbf;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s ease;
}
.btn-primary:hover {
  background: #244c33;
}
/* Responsive */
@media (max-width: 980px) {
  .left-illustration {
    display: none;
  }
  .modal-card {
    flex-direction: column;
    max-width: 760px;
  }
  .left-illustration {
    padding: 24px;
  }
  .right-form {
    width: 100%;
    padding: 24px;
  }
  .row {
    flex-direction: column;
  }
  .col-1 {
    max-width: none;
  }
}


</style>
