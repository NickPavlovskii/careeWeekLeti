
<!-- ============================================ -->
<!-- ======= Сгенерировано ИИ ========== -->
<!-- ============================================ -->
<template> 
  <div class="map-interactive">
    <div class="legend">
      <div class="legend-item">
        <span
          class="legend-color"
          style="background: #a8c9ff"
        />
        Лектории
      </div>
      <div class="legend-item">
        <span
          class="legend-color"
          style="background: #c8e6c9"
        />
        Рабочие зоны
      </div>
      <div class="legend-item">
        <span
          class="legend-color"
          style="background: #ffe0b2"
        />
        Отдых / кухня
      </div>
      <div class="legend-item">
        <span
          class="legend-color"
          style="background: #d5d5d5"
        />
        Служебные
      </div>
    </div>

    <svg
      viewBox="0 0 1000 770"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      @mousemove="moveTooltip"
      @mouseleave="hideTooltip"
    >
      <!-- ============ Building outline ============ -->
      <rect
        x="15"
        y="15"
        width="970"
        height="560"
        fill="#f5f5f5"
        stroke="#aaa"
        stroke-width="2"
        rx="8"
      />

      <!-- ============================================ -->
      <!-- ======= Переговорная 2 (top-left) ========== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.meeting2)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.meeting2)"
      >
        <rect
          x="25"
          y="25"
          width="125"
          height="85"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1.5"
          rx="6"
        />
        <rect
          x="42"
          y="48"
          width="90"
          height="30"
          fill="white"
          stroke="#999"
          rx="4"
        />
        <text
          x="87"
          y="68"
          text-anchor="middle"
          class="room-label"
          font-size="10"
        >
          Переговорная 2
        </text>
        <g fill="#888">
          <circle
            v-for="i in 3"
            :key="'m2t-' + i"
            :cx="52 + i * 22"
            cy="38"
            r="3.5"
          />
          <circle
            v-for="i in 3"
            :key="'m2b-' + i"
            :cx="52 + i * 22"
            cy="92"
            r="3.5"
          />
        </g>
      </g>

      <!-- ============================================ -->
      <!-- ======= Лекторий 1 (large blue top) ======== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.lectorium1)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.lectorium1)"
      >
        <!-- Blue trapezoid background -->
        <path
          d="M160,20 L740,20 L720,215 L170,215 Z"
          fill="#a8c9ff"
          stroke="#5b7fb5"
          stroke-width="1.5"
        />
        <!-- Dashed diagonal corner cut -->
        <line
          x1="690"
          y1="20"
          x2="720"
          y2="215"
          stroke="#5b7fb5"
          stroke-width="1.2"
          stroke-dasharray="8,5"
        />

        <!-- Seats 1–12 (top row) -->
        <g>
          <circle
            v-for="i in 12"
            :key="'s1-' + i"
            :cx="185 + (i - 1) * 43"
            cy="45"
            r="13"
            fill="#333"
            class="seat-numbered"
            :class="{ 'seat-hovered': hoveredSeat === 's1-' + i }"
            @mouseenter="
              (e) =>
                showSeatTooltip(
                  { name: 'Стенд ' + i, desc: 'Лекторий 1, верхний ряд' },
                  's1-' + i,
                  e,
                )
            "
            @mousemove="moveSeatTooltip"
            @mouseleave="hideSeatTooltip"
          />
          <text
            v-for="i in 12"
            :key="'s1t-' + i"
            :x="185 + (i - 1) * 43"
            y="49"
            text-anchor="middle"
            font-size="10"
            fill="white"
            style="pointer-events: none"
          >
            {{ i }}
          </text>
        </g>

        <!-- Green badge "Лекторий 1" -->
        <rect
          x="365"
          y="95"
          width="160"
          height="36"
          fill="#22c55e"
          rx="18"
        />
        <text
          x="445"
          y="118"
          text-anchor="middle"
          fill="white"
          font-size="14"
          font-weight="600"
        >
          Лекторий 1
        </text>

        <!-- Amphitheatre curved lines -->
        <path
          d="M260,145 Q445,125 650,145"
          fill="none"
          stroke="#7faad4"
          stroke-width="1.5"
        />
        <path
          d="M280,160 Q445,140 640,160"
          fill="none"
          stroke="#7faad4"
          stroke-width="1.2"
        />

        <!-- Seats 13–20 (bottom row) -->
        <g>
          <circle
            v-for="i in 8"
            :key="'s2-' + i"
            :cx="300 + (i - 1) * 48"
            cy="190"
            r="13"
            fill="#333"
            class="seat-numbered"
            :class="{ 'seat-hovered': hoveredSeat === 's2-' + i }"
            @mouseenter="
              (e) =>
                showSeatTooltip(
                  { name: 'Стенд ' + (12 + i), desc: 'Лекторий 1, нижний ряд' },
                  's2-' + i,
                  e,
                )
            "
            @mousemove="moveSeatTooltip"
            @mouseleave="hideSeatTooltip"
          />
          <text
            v-for="i in 8"
            :key="'s2t-' + i"
            :x="300 + (i - 1) * 48"
            y="194"
            text-anchor="middle"
            font-size="10"
            fill="white"
            style="pointer-events: none"
          >
            {{ 12 + i }}
          </text>
        </g>
      </g>

      <!-- ============================================ -->
      <!-- ======= Лаунж-зона (top-right) ============= -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.lounge)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.lounge)"
      >
        <rect
          x="830"
          y="20"
          width="150"
          height="65"
          fill="#ffe0b2"
          stroke="#d4a56a"
          stroke-width="1.5"
          rx="6"
        />
        <text
          x="905"
          y="57"
          text-anchor="middle"
          class="zone-label"
          font-size="12"
        >
          Лаунж-зона
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Кухня (right, below lounge) ======== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.kitchen)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.kitchen)"
      >
        <rect
          x="830"
          y="100"
          width="120"
          height="80"
          fill="#ffe0b2"
          stroke="#d4a56a"
          stroke-width="1.5"
          rx="6"
        />
        <text
          x="890"
          y="145"
          text-anchor="middle"
          class="zone-label"
          font-size="12"
        >
          Кухня
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Лекторий 2 (left, blue) ============ -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.lectorium2)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.lectorium2)"
      >
        <rect
          x="25"
          y="135"
          width="130"
          height="230"
          fill="#a8c9ff"
          stroke="#5b7fb5"
          stroke-width="1.5"
          rx="6"
        />

        <!-- Seat grid (5 rows × 4 cols) -->
        <g>
          <g
            v-for="row in 5"
            :key="'l2r-' + row"
          >
            <rect
              v-for="col in 4"
              :key="'l2s-' + row + '-' + col"
              :x="43 + (col - 1) * 26"
              :y="155 + (row - 1) * 28"
              width="14"
              height="14"
              rx="2"
              :fill="
                hoveredSeat === 'l2-' + row + '-' + col ? '#22c55e' : '#5b7fb5'
              "
              stroke="#4a7da8"
              stroke-width="0.5"
              class="seat-dot"
              @mouseenter="
                (e) =>
                  showSeatTooltip(
                    {
                      name: 'Ряд ' + row + ', Место ' + col,
                      desc: 'Лекторий 2',
                    },
                    'l2-' + row + '-' + col,
                    e,
                  )
              "
              @mousemove="moveSeatTooltip"
              @mouseleave="hideSeatTooltip"
            />
          </g>
        </g>

        <!-- Green badge "Лекторий 2" -->
        <rect
          x="38"
          y="315"
          width="105"
          height="28"
          fill="#22c55e"
          rx="14"
        />
        <text
          x="90"
          y="334"
          text-anchor="middle"
          fill="white"
          font-size="11"
          font-weight="600"
        >
          Лекторий 2
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Переговорная 1 (below L2) ========== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.meeting1)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.meeting1)"
      >
        <rect
          x="25"
          y="390"
          width="130"
          height="65"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1.5"
          rx="6"
        />
        <rect
          x="42"
          y="405"
          width="96"
          height="26"
          fill="white"
          stroke="#999"
          rx="4"
        />
        <text
          x="90"
          y="423"
          text-anchor="middle"
          class="room-label"
          font-size="10"
        >
          Переговорная 1
        </text>
        <g fill="#888">
          <circle
            v-for="i in 3"
            :key="'m1t-' + i"
            :cx="48 + i * 22"
            cy="398"
            r="3.5"
          />
          <circle
            v-for="i in 3"
            :key="'m1b-' + i"
            :cx="48 + i * 22"
            cy="445"
            r="3.5"
          />
        </g>
      </g>

      <!-- ============================================ -->
      <!-- ======= Triangles (decor) ================== -->
      <!-- ============================================ -->
      <g
        fill="#ccc"
        stroke="#aaa"
        stroke-width="0.8"
      >
        <polygon points="200,240 215,265 185,265" />
        <polygon points="250,250 265,275 235,275" />
        <polygon points="225,280 240,305 210,305" />
      </g>

      <!-- Scattered circles (tables in open space) -->
      <circle
        cx="310"
        cy="260"
        r="5"
        fill="#d0d0d0"
        stroke="#bbb"
      />
      <circle
        cx="380"
        cy="250"
        r="5"
        fill="#d0d0d0"
        stroke="#bbb"
      />
      <circle
        cx="520"
        cy="260"
        r="5"
        fill="#d0d0d0"
        stroke="#bbb"
      />
      <circle
        cx="590"
        cy="255"
        r="5"
        fill="#d0d0d0"
        stroke="#bbb"
      />

      <!-- ============================================ -->
      <!-- ======= Open space (center area) =========== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.openSpace)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.openSpace)"
      >
        <rect
          x="370"
          y="265"
          width="170"
          height="35"
          fill="white"
          stroke="#bbb"
          stroke-width="1"
          rx="12"
        />
        <text
          x="455"
          y="288"
          text-anchor="middle"
          class="zone-label"
          font-size="13"
        >
          Open space
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Кофе-поинт (right) ================= -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.coffeePoint)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.coffeePoint)"
      >
        <rect
          x="830"
          y="245"
          width="130"
          height="55"
          fill="#ffe0b2"
          stroke="#d4a56a"
          stroke-width="1.5"
          rx="6"
        />
        <text
          x="895"
          y="278"
          text-anchor="middle"
          class="zone-label"
          font-size="11"
        >
          Кофе-поинт
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Center rooms strip ================= -->
      <!-- ============================================ -->

      <!-- Переговорная 3 -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.meeting3)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.meeting3)"
      >
        <rect
          x="220"
          y="325"
          width="135"
          height="38"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1"
          rx="5"
        />
        <text
          x="287"
          y="349"
          text-anchor="middle"
          class="room-label"
          font-size="10"
        >
          Переговорная 3
        </text>
      </g>

      <!-- Horizontal rooms strip (connecting band) -->
      <rect
        x="220"
        y="365"
        width="460"
        height="25"
        fill="#e8e8e8"
        stroke="#bbb"
        stroke-width="1"
        rx="4"
      />
      <!-- Small room dividers inside the strip -->
      <line
        v-for="d in 11"
        :key="'div-' + d"
        :x1="220 + d * 38"
        y1="365"
        :x2="220 + d * 38"
        y2="390"
        stroke="#ccc"
        stroke-width="0.8"
      />

      <!-- Переговорная 4 -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.meeting4)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.meeting4)"
      >
        <rect
          x="530"
          y="325"
          width="135"
          height="38"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1"
          rx="5"
        />
        <text
          x="597"
          y="349"
          text-anchor="middle"
          class="room-label"
          font-size="10"
        >
          Переговорная 4
        </text>
      </g>

      <!-- Принтерная (right of strip) -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.printer)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.printer)"
      >
        <rect
          x="595"
          y="325"
          width="90"
          height="38"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1"
          rx="5"
        />
        <text
          x="640"
          y="349"
          text-anchor="middle"
          class="room-label"
          font-size="9"
        >
          Принтерная
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Second row of small rooms ========== -->
      <!-- ============================================ -->

      <!-- Zoom call -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.zoomCall)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.zoomCall)"
      >
        <rect
          x="130"
          y="395"
          width="80"
          height="35"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1"
          rx="5"
        />
        <text
          x="170"
          y="417"
          text-anchor="middle"
          class="room-label"
          font-size="9"
        >
          Zoom call
        </text>
      </g>

      <!-- Библиотека (left) -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.libraryLeft)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.libraryLeft)"
      >
        <rect
          x="255"
          y="395"
          width="90"
          height="35"
          fill="#d7cce8"
          stroke="#9d8cc0"
          stroke-width="1"
          rx="5"
        />
        <text
          x="300"
          y="417"
          text-anchor="middle"
          class="room-label"
          font-size="9"
        >
          Библиотека
        </text>
      </g>

      <!-- "Зона коворкинга" center label -->
      <text
        x="420"
        y="418"
        text-anchor="middle"
        font-size="10"
        fill="#666"
        font-weight="500"
      >
        Зона коворкинга
      </text>

      <!-- Библиотека (right) -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.libraryRight)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.libraryRight)"
      >
        <rect
          x="470"
          y="395"
          width="90"
          height="35"
          fill="#d7cce8"
          stroke="#9d8cc0"
          stroke-width="1"
          rx="5"
        />
        <text
          x="515"
          y="417"
          text-anchor="middle"
          class="room-label"
          font-size="9"
        >
          Библиотека
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Гардероб (far right) =============== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.wardrobe)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.wardrobe)"
      >
        <rect
          x="875"
          y="340"
          width="95"
          height="100"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1.5"
          rx="6"
        />
        <text
          x="922"
          y="395"
          text-anchor="middle"
          class="zone-label"
          font-size="11"
        >
          Гардероб
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Зона коворкинга (bottom desks) ===== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.cowork)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.cowork)"
      >
        <rect
          x="25"
          y="450"
          width="660"
          height="120"
          fill="#f5f5f5"
          stroke="#ccc"
          stroke-width="1"
          rx="6"
        />

        <!-- 6 desk groups arranged like the image -->
        <g
          v-for="g in 6"
          :key="'dg-' + g"
        >
          <!-- Top pair of tables -->
          <rect
            :x="42 + (g - 1) * 107"
            y="460"
            width="75"
            height="10"
            fill="#d0d0d0"
            stroke="#bbb"
            rx="2"
          />
          <rect
            :x="42 + (g - 1) * 107"
            y="476"
            width="75"
            height="10"
            fill="#d0d0d0"
            stroke="#bbb"
            rx="2"
          />
          <!-- Gap / chairs -->
          <circle
            :cx="58 + (g - 1) * 107"
            cy="496"
            r="3"
            fill="#bbb"
          />
          <circle
            :cx="80 + (g - 1) * 107"
            cy="496"
            r="3"
            fill="#bbb"
          />
          <circle
            :cx="102 + (g - 1) * 107"
            cy="496"
            r="3"
            fill="#bbb"
          />
          <!-- Bottom pair of tables -->
          <rect
            :x="42 + (g - 1) * 107"
            y="506"
            width="75"
            height="10"
            fill="#d0d0d0"
            stroke="#bbb"
            rx="2"
          />
          <rect
            :x="42 + (g - 1) * 107"
            y="522"
            width="75"
            height="10"
            fill="#d0d0d0"
            stroke="#bbb"
            rx="2"
          />
          <!-- Bottom chairs -->
          <circle
            :cx="58 + (g - 1) * 107"
            cy="542"
            r="3"
            fill="#bbb"
          />
          <circle
            :cx="80 + (g - 1) * 107"
            cy="542"
            r="3"
            fill="#bbb"
          />
          <circle
            :cx="102 + (g - 1) * 107"
            cy="542"
            r="3"
            fill="#bbb"
          />
        </g>
      </g>

      <!-- ============================================ -->
      <!-- ======= Локерная ========================== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.lockers)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.lockers)"
      >
        <rect
          x="710"
          y="455"
          width="100"
          height="32"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1"
          rx="5"
        />
        <text
          x="760"
          y="476"
          text-anchor="middle"
          class="room-label"
          font-size="10"
        >
          Локерная
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Штаб ============================== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.staff)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.staff)"
      >
        <rect
          x="615"
          y="500"
          width="130"
          height="60"
          fill="#d5d5d5"
          stroke="#999"
          stroke-width="1.5"
          rx="6"
        />
        <text
          x="680"
          y="535"
          text-anchor="middle"
          class="zone-label"
          font-size="12"
        >
          Штаб
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Welcome zone ====================== -->
      <!-- ============================================ -->
      <g
        class="zone"
        @mouseenter="showTooltip(zones.welcome)"
        @mouseleave="hideTooltip"
        @click="emitZone(zones.welcome)"
      >
        <rect
          x="770"
          y="515"
          width="110"
          height="50"
          fill="#e8f5e9"
          stroke="#7cb57e"
          stroke-width="1.5"
          rx="6"
        />
        <text
          x="825"
          y="545"
          text-anchor="middle"
          class="zone-label"
          font-size="11"
        >
          Welcome zone
        </text>
      </g>

      <!-- ============================================ -->
      <!-- ======= Вход (entrance) =================== -->
      <!-- ============================================ -->
      <g>
        <text
          x="945"
          y="500"
          text-anchor="middle"
          font-size="15"
          font-weight="700"
          fill="#333"
        >
          Вход
        </text>
        <!-- Turnstile / entrance lines -->
        <line
          x1="935"
          y1="510"
          x2="955"
          y2="510"
          stroke="#333"
          stroke-width="2"
        />
        <line
          x1="945"
          y1="505"
          x2="945"
          y2="545"
          stroke="#333"
          stroke-width="2"
        />
        <line
          x1="935"
          y1="522"
          x2="955"
          y2="515"
          stroke="#333"
          stroke-width="1.5"
        />
        <line
          x1="935"
          y1="535"
          x2="955"
          y2="540"
          stroke="#333"
          stroke-width="1.5"
        />
        <path
          d="M960,528 L973,528 L968,523 M973,528 L968,533"
          stroke="#333"
          stroke-width="1.5"
          fill="none"
        />
      </g>

      <!-- ============================================ -->
      <!-- ======= Legend table (bottom, 1–20) ======== -->
      <!-- ============================================ -->
      <rect
        x="15"
        y="595"
        width="970"
        height="165"
        fill="#d6ecf0"
        stroke="#aaa"
        stroke-width="1.5"
        rx="8"
      />

      <g
        font-size="14"
        fill="#333"
        font-family="sans-serif"
      >
        <g
          v-for="row in 5"
          :key="'lr-' + row"
        >
          <g
            v-for="col in 4"
            :key="'lc-' + col"
          >
            <text
              :x="40 + (col - 1) * 245"
              :y="620 + (row - 1) * 30"
              font-weight="600"
            >
              {{ (col - 1) * 5 + row }} –
            </text>
          </g>
        </g>
      </g>
    </svg>

    <!-- Tooltip -->
    <div
      v-if="tooltip.visible"
      class="tooltip"
      :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }"
    >
      <strong>{{ tooltip.zone.name }}</strong>
      <br>
      {{ tooltip.zone.desc }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const hoveredSeat = ref(null);

const zones = reactive({
  lectorium1: {
    id: "lectorium1",
    name: "Лекторий 1",
    desc: "Основной лекционный зал, стенды 1–20",
  },
  lectorium2: {
    id: "lectorium2",
    name: "Лекторий 2",
    desc: "Дополнительный лекторий, ~20 мест",
  },
  meeting1: {
    id: "meeting1",
    name: "Переговорная 1",
    desc: "Переговорная комната для собеседований",
  },
  meeting2: {
    id: "meeting2",
    name: "Переговорная 2",
    desc: "Переговорная комната для собеседований",
  },
  meeting3: {
    id: "meeting3",
    name: "Переговорная 3",
    desc: "Переговорная комната",
  },
  meeting4: {
    id: "meeting4",
    name: "Переговорная 4",
    desc: "Переговорная комната",
  },
  lounge: {
    id: "lounge",
    name: "Лаунж-зона",
    desc: "Зона отдыха с мягкой мебелью",
  },
  kitchen: {
    id: "kitchen",
    name: "Кухня",
    desc: "Место для перекусов",
  },
  coffeePoint: {
    id: "coffeePoint",
    name: "Кофе-поинт",
    desc: "Кофе, чай и напитки",
  },
  openSpace: {
    id: "openSpace",
    name: "Open Space",
    desc: "Открытое рабочее пространство",
  },
  libraryLeft: {
    id: "libraryLeft",
    name: "Библиотека",
    desc: "Зона книг и тихой работы",
  },
  libraryRight: {
    id: "libraryRight",
    name: "Библиотека",
    desc: "Зона книг и тихой работы",
  },
  zoomCall: {
    id: "zoomCall",
    name: "Zoom call",
    desc: "Комната для онлайн-звонков",
  },
  printer: {
    id: "printer",
    name: "Принтерная",
    desc: "Зона печати документов",
  },
  wardrobe: {
    id: "wardrobe",
    name: "Гардероб",
    desc: "Хранение верхней одежды",
  },
  cowork: {
    id: "cowork",
    name: "Зона коворкинга",
    desc: "Рабочие столы для участников",
  },
  lockers: {
    id: "lockers",
    name: "Локерная",
    desc: "Ячейки для хранения вещей",
  },
  staff: {
    id: "staff",
    name: "Штаб",
    desc: "Организационная зона для персонала",
  },
  welcome: {
    id: "welcome",
    name: "Welcome zone",
    desc: "Зона регистрации и встреч",
  },
});

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

function showSeatTooltip(seatInfo, seatId, e) {
  hoveredSeat.value = seatId;
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
  hoveredSeat.value = null;
  tooltip.value.visible = false;
}

const emit = defineEmits(["select-zone"]);
function emitZone(zone) {
  emit("select-zone", zone);
}
</script>

<style scoped>
.map-interactive {
  position: relative;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #555;
}

.legend-color {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

svg {
  width: 100%;
  height: auto;
  border: 2px solid #ddd;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.zone {
  cursor: pointer;
  transition: all 0.25s ease;
}

.zone:hover > rect:first-of-type,
.zone:hover > path:first-of-type {
  filter: brightness(0.88);
  stroke-width: 2.5;
}

.zone-label {
  font-weight: 600;
  fill: #333;
  pointer-events: none;
}

.room-label {
  fill: #444;
  font-weight: 500;
  pointer-events: none;
}

.seat-numbered {
  cursor: pointer;
  transition: fill 0.2s;
}

.seat-numbered:hover,
.seat-hovered {
  fill: #22c55e !important;
  filter: drop-shadow(0 0 5px rgba(34, 197, 94, 0.7));
}

.seat-dot {
  cursor: pointer;
  transition: fill 0.2s;
}

.seat-dot:hover {
  fill: #22c55e !important;
  filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.6));
}

.tooltip {
  position: absolute;
  background: rgba(46, 53, 92, 0.95);
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 280px;
}

@media (max-width: 768px) {
  .legend {
    gap: 8px;
  }
  .legend-item {
    font-size: 11px;
  }
  .legend-color {
    width: 12px;
    height: 12px;
  }
  svg {
    border-radius: 8px;
  }
  .tooltip {
    font-size: 11px;
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {
  .legend {
    gap: 6px;
    margin-bottom: 10px;
  }
  .legend-item {
    font-size: 10px;
  }
}
</style>
