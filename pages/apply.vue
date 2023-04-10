<template>
  <NuxtLayout :name="layout">
    <ApplyForm />
  </NuxtLayout>
</template>

<script>
export default {
  name: "apply.vue"
}
</script>

<script setup>
const layout = "homepage";
</script>

<style scoped>

</style>
