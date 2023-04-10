<template>
  <div style="background-color: #F8F8F8;">
    <div class="flex h-screen overflow-hidden">
      <Sidebar />
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden transition-all lg:ml-0 ml-20">
        <main>
          <div class="px-4 sm:px-6 lg:pl-4 lg:pr-12 py-8 w-full max-w-9xl mx-auto">
            <Header title="Pagina principala" />
            <Statistics />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>


import Sidebar from "~/components/hub/Sidebar.vue";
</script>

<style scoped>

</style>
