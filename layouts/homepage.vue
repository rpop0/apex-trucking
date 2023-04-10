<template>
  <div class="home-app">
    <NavBar />
    <div>
      <slot/>
    </div>
  </div>

</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
