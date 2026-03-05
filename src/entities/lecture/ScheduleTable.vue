<template>
  <div class="schedule">
    <h2 class="schedule-title">
      Программа мероприятий
    </h2>
    <h3 class="schedule-day">
      День {{ day }}
    </h3>
    <div class="table-wrapper">
      <v-table
        class="schedule-table"
        density="comfortable"
      >
        <thead>
          <tr>
            <th>
              <p class="text-header">
                Наименование
              </p>
            </th>
            <th>
              <p class="text-header">
                Время
              </p>
            </th>
            <th class="place-header">
              <p class="text-header">
                Место - Пространство ПРОСТО
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
          >
            <td>
              <p class="text-table">
                {{ item.name }}
              </p>
            </td>
            <td>
              <p class="text-table text-nowrap">
                {{ item.time }}
              </p>
            </td>
            <td>
              <p class="text-table">
                {{ item.place || "—" }}
              </p>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <div class="mobile-cards">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="event-card"
      >
        <div class="event-time">
          {{ item.time }}
        </div>
        <div class="event-name">
          {{ item.name }}
        </div>
        <div
          v-if="item.place"
          class="event-place"
        >
          {{ item.place }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  margin: 20px auto;
  text-align: center;
  font-family: "Segoe UI", Arial, sans-serif;
  max-width: 1100px;
  padding: 0 20px;
}

.schedule-title {
  font-size: clamp(28px, 5vw, 60px);
  font-weight: 600;
  color: #5a6482;
  margin-bottom: 6px;
}

.schedule-day {
  font-size: clamp(22px, 3.5vw, 38px);
  font-weight: 600;
  margin-bottom: 20px;
}

.text-header {
  margin: 10px;
  font-size: clamp(16px, 2.5vw, 28px);
  font-weight: 600;
  text-align: left;
}

.text-table {
  margin: 8px 10px;
  font-size: clamp(14px, 2vw, 24px);
  text-align: left;
}

.text-nowrap {
  white-space: nowrap;
}

.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
}

.schedule-table {
  width: 100%;
  min-width: 500px;
  border-collapse: collapse;
}

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

.mobile-cards {
  display: none;
}

.event-card {
  background: #f8f9fc;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  text-align: left;
  border-left: 4px solid #1fb893;
  transition: transform 0.2s;
}

.event-card:hover {
  transform: translateX(4px);
}

.event-time {
  font-size: 14px;
  font-weight: 600;
  color: #1fb893;
  margin-bottom: 4px;
}

.event-name {
  font-size: 16px;
  font-weight: 500;
  color: #2e355c;
}

.event-place {
  font-size: 13px;
  color: #8892a8;
  margin-top: 4px;
}

@media (max-width: 600px) {
  .schedule {
    padding: 0 12px;
  }

  .table-wrapper {
    display: none;
  }

  .mobile-cards {
    display: block;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .text-header {
    font-size: 18px;
  }

  .text-table {
    font-size: 16px;
  }

  .schedule-table {
    min-width: 400px;
  }
}
</style>
