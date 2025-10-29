import { createRouter, createWebHistory } from 'vue-router';

// Главная страница
import CareerMainPage from './pages/CareerMainPage.vue';
import CareerHeader from './components/CareerHeader.vue';

// Участники
import ParticipantStep1 from './components/RegistrationForm/ParticipantStep1.vue';
import ParticipantStep2 from './components/RegistrationForm/ParticipantStep2.vue';

// Работодатели
import EmployerStep1 from './components/RegistrationForm/EmployerStep1.vue';
import EmployerStep2 from './components/RegistrationForm/EmployerStep2.vue';

const routes = [
  {
    path: '/',
    name: 'CareerMainPage',
    components: {
      default: CareerMainPage,
      header: CareerHeader,
    },
  },

  // === Регистрация участников ===
  {
    path: '/registration/participant/step-1',
    name: 'ParticipantStep1',
    components: {
      default: ParticipantStep1,
      header: CareerHeader,
    },
  },
  {
    path: '/registration/participant/step-2',
    name: 'ParticipantStep2',
    components: {
      default: ParticipantStep2,
      header: CareerHeader,
    },
  },

  // === Регистрация работодателей ===
  {
    path: '/registration/employer/step-1',
    name: 'EmployerStep1',
    components: {
      default: EmployerStep1,
      header: CareerHeader,
    },
  },
  {
    path: '/registration/employer/step-2',
    name: 'EmployerStep2',
    components: {
      default: EmployerStep2,
      header: CareerHeader,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
