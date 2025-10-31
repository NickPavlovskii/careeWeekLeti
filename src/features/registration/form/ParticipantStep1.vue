<template>
  <div class="modal-shell">
    <div class="modal-card">
      <div class="left-illustration">
        <img src="@/assets/images/participants/ImgParticipantReg.png" alt="illustration" />
      </div>

      <div class="right-form">
        <header class="form-header">
          <h1 class="title">Участники</h1>
          <button class="close-btn" @click="$router.push('/')">
            <v-icon>mdi-close</v-icon>
          </button>

          <nav class="steps">
            <div class="step" :class="{ active: step === 1, done: step > 1 }">
              <span class="step-circle">1</span>
              <span class="step-label">Базовая информация</span>
            </div>

            <div class="step" :class="{ active: step === 2, done: step > 2 }">
              <span class="step-circle">2</span>
              <span class="step-label">Контактные данные</span>
            </div>
          </nav>
        </header>

        <!-- === Шаг 1 === -->
        <section v-if="step === 1" class="section">
          <h2 class="section-title">Базовая информация</h2>
          <p class="hint">*Все поля обязательны для заполнения.</p>

          <form class="form" @submit.prevent="nextStep" novalidate>
            <div class="field">
              <label class="label" for="name">*ФИО</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="input"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>

            <div class="field">
              <label class="label" for="university">*ВУЗ</label>
              <input
                id="university"
                v-model="form.university"
                type="text"
                class="input"
                placeholder="СПбГУ, ВШЭ..."
                required
              />
            </div>

            <div class="field">
              <label class="label" for="direction">Направление</label>
              <input
                id="direction"
                v-model="form.direction"
                type="text"
                class="input"
                placeholder="Экономика, Программная инженерия..."
              />
            </div>

            <div class="row">
              <div class="col col-1">
                <label class="label" for="course">Курс</label>
                <select id="course" v-model="form.course" class="input select">
                  <option value="">Выберите курс</option>
                  <option v-for="n in 6" :key="n" :value="n">{{ n }}</option>
                </select>
              </div>

              <div class="col col-2">
                <label class="label" for="source">*Как узнал о проекте</label>
                <textarea
                  id="source"
                  v-model="form.source"
                  class="input textarea"
                  placeholder="От друга, в соцсетях..."
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="btn-primary"
              :disabled="!isStep1Valid"
            >
              Дальше
            </button>
          </form>
        </section>

        <!-- === Шаг 2 === -->
        <section v-else class="section">
          <h2 class="section-title">Контактная информация</h2>
          <p class="hint">*Все поля обязательны для заполнения.</p>

          <form class="form" @submit.prevent="submitForm" novalidate>
            <div class="field">
              <label class="label" for="email">*Email</label>
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
              <label class="label" for="phone">*Телефон</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="input"
                placeholder="+7 (999) 123-45-67"
                required
              />
            </div>

            <div class="field">
              <label class="label" for="telegram">Telegram (опционально)</label>
              <input
                id="telegram"
                v-model="form.telegram"
                type="text"
                class="input"
                placeholder="@username"
              />
            </div>

            <div class="actions">
              <v-btn variant="outlined" color="grey" @click="step = 1">
                Назад
              </v-btn>

              <button
                type="submit"
                class="btn-primary"
                :disabled="!isStep2Valid"
              >
                Завершить регистрацию
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <!-- ✅ Кастомное уведомление -->
    <Notification
      v-if="showNotification"
      type="success"
      message="✅ Заявка успешно отправлена! Переход на главную..."
      @close="showNotification = false"
    />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Notification from "@/shared/NotificationMessage.vue";

const router = useRouter();
const step = ref(1);
const showNotification = ref(false);

const form = reactive({
  name: "",
  university: "",
  direction: "",
  course: "",
  source: "",
  email: "",
  phone: "",
  telegram: "",
});

const isStep1Valid = computed(() =>
  form.name.trim() && form.university.trim() && form.source.trim()
);

const isStep2Valid = computed(() =>
  form.email.trim() && form.phone.trim()
);

function nextStep() {
  if (isStep1Valid.value) step.value = 2;
}

function submitForm() {
  if (isStep2Valid.value) {
    console.log("✅ Отправленные данные:", { ...form });

    // показать уведомление
    showNotification.value = true;

    // переход на главную через 2 секунды
    setTimeout(() => {
      showNotification.value = false;
      router.push("/");
    }, 2000);
  }
}
</script>

<style scoped>
/* === все твои стили === */
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
  min-height: 420px;
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
  opacity: 0.95;
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

.close-btn:hover {
  opacity: 0.7;
}

.title {
  margin: 0;
  font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #0f1720;
}

.steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  position: relative;
  margin: 40px 0;
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
  transition: all 0.3s ease;
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

.step.done .step-circle {
  background-color: #8fa98f;
}

.step.done .step-label {
  color: #6c7f6c;
}

.section-title {
  margin: 0;
  font-size: 18px;
  color: #1f4c3b;
  font-weight: 600;
}

.hint {
  margin: 8px 0 18px 0;
  color: #6b6b6b;
  font-size: 13px;
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
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-size: 14px;
  color: #222;
  transition: box-shadow 0.12s ease, border-color 0.12s ease;
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

.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 7L0 0h12L6 7z' fill='%23999'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px 7px;
  padding-right: 36px;
}

.row {
  display: flex;
  gap: 16px;
}

.col {
  flex: 1;
}

.col-1 {
  max-width: 180px;
}

.actions {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
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
  cursor: not-allowed;
  transition: all 0.2s ease;
}

.btn-primary:enabled {
  background: #244c33;
  cursor: pointer;
}

.btn-primary:enabled:hover {
  transform: translateY(-1px);
  background: #2e6043;
}
</style>
