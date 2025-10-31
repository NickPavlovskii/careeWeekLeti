import { createRouter, createWebHistory } from 'vue-router';

// Главная страница
import CareerMainPage from './pages/CareerMainPage.vue';
import CareerHeader from './layouts/CareerHeader.vue';

// Участники
import ParticipantStep1 from './features/registration/form/ParticipantStep1.vue';

// Работодатели
import EmployerStep1 from './features/registration/form/EmployerStep1.vue';

import RegistrationSelection from '@/pages/RegistrationSelection.vue';

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
    path: '/registration/participant',
    name: 'ParticipantStep1',
    components: {
      default: ParticipantStep1,
      header: CareerHeader,
    },
  },
  {
    path: '/registration',
    name: 'RegistrationSelection',
    components: {
      default: RegistrationSelection,
      header: CareerHeader,
    },
  },


  // === Регистрация работодателей ===
  {
    path: '/registration/employer',
    name: 'EmployerStep1',
    components: {
      default: EmployerStep1,
      header: CareerHeader,
    },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
