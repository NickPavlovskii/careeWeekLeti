<template>
  <CareerHeader />
  <InfoSection />
  <CareerSponsors />
  <WhyParticipate />
  <CareerDetailed />
  <CareerCompany />
  <ScheduleTable :day="1" :items="day1" />
  <DotsBox />
  <ScheduleTable :day="2" :items="day2" />
  <CareerMap />
  <DotsBox />
  <CareerLecture />
  <CareerHallMap />
  <CareerFooter />
</template>

<script setup>
import CareerDetailed from "../entities/company/CareerDetailed.vue";
import CareerCompany from "../entities/company/CareerCompany.vue";
import CareerHeader from "../layouts/CareerHeader.vue";
import InfoSection from "../shared/InfoSection.vue";
import CareerSponsors from "../entities/sponsor/CareerSponsors.vue";
import WhyParticipate from "../shared/WhyParticipate.vue";
import ScheduleTable from "@/entities/lecture/ScheduleTable.vue";
import DotsBox from "@/shared/DotsBox.vue";
import CareerMap from "@/entities/map/CareerMap.vue";
import CareerLecture from "@/entities/lecture/CareerLecture.vue";
import CareerHallMap from "@/entities/map/CareerHallMap.vue";
import CareerFooter from "../layouts/CareerFooter.vue";

const day1 = [
  { name: "Размещение стендов работодателей", time: "9:30–10:30", place: "" },
  { name: "Регистрация участников (студенты)", time: "10:30–11:00", place: "" },
  { name: "Стендовая сессия", time: "11:00–17:00", place: "" },
  { name: "Торжественное открытие", time: "13:00–13:30", place: "" },
  { name: "Мастер-классы (хакатон)", time: "13:15–16:00", place: "" },
];

const day2 = [
  { name: "Размещение стендов работодателей", time: "9:30–10:30", place: "" },
  { name: "Стендовая сессия", time: "11:00–17:00", place: "" },
  { name: "Мастер-классы (хакатон)", time: "13:15–16:00", place: "" },
  { name: "Лекции (выступление спикеров)", time: "13:30–17:00", place: "" },
];
</script>
