<template>
  <CareerHeader/>
  <InfoSection/>
  <CareerSponsors/>
  <WhyParticipate/>
  <CareerDetailed/>
  <CareerCompany/>
  <ScheduleTable :day="1" :items="day1" />
  <DotsBox/>
  <ScheduleTable :day="2" :items="day2" />
  <CareerMap/>
  <DotsBox/>
  <CareerLecture/>
  <CareerHallMap/>
  <CareerFooter/>
</template>

<script setup>
import CareerDetailed from '../components/CareerDetailed.vue';
import CareerCompany from '../components/CareerCompany.vue';
import CareerHeader from '../components/CareerHeader.vue';
import InfoSection from '../components/InfoSection.vue';
import CareerSponsors from '../components/CareerSponsors.vue';
import WhyParticipate from '../components/WhyParticipate.vue';
import ScheduleTable from '@/components/table/ScheduleTable.vue';
import DotsBox from '@/components/DotsBox.vue';
import CareerMap from '@/components/CareerMap.vue';
import CareerLecture from '@/components/CareerLecture.vue';
import CareerHallMap from '@/components/CareerHallMap.vue';
import CareerFooter from '@/components/CareerFooter.vue';

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
