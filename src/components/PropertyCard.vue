<template>
  <v-card>
    <v-card-title>{{ property.name }}</v-card-title>
    <v-card-subtitle>{{ property.address }}</v-card-subtitle>
    <v-card-text>
      <p>Статус: 
        <strong :class="statusColor">{{ status }}</strong>
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ property: Object })

const status = computed(() =>
  props.property.occupied ? 'Занята' : props.property.cleaningNeeded ? 'Требует уборки' : 'Свободна'
)

const statusColor = computed(() => ({
  green: !props.property.occupied && !props.property.cleaningNeeded,
  red: props.property.occupied,
  orange: !props.property.occupied && props.property.cleaningNeeded,
}))
</script>

<style scoped>
.green { color: green; }
.red { color: red; }
.orange { color: orange; }
</style>
