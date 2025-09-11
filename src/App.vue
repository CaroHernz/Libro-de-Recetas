<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
</script>

<template>
  <div id="app">
    <Navbar />
  <div class="app-container">
    <router-view v-slot="{Component}">
      <transition name="page-flip" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
  </div>
</template>

<style scoped>

</style>
