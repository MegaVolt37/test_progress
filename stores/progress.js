export const useProgressStore = defineStore("progress", () => {
  const data = [
    {
      "name": "Этап первый",
      "id": 1,
      "thresholdPoints": 25,
      "games": [
        {
          "name": "Игра 1.1",
          "bestResult": 0,
          "isPlayed": false
        }
      ]
    },
    {
      "name": "Этап второй",
      "id": 2,
      "thresholdPoints": 50,
      "games": [
        {
          "name": "Игра 2.1",
          "bestResult": 0,
          "isPlayed": false
        }
      ]
    },
    {
      "id": 3,
      "name": "Этап третий",
      "thresholdPoints": 100,
      "games": [
        {
          "name": "Игра 3.1",
          "bestResult": 0,
          "isPlayed": false
        }
      ]
    },
    {
      "id": 4,
      "name": "Этап четвертый",
      "thresholdPoints": 200,
      "games": [
        {
          "name": "Игра 4.1",
          "bestResult": 0,
          "isPlayed": false
        }
      ]
    },
    {
      "id": 5,
      "name": "Этап пятый",
      "thresholdPoints": 500,
      "games": [
        {
          "name": "Игра 5.1",
          "bestResult": 0,
          "isPlayed": false
        }
      ]
    },
    {
      "id": 6,
      "name": "Этап шестой",
      "thresholdPoints": 1000,
      "games": [
        {
          "name": "Игра 6.1",
          "bestResult": 0,
          "isPlayed": false
        },
        {
          "name": "Игра 6.2",
          "bestResult": 0,
          "isPlayed": false
        }
      ]
    }
  ]
  const stages = ref([])
  const getStages = async () => {
    try {
      const res = await $fetch("list")
      stages.value = res.stages
    } catch (error) {
      stages.value = JSON.parse(JSON.stringify(data))
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