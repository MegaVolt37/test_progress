<template>
  <div class="page-home">
    <div class="container">
      <AppProgress :stages="stages" />
      <p>Изменение прогресса</p>
      <AppChangeProgress :stages="stages" />
    </div>
  </div>
</template>

<script setup>
const { getStages } = useProgressStore();
const { stages } = storeToRefs(useProgressStore());
const config = useRuntimeConfig();
console.log(config.public.API_URL);
const progress = ref(null);
await useAsyncData(() => getStages());
</script>
<style lang="scss">
.page-home {
  margin-top: 70px;
}
</style>