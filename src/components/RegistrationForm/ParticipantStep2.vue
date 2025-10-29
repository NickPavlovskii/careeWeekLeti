<template>
  <div class="modal-shell">
    <div class="modal-card">
      <div class="left-illustration">
        <img src="@/assets/images/ImgParticipantReg.png" alt="illustration" />
      </div>

      <div class="right-form">
        <header class="form-header">
          <h1 class="title">Участники</h1>
          <button class="close-btn" @click="$router.push('/')">
            <v-icon>mdi-close</v-icon>
          </button>

          <nav class="steps">
            <div class="step done">
              <span class="step-circle">1</span>
              <span class="step-label">Базовая информация</span>
            </div>
            <div class="step active">
              <span class="step-circle">2</span>
              <span class="step-label">Контактные данные</span>
            </div>
          </nav>
        </header>

        <section class="section">
          <h2 class="section-title">Контактная информация</h2>
          <p class="hint">*Все поля обязательны для заполнения.</p>

          <form class="form" @submit.prevent="onSubmit">
            <div class="field">
              <label class="label" for="name">*Имя</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="input"
                placeholder="Иван Иванов"
                required
              />
            </div>

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
              <v-btn
                variant="outlined"
                color="grey"
                @click="$router.push('/registration/participant/step-1')"
              >
                Назад
              </v-btn>
              <v-btn
                color="primary"
                type="submit"
                class="submit-btn"
                :disabled="!isValid"
              >
                Завершить регистрацию
              </v-btn>
            </div>
          </form>
        </section>

        <NotificationMessage
          v-if="notification.visible"
          :type="notification.type"
          :message="notification.message"
          @close="notification.visible = false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import emailjs from "emailjs-com";
import NotificationMessage from "@/components/common/NotificationMessage.vue";

const router = useRouter();

const form = reactive({
  name: "",
  email: "",
  phone: "",
  telegram: "",
});

const notification = reactive({
  visible: false,
  type: "",
  message: "",
});

const isValid = computed(() =>
  form.name.trim() && form.email.trim() && form.phone.trim()
);

const SERVICE_ID = "service_y4in7td";
const TEMPLATE_ID = "template_4cngkam";
const PUBLIC_KEY = "hClrNujk1DBN3NoiH";

function onSubmit() {
  if (!isValid.value) {
    notification.visible = true;
    notification.type = "error";
    notification.message = "Пожалуйста, заполните все обязательные поля.";
    return;
  }

  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        telegram: form.telegram,
        to_email: form.email,
      },
      PUBLIC_KEY
    )
    .then(() => {
      notification.visible = true;
      notification.type = "success";
      notification.message = `Письмо с информацией о ярмарке отправлено на ${form.email}`;
      setTimeout(() => router.push("/"), 1500);
    })
    .catch((err) => {
      console.error(err);
      notification.visible = true;
      notification.type = "error";
      notification.message = "Ошибка при отправке письма. Попробуйте позже.";
    });
}
</script>


<style scoped>
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

.modal-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
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

/* Левая иллюстрация */
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
  opacity: 0.95;
}

/* Правая форма */
.right-form {
  width: 520px;
  padding: 36px 48px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Заголовок */
.form-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  z-index: 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  transition: all 0.3s ease;
}

.step-label {
  font-size: 14px;
  color: #8a988a;
  transition: color 0.3s ease;
}

/* Активный шаг */
.step.active .step-circle {
  background-color: #244c33;
}

.step.active .step-label {
  color: #244c33;
  font-weight: 500;
}

/* Завершённый шаг */
.step.done .step-circle {
  background-color: #8fa98f;
}

.step.done .step-label {
  color: #6c7f6c;
}

/* Секция */
.section-title {
  font-size: 18px;
  color: #1f4c3b;
  font-weight: 600;
  margin-bottom: 4px;
}
.hint {
  color: #6b6b6b;
  font-size: 13px;
  margin-bottom: 16px;
}

/* Поля формы */
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

/* Инпуты */
.input {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  transition: all 0.12s ease;
}
.input:focus {
  border-color: #2f8a63;
  box-shadow: 0 0 0 4px rgba(47, 138, 99, 0.06);
}

/* Кнопки */
.actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 14px;
}
.back-btn {
  flex: 1;
  min-height: 48px;
  border-radius: 28px;
}
.submit-btn {
  flex: 2;
  min-height: 48px;
  border-radius: 28px;
  background: #174b2e;
  color: #fff;
}

/* Адаптив */
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
}
</style>
