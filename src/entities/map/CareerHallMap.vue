<template>
  <div class="container">
    <div class="hall-map">
      <div class="section-title">
        <h2>Схема зала</h2>
        <v-switch
          v-model="isInteractive"
          inset
          color="success"
          :label="isInteractive ? 'Интерактивный режим' : 'Картинка схемы'"
          hide-details
          class="mode-switch"
        ></v-switch>
      </div>
      <svg
        v-if="isInteractive"
        viewBox="0 0 1600 1000"
        xmlns="http://www.w3.org/2000/svg"
        @mousemove="moveTooltip"
        @mouseleave="hideTooltip"
      >
        <!-- ===== Зоны (кроме Лектория 2) ===== -->
        <g
          v-for="zone in filteredZones"
          :key="zone.id"
          class="zone"
          @mouseenter="showTooltip(zone)"
          @mouseleave="hideTooltip"
          @click="emitZone(zone)"
        >
          <rect
            :x="zone.x"
            :y="zone.y"
            :width="zone.width"
            :height="zone.height"
            :fill="zone.color"
            stroke="#333"
            stroke-width="1"
            rx="6"
          />
          <text
            :x="zone.x + zone.width / 2"
            :y="zone.y + zone.height / 2"
            text-anchor="middle"
            dominant-baseline="middle"
            class="zone-label"
          >
            {{ zone.name }}
          </text>
        </g>
        <!-- ===== Детализированный Лекторий 1 ===== -->

        <!-- Синий блок (Лекторий 1) -->
        <!-- ===== Детализированный Лекторий 1 ===== -->
        <g id="lectorium1">
          <!-- Синий блок (Лекторий 1) -->
          <path
            d="M550 100 L990 100 L970 220 L550 220 Z"
            fill="#aaccff"
            stroke="black"
            stroke-width="1.5"
          />

          <!-- Название -->
          <rect
            x="690"
            y="150"
            rx="10"
            ry="10"
            width="160"
            height="40"
            fill="#33c37f"
          />
          <text
            x="770"
            y="175"
            font-size="16"
            text-anchor="middle"
            fill="white"
            font-family="sans-serif"
          >
            Лекторий 1
          </text>

          <!-- Верхний ряд номеров (по более пологой дуге) -->
          <g font-family="sans-serif" font-size="12" text-anchor="middle">
            <g fill="white" stroke="black" stroke-width="1">
              <circle
                v-for="i in 12"
                :key="'top-' + i"
                :cx="770 + 180 * Math.cos((Math.PI * (i - 1)) / 13 - Math.PI)"
                :cy="160 + 40 * Math.sin((Math.PI * (i - 1)) / 13 - Math.PI)"
                r="10"
                :fill="hoveredSeat === `Место ${i}` ? '#22c55e' : 'white'"
                stroke="black"
                stroke-width="1"
                style="cursor: pointer; transition: 0.2s"
                @mouseenter="
                  (e) =>
                    showSeatTooltip(
                      { name: `Место ${i}`, desc: 'Лекторий 1' },
                      e
                    )
                "
                @mousemove="moveSeatTooltip"
                @mouseleave="hideSeatTooltip"
              />

              <text
                v-for="i in 12"
                :key="'text-top-' + i"
                :x="770 + 180 * Math.cos((Math.PI * (i - 1)) / 13 - Math.PI)"
                :y="164 + 40 * Math.sin((Math.PI * (i - 1)) / 13 - Math.PI)"
              >
                {{ i }}
              </text>
            </g>
          </g>

          <!-- Нижний ряд номеров -->
          <g font-family="sans-serif" font-size="12" text-anchor="middle">
            <g fill="white" stroke="black" stroke-width="1">
              <circle
                v-for="n in 8"
                :key="'bottom-' + n"
                :cx="640 + n * 40"
                cy="205"
                r="10"
                :fill="hoveredSeat === `Место ${12 + n}` ? '#22c55e' : 'white'"
                stroke="black"
                stroke-width="1"
                style="cursor: pointer; transition: 0.2s"
                @mouseenter="
                  (e) =>
                    showSeatTooltip(
                      { name: `Место ${12 + n}`, desc: 'Лекторий 1' },
                      e
                    )
                "
                @mousemove="moveSeatTooltip"
                @mouseleave="hideSeatTooltip"
              />

              <text
                v-for="n in 8"
                :key="'b-' + n"
                :x="640 + n * 40"
                y="209"
                text-anchor="middle"
              >
                {{ 12 + n }}
              </text>
            </g>
          </g>

          <!-- Треугольники под синим блоком -->
          <g fill="lightgray" stroke="black">
            <polygon points="600,240 615,265 585,265" />
            <polygon points="680,240 695,265 665,265" />
            <polygon points="660,285 675,310 645,310" />
          </g>
          <!-- Треугольники по дуге, как на картинке -->

          <!-- Open space -->
          <g font-family="sans-serif" font-size="10" text-anchor="middle">
            <circle cx="720" cy="300" r="6" fill="white" stroke="black" />
            <circle cx="760" cy="300" r="6" fill="white" stroke="black" />
            <circle cx="800" cy="300" r="6" fill="white" stroke="black" />
            <rect
              x="740"
              y="315"
              rx="10"
              ry="10"
              width="80"
              height="18"
              fill="white"
              stroke="black"
            />
            <text x="780" y="328">Open space</text>
          </g>
        </g>

        <!-- ===== Детализированный Лекторий 2 ===== -->
        <g
          id="lectorium2"
          class="zone lectorium-detailed"
          @mouseenter="showTooltip(lectorium2)"
          @mouseleave="hideTooltip"
          @click="emitZone(lectorium2)"
        >
          <!-- Фон -->
          <rect
            x="100"
            y="150"
            width="420"
            height="470"
            fill="#a8c9ff"
            stroke="#333"
            rx="10"
          />

          <!-- Переговорная 2 -->
          <g class="room">
            <rect
              x="120"
              y="165"
              width="380"
              height="95"
              fill="#bfbfbf"
              stroke="#333"
              rx="6"
            />
            <rect
              x="220"
              y="195"
              width="180"
              height="40"
              fill="white"
              stroke="#333"
              rx="6"
            />
            <text
              x="310"
              y="220"
              text-anchor="middle"
              font-size="14"
              fill="#000"
            >
              Переговорная 2
            </text>
            <g fill="#666" cursor="pointer">
              <circle
                v-for="i in 3"
                :key="'p2a-' + i"
                :cx="180 + i * 70"
                cy="185"
                r="6"
              />

              <circle
                v-for="i in 3"
                :key="'p2b-' + i"
                :cx="180 + i * 70"
                cy="245"
                r="6"
              />
            </g>
          </g>

          <!-- Центральный Лекторий -->
          <g class="main-hall" cursor="pointer">
            <rect
              x="120"
              y="280"
              width="380"
              height="160"
              fill="#a8c9ff"
              stroke="#333"
              rx="6"
            />
            <g fill="#555">
              <g v-for="rIndex in 4" :key="'row-' + rIndex">
                <circle
                  v-for="cIndex in 6"
                  :key="'seat-' + rIndex + '-' + cIndex"
                  :cx="160 + (cIndex - 1) * 55"
                  :cy="300 + (rIndex - 1) * 32"
                  r="8"
                  class="seat"
                />
              </g>
            </g>
            <rect
              x="260"
              y="350"
              width="120"
              height="36"
              fill="#22c55e"
              rx="18"
            />
            <text
              x="320"
              y="372"
              text-anchor="middle"
              font-size="14"
              fill="white"
            >
              Лекторий 2
            </text>
          </g>

          <!-- Переговорная 1 -->
          <g class="room">
            <rect
              x="120"
              y="460"
              width="380"
              height="105"
              fill="#bfbfbf"
              stroke="#333"
              rx="6"
            />
            <rect
              x="220"
              y="490"
              width="180"
              height="40"
              fill="white"
              stroke="#333"
              rx="6"
            />
            <text
              x="310"
              y="515"
              text-anchor="middle"
              font-size="14"
              fill="#000"
            >
              Переговорная 1
            </text>
            <g fill="#666" cursor="pointer">
              <circle
                v-for="i in 3"
                :key="'p1a-' + i"
                :cx="180 + i * 70"
                cy="480"
                r="6"
              />
              <circle
                v-for="i in 3"
                :key="'p1b-' + i"
                :cx="180 + i * 70"
                cy="540"
                r="6"
              />
            </g>
          </g>

          <!-- Дверь -->
          <rect
            x="100"
            y="360"
            width="8"
            height="60"
            fill="#fff"
            stroke="#333"
            rx="2"
          />
        </g>
      </svg>
      <div v-else class="static-image">
        <img src="../../assets/images/icons/plan.png" alt="Схема зала" />
      </div>
      <!-- Tooltip -->
      <div
        v-if="tooltip.visible"
        class="tooltip"
        :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }"
      >
        <strong>{{ tooltip.zone.name }}</strong
        ><br />
        {{ tooltip.zone.desc }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
const hoveredSeat = ref(null);
const isInteractive = ref(true);

const zones = ref([
  {
    id: "cowork",
    name: "Зона коворкинга",
    desc: "Рабочие столы и открытое пространство",
    x: 140,
    y: 720,
    width: 920,
    height: 200,
    color: "#dcdcdc",
  },
  {
    id: "kitchen",
    name: "Кухня",
    desc: "Место для кофе-брейков",
    x: 1100,
    y: 280,
    width: 180,
    height: 120,
    color: "#bfbfbf",
  },
  {
    id: "welcome",
    name: "Welcome zone",
    desc: "Зона встреч и регистрации",
    x: 1260,
    y: 780,
    width: 200,
    height: 90,
    color: "#dcdcdc",
  },
  {
    id: "library",
    name: "Библиотека",
    desc: "Зона книг и переговорных",
    x: 580,
    y: 480,
    width: 400,
    height: 100,
    color: "#cfcfcf",
  },
  {
    id: "staff",
    name: "Штаб",
    desc: "Организационная зона",
    x: 1040,
    y: 600,
    width: 180,
    height: 110,
    color: "#c0c0c0",
  },
  {
    id: "lounge",
    name: "Лаунж-зона",
    desc: "Зона отдыха с диванами",
    x: 1240,
    y: 120,
    width: 200,
    height: 120,
    color: "#c0c0c0",
  },
]);
// const lectorium1 = ref({
//   id: 1,
//   name: "Лекторий 1",
//   description: "Основная зона лекций с 20 местами",
// });
const lectorium2 = ref({
  id: "lectorium2",
  name: "Лекторий 2",
  desc: "Дополнительная лекционная зона, 15 мест",
  x: 60, // было 100 → сместили влево
  y: 120, // было 150 → немного вверх
  width: 420,
  height: 470,
});

const filteredZones = computed(() =>
  zones.value.filter((z) => z.id !== "lectorium2")
);

const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  zone: { name: "", desc: "" },
});

function showTooltip(zone) {
  tooltip.value.zone = zone;
  tooltip.value.visible = true;
}
function moveTooltip(e) {
  if (tooltip.value.visible) {
    const rect = e.currentTarget.getBoundingClientRect();
    tooltip.value.x = e.clientX - rect.left + 15;
    tooltip.value.y = e.clientY - rect.top + 15;
  }
}
function hideTooltip() {
  tooltip.value.visible = false;
}

function showSeatTooltip(seatInfo, e) {
  hoveredSeat.value = seatInfo.name; // запоминаем активное место
  tooltip.value.zone = seatInfo;
  tooltip.value.visible = true;
  const rect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
  tooltip.value.x = e.clientX - rect.left + 10;
  tooltip.value.y = e.clientY - rect.top + 10;
}

function moveSeatTooltip(e) {
  if (tooltip.value.visible) {
    const rect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    tooltip.value.x = e.clientX - rect.left + 10;
    tooltip.value.y = e.clientY - rect.top + 10;
  }
}

function hideSeatTooltip() {
  hoveredSeat.value = null; // сбрасываем подсветку
  tooltip.value.visible = false;
}

const emit = defineEmits(["select-zone"]);
function emitZone(zone) {
  emit("select-zone", zone);
}
</script>

<style scoped>
.switcher {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  margin-top: 12px;
  transition: all 0.3s ease;
}

.switch-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.switch-track {
  width: 50px;
  height: 26px;
  background: #ccc;
  border-radius: 20px;
  position: relative;
  transition: background 0.3s ease;
}

.switch-track.active {
  background: #22c55e;
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.switch-track.active .switch-thumb {
  transform: translateX(24px);
}

.static-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 20px;
}

.static-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.hall-map {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.toggle-btn {
  background: #22c55e;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s ease;
}
.toggle-btn:hover {
  background: #16a34a;
}

.static-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 20px;
}

.static-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.section-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #000;
  margin-bottom: 40px;
  font-family: "Work Sans", sans-serif;
}
svg {
  width: 100%;
  height: auto;
  border: 2px solid #444;
  border-radius: 8px;
  background: #fff;
}

.zone {
  cursor: pointer;
  transition: all 0.25s ease;
}
.zone:hover rect {
  fill: #ffda77 !important;
  stroke-width: 2;
}
.zone-label {
  font-size: 13px;
  font-weight: 600;
  pointer-events: none;
}

.lectorium-detailed .seat:hover {
  fill: #22c55e;
  cursor: pointer;
  filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.6));
}
.lectorium-detailed .room:hover rect {
  fill: #d1d5db;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  cursor: pointer;
}
.tooltip {
  position: absolute;
  background: #333;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
}
</style>
