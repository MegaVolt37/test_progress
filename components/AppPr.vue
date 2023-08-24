<template>
  <div class="app">
    <div class="scale">
      <div
        class="scale__tick"
        v-for="(value, index) in scaleValues"
        :key="index"
      >
        {{ value }}
      </div>
    </div>
    <div class="random-number" :style="randomNumberStyle">
      {{ randomNumber }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const scaleValues = [0, 25, 50, 200, 500, 1000];
const randomNumber = ref(
  Math.floor(Math.random() * (scaleValues[scaleValues.length - 1] + 1))
);
const maxValue = computed(() => Math.max(...scaleValues));

const randomNumberStyle = computed(() => {
  const position = (randomNumber.value / maxValue.value) * 100;
  return {
    position: "absolute",
    left: `${position}%`,
    transform: "translateX(-50%)", // Центрирование по горизонтали
  };
});
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: rem(50);
}

.scale {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 rem(20);
}

.scale__tick {
  flex: 1;
  text-align: center;
  font-size: rem(14);
  opacity: 0.6;
}

.random-number {
  margin-top: rem(20);
  font-size: rem(18);
}
</style>