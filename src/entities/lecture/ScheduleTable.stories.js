import ScheduleTable from './ScheduleTable.vue';

const sampleItems = [
  { name: 'Регистрация участников (студенты)', time: '10:30–11:00', place: '' },
  { name: 'Стендовая сессия', time: '11:00–17:00', place: '' },
  { name: 'Торжественное открытие', time: '13:00–13:30', place: 'Холл' },
];

export default {
  title: 'Lecture/ScheduleTable',
  component: ScheduleTable,
  tags: ['autodocs'],
  args: {
    day: 1,
    items: sampleItems,
  },
};

export const DayOne = {
  args: {
    day: 1,
    items: sampleItems,
  },
};

export const DayTwo = {
  args: {
    day: 2,
    items: [
      { name: 'Стендовая сессия', time: '11:00–17:00', place: '' },
      {
        name: 'Лекции (выступление спикеров)',
        time: '13:30–17:00',
        place: 'Аудитория',
      },
    ],
  },
};
