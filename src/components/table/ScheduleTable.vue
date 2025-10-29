<template>
  <div class="schedule">
    <h2 class="schedule-title">Программа мероприятий</h2>
    <h3 class="schedule-day">День {{ day }}</h3>
    <v-table class="schedule-table" density="comfortable">
      <thead>
        <tr>
          <th><p class="text-left">Наименование</p></th>
          <th class="text-left"><p class="text-left">Время</p></th>
          <th class="text-left place-header">
            <p class="text-left">Место - Пространство ПРОСТО</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <p class="text-table">{{ item.name }}</p>
          </td>
          <td>
            <p class="text-table">{{ item.time }}</p>
          </td>
          <td>
            <p class="text-table">{{ item.place }}</p>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script setup>
/* global defineProps */
defineProps({
  day: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.schedule {
  margin: 20px;
  text-align: center;
  font-family: "Segoe UI", Arial, sans-serif;
}
.schedule-title {
  font-size: 75px;
  font-weight: 600;
  color: #5a6482;
  margin-bottom: 6px;
}
.schedule-day {
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 20px;
}
.text-left {
  margin: 10px;
  font-size: 40px;
}
.text-table {
  margin: 10px;
  font-size: 35px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

/* зелёные линии в шапке */
::v-deep(.schedule-table thead) {
  position: relative;
}
::v-deep(.schedule-table thead)::before,
::v-deep(.schedule-table thead)::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #1fb893;
}
::v-deep(.schedule-table thead)::before {
  top: 0;
}
::v-deep(.schedule-table thead)::after {
  bottom: 0;
}

/* убираем лишние линии Vuetify */
::v-deep(.schedule-table th),
::v-deep(.schedule-table td) {
  border: none !important;
  text-align: left;
  padding: 10px 6px;
}

.schedule-table th {
  font-weight: 600;
}

.place-header {
  font-weight: 500;
}

/* 📱 адаптация под маленькие экраны */
@media (max-width: 600px) {
  .schedule-title {
    font-size: 22px;
  }
  .schedule-day {
    font-size: 18px;
  }
  .schedule-table {
    font-size: 12px;
  }
  ::v-deep(.schedule-table th),
  ::v-deep(.schedule-table td) {
    padding: 6px 4px;
  }
}
</style>
