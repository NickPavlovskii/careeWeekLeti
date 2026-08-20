<template>
  <div class="modal-shell">
    <div class="modal-card">
      <div
        v-if="loading"
        class="preloader-overlay"
      >
        <v-progress-circular
          :size="50"
          color="green"
          indeterminate
        />
      </div>
      <div class="left-illustration">
        <div
          v-if="!imgLoaded"
          class="skeleton-img"
        >
          <div class="skeleton-pulse" />
        </div>
        <img
          src="@/assets/images/employers/ImgEmployerReg.png"
          alt="illustration"
          :class="{ loaded: imgLoaded }"
          @load="imgLoaded = true"
        >
      </div>

      <div class="right-form">
        <header class="form-header">
          <div class="header-top">
            <h1 class="title">
              Работодатели
            </h1>
            <button
              type="button"
              class="close-btn"
              aria-label="Закрыть"
              @click="router.push('/')"
            >
              <v-icon>mdi-close</v-icon>
            </button>
          </div>

          <nav class="steps">
            <div :class="['step', { active: step === 1, done: step > 1 }]">
              <span class="step-circle">
                <v-icon
                  v-if="step > 1"
                  size="14"
                >
                  mdi-check
                </v-icon>
                <span v-else>1</span>
              </span>
              <span class="step-label">Базовая информация</span>
            </div>
            <div :class="['step-line', { filled: step > 1 }]" />
            <div :class="['step', { active: step === 2, done: step > 2 }]">
              <span class="step-circle">2</span>
              <span class="step-label">Контактная информация</span>
            </div>
          </nav>
        </header>

        <transition
          name="fade"
          mode="out-in"
        >
          <!-- Шаг 1 -->
          <section
            v-if="step === 1"
            key="step1"
            class="section"
          >
            <h2 class="section-title">
              Базовая информация
            </h2>
            <p class="hint">
              Поля, отмеченные *, обязательны для заполнения
            </p>

            <form
              class="form"
              novalidate
              @submit.prevent="nextStep"
            >
              <div :class="['field', { focused: focused === 'fio', filled: form.fio }]">
                <label
                  class="label"
                  for="fio"
                >ФИО контактного лица <span class="req">*</span></label>
                <div class="input-wrap">
                  <v-icon
                    size="18"
                    class="field-icon"
                  >
                    mdi-account-outline
                  </v-icon>
                  <input
                    id="fio"
                    v-model="form.fio"
                    type="text"
                    class="input"
                    placeholder="Иванов Иван Иванович"
                    required
                    @focus="focused = 'fio'"
                    @blur="focused = null"
                  >
                </div>
              </div>

              <div :class="['field', { focused: focused === 'company', filled: form.company }]">
                <label
                  class="label"
                  for="company"
                >Название компании <span class="req">*</span></label>
                <div class="input-wrap">
                  <v-icon
                    size="18"
                    class="field-icon"
                  >
                    mdi-domain
                  </v-icon>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="input"
                    placeholder="ООО «Альфа», ИП Петров..."
                    required
                    @focus="focused = 'company'"
                    @blur="focused = null"
                  >
                </div>
              </div>

              <div :class="['field', { focused: focused === 'description', filled: form.description }]">
                <label
                  class="label"
                  for="description"
                >Краткое описание организации
                  <span class="req">*</span></label>
                <div class="input-wrap textarea-wrap">
                  <v-icon
                    size="18"
                    class="field-icon field-icon-top"
                  >
                    mdi-text-box-outline
                  </v-icon>
                  <textarea
                    id="description"
                    v-model="form.description"
                    class="input textarea"
                    placeholder="Чем занимается компания, какие направления..."
                    rows="4"
                    required
                    @focus="focused = 'description'"
                    @blur="focused = null"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="btn-next"
                :disabled="!isStep1Valid"
              >
                <span class="btn-text">Далее</span>
                <span class="btn-arrow">
                  <v-icon size="20">mdi-arrow-right</v-icon>
                </span>
              </button>
            </form>
          </section>

          <!-- Шаг 2 -->
          <section
            v-else
            key="step2"
            class="section"
          >
            <h2 class="section-title">
              Контактная информация
            </h2>
            <p class="hint">
              Поля, отмеченные *, обязательны для заполнения
            </p>

            <form
              class="form"
              novalidate
              @submit.prevent="submitForm"
            >
              <div :class="['field', { focused: focused === 'phone', filled: form.phone }]">
                <label
                  class="label"
                  for="phone"
                >Номер телефона <span class="req">*</span></label>
                <div class="input-wrap">
                  <span class="input-prefix">+7</span>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="input input-with-prefix"
                    placeholder="(999) 123-45-67"
                    required
                    @focus="focused = 'phone'"
                    @blur="focused = null"
                  >
                </div>
              </div>

              <div :class="['field', { focused: focused === 'email', filled: form.email }]">
                <label
                  class="label"
                  for="email"
                >E-mail <span class="req">*</span></label>
                <div class="input-wrap">
                  <v-icon
                    size="18"
                    class="field-icon"
                  >
                    mdi-email-outline
                  </v-icon>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="input"
                    placeholder="example@company.ru"
                    required
                    @focus="focused = 'email'"
                    @blur="focused = null"
                  >
                </div>
              </div>

              <div :class="['field', { focused: focused === 'site', filled: form.site }]">
                <label
                  class="label"
                  for="site"
                >Сайт организации <span class="req">*</span></label>
                <div class="input-wrap">
                  <v-icon
                    size="18"
                    class="field-icon"
                  >
                    mdi-web
                  </v-icon>
                  <input
                    id="site"
                    v-model="form.site"
                    type="url"
                    class="input"
                    placeholder="https://example.ru"
                    required
                    @focus="focused = 'site'"
                    @blur="focused = null"
                  >
                </div>
              </div>

              <div class="field checkbox-field">
                <label class="checkbox-label">
                  <input
                    v-model="form.agree"
                    type="checkbox"
                    class="checkbox-input"
                  >
                  <span class="checkbox-custom" />
                  <span class="checkbox-text">Даю своё согласие на обработку и передачу своих
                    данных</span>
                </label>
              </div>

              <div class="actions">
                <button
                  type="button"
                  class="btn-back"
                  @click="step = 1"
                >
                  <v-icon size="18">
                    mdi-arrow-left
                  </v-icon>
                  Назад
                </button>

                <button
                  type="submit"
                  class="btn-next btn-submit"
                  :disabled="!isStep2Valid"
                >
                  <span class="btn-text">Зарегистрироваться</span>
                  <span class="btn-arrow">
                    <v-icon size="20">mdi-check</v-icon>
                  </span>
                </button>
              </div>
            </form>
          </section>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { notificationStore } from "@/store/notification.js";

const router = useRouter();
const step = ref(1);
const focused = ref(null);
const imgLoaded = ref(false);

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

const isStep1Valid = computed(
  () => form.fio.trim() && form.company.trim() && form.description.trim(),
);

const isStep2Valid = computed(
  () =>
    form.phone.trim() && form.email.trim() && form.site.trim() && form.agree,
);

function nextStep() {
  if (!isStep1Valid.value) {
    notificationStore.add("error", "Заполните все обязательные поля.");
    return;
  }
  step.value = 2;
}

function submitForm() {
  if (!isStep2Valid.value) {
    notificationStore.add(
      "error",
      "Заполните все поля и подтвердите согласие.",
    );
    return;
  }

  fetch("http://localhost:8081/api/company-participants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then(async (res) => {
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        if (errorData && errorData.code) {
          switch (errorData.code) {
            case "EMAIL_EXISTS":
              throw new Error("Этот email уже зарегистрирован!");
            case "PHONE_EXISTS":
              throw new Error("Этот номер телефона уже зарегистрирован!");
            default:
              throw new Error(
                errorData.message || "Неизвестная ошибка сервера",
              );
          }
        }
        throw new Error("Ошибка при регистрации компании");
      }

      notificationStore.add("success", "Компания успешно зарегистрирована!");
      setTimeout(() => router.push("/"), 500);
    })
    .catch((err) => {
      notificationStore.add("error", err.message);
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
  padding: 24px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f0f4f8 0%, #e8edf5 100%);
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
  max-width: 1060px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(46, 53, 92, 0.1);
}

.left-illustration {
  flex: 1 1 45%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #f7f9fc 0%, #eef1f8 100%);
  padding: 48px;
  position: relative;
  overflow: hidden;
}

.left-illustration img {
  max-width: 380px;
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.left-illustration img.loaded {
  opacity: 1;
}

.skeleton-img {
  position: absolute;
  inset: 48px;
  border-radius: 16px;
  background: #e8ecf2;
  overflow: hidden;
}

.skeleton-pulse {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e8ecf2 25%, #f3f5f9 50%, #e8ecf2 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.right-form {
  flex: 1 1 55%;
  padding: 40px 44px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  color: #1a1f36;
  letter-spacing: -0.5px;
}

.close-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #f5f6fa;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #ecedf3;
  color: #333;
}

.steps {
  display: flex;
  align-items: center;
  margin: 28px 0 8px;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;
}

.step-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e4e7ef;
  color: #8892a8;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.step-label {
  font-size: 13px;
  color: #8892a8;
  font-weight: 500;
  white-space: nowrap;
}

.step-line {
  flex: 1;
  height: 2px;
  background: #e4e7ef;
  margin: 0 12px;
  border-radius: 1px;
  transition: background 0.3s;
}

.step-line.filled {
  background: #2e355c;
}

.step.active .step-circle {
  background: #2e355c;
  color: white;
  box-shadow: 0 2px 8px rgba(46, 53, 92, 0.3);
}

.step.active .step-label {
  color: #2e355c;
  font-weight: 600;
}

.step.done .step-circle {
  background: #22c55e;
  color: white;
}

.step.done .step-label {
  color: #22c55e;
}

.section-title {
  margin: 0;
  font-size: 20px;
  color: #1a1f36;
  font-weight: 600;
}

.hint {
  margin: 6px 0 20px;
  color: #8892a8;
  font-size: 13px;
}

.field {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 12px;
  color: #8892a8;
  margin-bottom: 6px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.field.focused .label {
  color: #2e355c;
}

.req {
  color: #e74c3c;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.textarea-wrap {
  align-items: flex-start;
}

.field-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #c0c6d4;
  pointer-events: none;
  transition: color 0.2s;
  z-index: 1;
}

.field-icon-top {
  top: 14px;
  transform: none;
}

.field.focused .field-icon {
  color: #2e355c;
}

.field.filled .field-icon {
  color: #6b7594;
}

.input {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px 12px 44px;
  border-radius: 14px;
  border: 2px solid #e8ecf4;
  background: #f8f9fd;
  font-size: 15px;
  color: #1a1f36;
  transition: all 0.25s ease;
  outline: none;
  box-sizing: border-box;
}

.input::placeholder {
  color: #c0c6d4;
  font-size: 14px;
}

.input:focus {
  border-color: #2e355c;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(46, 53, 92, 0.06), 0 2px 8px rgba(46, 53, 92, 0.08);
}

.field.filled .input {
  border-color: #d0d5e2;
  background: #fff;
}

.input-prefix {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
  font-size: 15px;
  font-weight: 600;
  pointer-events: none;
}

.input-with-prefix {
  padding-left: 44px;
}

.textarea {
  min-height: 100px;
  resize: vertical;
  line-height: 1.5;
  padding-top: 12px;
  padding-left: 44px;
}

.checkbox-field {
  margin-top: 4px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid #d5d8e2;
  background: #fafbfd;
  flex-shrink: 0;
  transition: all 0.2s;
  position: relative;
  margin-top: 1px;
}

.checkbox-input:checked + .checkbox-custom {
  background: #2e355c;
  border-color: #2e355c;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  font-size: 13px;
  color: #555;
  line-height: 1.4;
}

.actions {
  margin-top: 8px;
  display: flex;
  gap: 12px;
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  border-radius: 14px;
  border: 2px solid #e8ecf4;
  background: white;
  color: #6b7594;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  white-space: nowrap;
}

.btn-back:hover {
  border-color: #2e355c;
  color: #2e355c;
  background: #f5f6fa;
}

.btn-next {
  width: 100%;
  height: 52px;
  border-radius: 14px;
  border: none;
  background: #d5d8e2;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: not-allowed;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  overflow: hidden;
  position: relative;
}

.btn-text {
  transition: transform 0.3s;
}

.btn-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  opacity: 0;
  transition: all 0.3s;
  margin-left: 0;
}

.btn-next:enabled {
  background: linear-gradient(135deg, #2e355c 0%, #3d4a7a 100%);
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(46, 53, 92, 0.2);
}

.btn-next:enabled .btn-arrow {
  width: 28px;
  opacity: 1;
  margin-left: 4px;
}

.btn-next:enabled:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(46, 53, 92, 0.3);
  background: linear-gradient(135deg, #3d4575 0%, #4d5a8a 100%);
}

.btn-next:enabled:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-next:enabled:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(46, 53, 92, 0.2);
}

.btn-submit {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 980px) {
  .modal-shell {
    padding: 16px;
  }

  .left-illustration {
    display: none;
  }

  .modal-card {
    flex-direction: column;
    max-width: 600px;
    border-radius: 16px;
  }

  .right-form {
    padding: 28px 24px;
  }

  .steps {
    margin: 20px 0 4px;
  }

  .step-label {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .modal-shell {
    padding: 8px;
  }

  .right-form {
    padding: 20px 16px;
  }

  .title {
    font-size: 24px;
  }

  .step-label {
    display: none;
  }

  .step-line {
    margin: 0 8px;
  }

  .actions {
    flex-direction: column;
  }

  .btn-next {
    height: 48px;
    font-size: 15px;
  }

  .input {
    min-height: 44px;
    font-size: 14px;
  }
}
</style>
