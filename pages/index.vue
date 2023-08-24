<template>
  <div class="page-home">
    <div class="container">
      <AppProgress :stages="stages" />
      <div class="page-home__progress">
        <p class="page-home__progress-title">Изменение прогресса</p>
        <AppChangeProgress :stages="stages" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { getStages } = useProgressStore();
const { stages } = storeToRefs(useProgressStore());
await useAsyncData(() => getStages());
</script>
<style lang="scss">
.page-home {
  margin-top: 70px;
  &__progress {
    margin-top: 50px;
  }

  &__progress-title {
    font-weight: 700;
    text-align: center;
  }
}
</style>