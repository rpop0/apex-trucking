<template>
  <div class="container px-5 md:px-0 md:mx-auto mt-20 pb-10">
    <div class="flex md:justify-between justify-center items-center">
      <div class="md:text-left text-center">
        <img src="@/assets/images/logo.svg" style="height: 60px">
        <div class="flex gap-7 mt-3">
          <a href="#" class="text-gray-400"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
          <a href="#" class="text-gray-400"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          <a href="#" class="text-gray-400"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          <a href="#" class="text-gray-400"><font-awesome-icon icon="fa-brands fa-discord" /></a>
          <a href="#" class="text-gray-400"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
        </div>
        <p class="text-gray-400 font-light mt-3">www.apex-express.net</p>
      </div>
      <div class="footer-links">
        <div class="flex gap-10">
          <NuxtLink class="text-base font-semibold" to="/">ACASĂ</NuxtLink>
          <a class="text-base font-semibold" href="#">DESPRE NOI</a>
          <a class="text-base font-semibold" href="#">CONTACT US</a>
          <a class="text-base font-semibold" href="#">DRIVER HUB</a>
          <NuxtLink class="text-base font-semibold" to="apply-now">APLICĂ</NuxtLink>
        </div>
        <p class="text-right text-gray-500 mt-6 font-light">Copyright 2022 - 2023 © Apex Team</p>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "Footer.vue",
  components: {FontAwesomeIcon}
}
</script>

<style scoped>
</style>
