<template>
  <div class="app-change-progress">
    <div
      class="app-change-progress__wrapper"
      v-for="(item, index) in stages"
      :key="index"
    >
      <span class="app-change-progress__title">{{ item.name }}</span>
      <ul class="app-change-progress__items">
        <li
          class="app-change-progress__item"
          v-for="(game, index_game) in item.games"
          :key="index_game"
        >
          <p class="app-change-progress__name">
            Название игры: <span>{{ game.name }}</span>
          </p>
          <p class="app-change-progress__progress">
            Прогресс: <span>{{ game.bestResult }}</span>
          </p>
          <input
            class="app-change-progress__field"
            v-if="
              isChanged &&
              isActiveInputId === item.id &&
              isActiveInputIndex === index_game
            "
            type="tel"
            :id="index"
            v-model="progress"
          />
          <button
            class="app-change-progress__button"
            @click="toggleProgress(item.id, game.name, index_game)"
          >
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

<style lang="scss">
.app-change-progress {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 30px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__title {
    font-weight: 700;
  }
  &__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__name {
    span {
      font-weight: 700;
    }
  }

  &__progress {
    span {
      font-weight: 700;
    }
  }

  &__field {
    border: 1px solid $purple;
    border-radius: 30px;
    padding: 6px 20px;
  }

  &__button {
    cursor: pointer;
    border: 1px solid $purple;
    border-radius: 30px;
    background-color: $light-gray;
    padding: 6px 10px;
  }
}
</style>