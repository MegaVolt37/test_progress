<template>
  <div>
    <div v-for="(item, index) in stages" :key="index">
      {{ item.name }}
      <ul>
        <li v-for="(game, index_game) in item.games" :key="index_game">
          <p>Название игры: {{ game.name }}</p>
          <p>Прогресс: {{ game.bestResult }}</p>
          <input
            v-if="
              isChanged &&
              isActiveInputId === item.id &&
              isActiveInputIndex === index_game
            "
            type="tel"
            :id="index"
            v-model="progress"
          />
          <button @click="toggleProgress(item.id, game.name, index_game)">
            {{ textBtn(item.id, index_game) }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { updateProgress } = useProgressStore();
const props = defineProps({
  stages: {
    type: Array,
    required: true,
  },
});
const isChanged = ref(false);
const isActiveInputIndex = ref(null);
const isActiveInputId = ref(null);
const progress = ref(null);
const textBtn = (id, index) => {
  if (isActiveInputIndex.value === index && isActiveInputId.value === id) {
    return "Сохранить";
  } else {
    return "Изменить прогресс";
  }
};
const toggleProgress = (id, name, index) => {
  if (!isChanged.value) {
    isActiveInputIndex.value = index;
    isActiveInputId.value = id;
    isChanged.value = true;
  } else {
    if (isActiveInputIndex.value === index && isActiveInputId.value === id) {
      updateProgress({ id, game: name, progress: progress.value });
      isChanged.value = false;
      isActiveInputIndex.value = null;
      isActiveInputId.value = null;
      progress.value = null;
    }
  }
};
</script>

<style>
</style>