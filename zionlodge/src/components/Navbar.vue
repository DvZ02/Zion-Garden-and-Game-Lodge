<template>
    <nav class="flex justify-between items-center w-[92%] mx-auto md:text-2xl">
      <div>
        <img class="md:w-48 w-24" id="nav-logo" src="../assets/logo.svg" alt="...">
      </div>
      <div class="duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul ref="navlinks"  class="flex md:flex-row flex-col md:items-center md:gap-[6vw] gap-8">
          <RouterLink class="hover:text-gray-500" to="/">HOME</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/accomodation">ACCOMODATION</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/about">ABOUT US</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/contact">CONTACT US</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/gallery">GALLERY</RouterLink>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon ref="menuicon" @click="toggleMenu()" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
</template>

<script setup>
  import { ref } from 'vue';

  const menuicon = ref(null) ;

  const toggleMenu = () => {
    menuicon.value.name = menuicon.value.name === 'menu' ? 'close' : 'menu';
    navlinks.value.c
    lassList.toggle('top-[9%]');
  }
</script>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style>
  nav a.router-link-exact-active {
    color: blue
  }
</style>