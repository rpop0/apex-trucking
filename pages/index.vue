<template>
  <MainHeader />
  <AboutUs />
  <OurCore />
  <Divisions />
</template>

<script>
import MainHeader from "~/components/MainHeader.vue";
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import OurCore from "~/components/OurCore.vue";
import AboutUs from "~/components/AboutUs.vue";
import Divisions from "~/components/Divisions.vue";

export default {

  name: "index",
  components: {NavBar, MainHeader, Footer, OurCore, AboutUs, Divisions},
}
</script>

<style scoped>
</style>
