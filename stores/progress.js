export const useProgressStore = defineStore("progress", () => {
  const stages = ref([])
  const getStages = async () => {
    try {
      const res = await $fetch("list")
      stages.value = res.stages
    } catch (error) {
      console.error(error)
    }
  }
  const updateProgress = async ({ id, game, progress }) => {
    if (!progress) return;

    const stageToUpdate = stages.value.find(stage => stage.id === id);
    if (!stageToUpdate) return;

    const gameToUpdate = stageToUpdate.games.find(existingGame => existingGame.name === game);
    if (!gameToUpdate) return;

    // Применяем изменения к полю bestResult
    gameToUpdate.bestResult = +progress;

    // Пересчитываем сумму всех bestResult на этапе
    const totalBestResult = stageToUpdate.games.reduce((sum, game) => sum + game.bestResult, 0);

    // Если сумма превышает thresholdPoints, устанавливаем isPlayed в true
    if (totalBestResult >= stageToUpdate.thresholdPoints) {
      stageToUpdate.games.forEach(game => {
        game.isPlayed = true;
      });
    }
  }
  return {
    stages,
    getStages,
    updateProgress
  }
})