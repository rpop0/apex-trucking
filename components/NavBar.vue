<template>
  <div class="navbar">
    <div class="container mx-auto">
      <div class="flex mx-auto
          md:flex md:justify-between md:items-center navbar-mobile py-7">
        <div class="flex justify-between md-full">
          <img class="logo ml-8 md:ml-0" src="../assets/images/logo.svg">
          <button
              @click="showMenu = !showMenu"
              type="button"
              class="
                text-gray-800
                focus:outline-none
                mr-8
                block lg:hidden
              "
          >
            <div class="hamburger" :class="[showMenu ? 'hamburger-is-open' : '']">
              <div class="hamburger_item hamburger_item--first" :class="[showMenu ? 'hamburger-is-open' : '']"></div>
              <div class="hamburger_item hamburger_item--middle" :class="[showMenu ? 'hamburger-is-open' : '']"></div>
              <div class="hamburger_item hamburger_item--last" :class="[showMenu ? 'hamburger-is-open' : '']"></div>
            </div>
          </button>
        </div>
        <div :class="showMenu ? 'flex' : 'hidden'" class="
              navbar-links
              absolute lg:relative
              top-0 lg:top-auto
              bg-white lg:bg-transparent
              max-w-max lg:max-w-none
              flex-col lg:flex
              slide-out-left-mobile
              shadow-lg
              lg:shadow-none
              lg:space-y-0
              lg:flex-row
              lg:items-center
              lg:space-x-10
              lg:mt-0 lg:gap-14 gap-6 font-semibold items-center">
          <img class="logo md:hidden" src="../assets/images/logo.svg">
          <NuxtLink to="/">Acasă</NuxtLink>
          <a href="#">Despre Noi</a>
          <a href="#">Contact</a>
          <NuxtLink to="/dashboard">Driver Hub</NuxtLink>
          <NuxtLink to="apply" class="btn py-2 px-7 rounded-full">Aplică acum!</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "NavBar",
  components: {FontAwesomeIcon},
  data () {
    return {
      showMenu: false,
    }
  }
}
</script>

<style scoped>

</style>
