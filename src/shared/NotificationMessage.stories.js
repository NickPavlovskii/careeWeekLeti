import { onMounted } from 'vue';
import NotificationMessage from './NotificationMessage.vue';
import { notificationStore } from '@/store/notification.js';

export default {
  title: 'Shared/NotificationMessage',
  component: NotificationMessage,
  tags: ['autodocs'],
};

export const Success = {
  render: () => ({
    components: { NotificationMessage },
    setup() {
      onMounted(() => {
        notificationStore.messages.splice(0);
        notificationStore.add('success', 'Заявка успешно отправлена!');
      });
    },
    template: '<NotificationMessage />',
  }),
};

export const Error = {
  render: () => ({
    components: { NotificationMessage },
    setup() {
      onMounted(() => {
        notificationStore.messages.splice(0);
        notificationStore.add('error', 'Этот email уже зарегистрирован!');
      });
    },
    template: '<NotificationMessage />',
  }),
};
