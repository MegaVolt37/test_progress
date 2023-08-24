<template>
  <div class="app-progress">
    <div class="app-progress__icons" :style="readColumns()">
      <span
        class="app-progress__icon"
        v-for="(icon, index) in stages"
        :key="index"
      >
        <IconsIconStar
          :class="bem('app-progress__icons-star', { fill: filledIcon(icon) })"
          v-if="index !== stages?.length - 1"
        />
        <NuxtIcon
          v-else
          class="app-progress__icons-cup"
          name="cup"
          filled
          width="46"
          height="24"
        />
      </span>
    </div>
    <div class="app-progress__bar" :style="readColumns()">
      <div
        class="app-progress__bar-wrapper"
        v-for="(icon, index) in stages"
        :key="index"
      >
        <span
          class="app-progress__bar-line"
          v-show="index < stages?.length - 1"
        ></span>
        <div
          class="app-progress__bar-fill"
          :style="{ width: `${fillWidth(index)}%` }"
        ></div>
      </div>
    </div>
    <div class="app-progress__values" :style="readColumns()">
      <span class="app-progress__value">0</span>
      <span
        class="app-progress__value"
        v-for="(icon, index) in stages"
        :key="index"
        :style="{
          transform: shouldShowReadSum(icon, index) ? `translateX(30%)` : '',
        }"
        ><span v-if="shouldShowReadSum(icon, index)">{{ readSum }} / </span
        >{{ icon.thresholdPoints }}</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stages: {
    type: Array,
  },
});
function calculateTotalBestResult(data) {
  let totalBestResult = 0;
  const stack = [...data];
  while (stack.length > 0) {
    const currentItem = stack.pop();
    if (Array.isArray(currentItem.games)) {
      currentItem.games.forEach((game) => {
        totalBestResult += game.bestResult;
      });
    }
  }
  return totalBestResult;
}
const readSum = computed(() => calculateTotalBestResult(props.stages));
const readColumns = (value = props.stages?.length) => {
  return `grid-template-columns: repeat(${value}, 1fr);`;
};
const filledIcon = (icon) => {
  const reachedThreshold = readSum.value >= icon.thresholdPoints;
  return icon.games.some((game) => game.isPlayed) && reachedThreshold;
};

const shouldShowReadSum = (icon, index) => {
  const prevIcon = index > 0 ? props.stages[index - 1] : null;
  return (
    isInRange(
      readSum.value,
      prevIcon ? prevIcon?.thresholdPoints : 0,
      icon.thresholdPoints
    ) ||
    (index === 0 && readSum.value === 0) ||
    (index === props.stages?.length - 1 &&
      readSum.value >= props.stages[index].thresholdPoints)
  );
};

const isInRange = (number, min, max) => {
  return number > min && number <= max;
};

const fillWidth = (index) => {
  const currentIcon = props.stages[index];
  const previousIcon = index > 0 ? props.stages[index - 1] : null;

  const previousThreshold = previousIcon ? previousIcon.thresholdPoints : 0;
  const currentThreshold = currentIcon.thresholdPoints;

  if (readSum.value >= currentThreshold) {
    return 100;
  } else if (readSum.value >= previousThreshold) {
    const range = currentThreshold - previousThreshold;
    const distance = readSum.value - previousThreshold;
    return (distance / range) * 100;
  } else {
    return 0;
  }
};
</script>

<style lang="scss">
.app-progress {
  width: 100%;
  &__icons {
    width: 100%;
    position: relative;
    display: grid;
    justify-items: flex-end;
  }
  &__icon {
    text-align: right;
  }
  &__icons-cup svg {
    width: rem(46);
    height: rem(24);
  }
  &__icons-star {
    &--fill {
      fill: $purple;
    }
  }
  &__bar-wrapper {
    display: grid;
    justify-items: flex-end;
    height: 100%;
    position: relative;
  }
  &__bar {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: rem(40);
    border-radius: rem(30);
    background-color: $light-gray;
    display: grid;
  }
  &__bar-line {
    display: inline-block;
    position: relative;
    margin-right: rem(9);
    z-index: 2;
    width: 1px;
    height: 100%;
    opacity: 0.2;
    background: #000;
    mix-blend-mode: hard-light;
  }
  &__bar-fill {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    z-index: 1;
    background-color: $purple;
  }
  &__values {
    width: 100%;
    margin-top: rem(13);
    display: grid;
    justify-items: flex-end;
    position: relative;
  }
  &__value {
    flex: 1;
    text-align: right;
    &:first-child {
      position: absolute;
      left: 0;
    }
  }
}
</style>