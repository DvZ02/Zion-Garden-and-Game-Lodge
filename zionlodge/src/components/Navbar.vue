<template>
    <nav class="flex justify-between items-center w-[92%] mx-auto md:text-2xl">
      <div>
        <img class="md:w-72 w-24" id="nav-logo" src="../assets/logo.svg" alt="...">
      </div>
      <div ref="navlinks" class="duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul   class="flex md:text-3xl md:flex-row flex-col md:items-center md:gap-[6vw] gap-8">
          <RouterLink class="hover:text-gray-500" to="/">HOME</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/accomodation">ACCOMODATION</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/about">ABOUT US</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/contact">CONTACT US</RouterLink>
          <RouterLink class="hover:text-gray-500" to="/gallery">GALLERY</RouterLink>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <Icon ref="menuicon" @click="toggleMenu()" icon="mingcute:menu-fill" class="text-3xl cursor-pointer md:hidden"></Icon>
      </div>
    </nav>
</template>

<script setup>
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';

  const menuicon = ref(null) ;
  const navlinks = ref(null);

  const toggleMenu = () => {
    // console.log(menuicon.value.set(_name, 'material-symbols:close'));
    navlinks.value.classList.toggle('top-[9%]');
  }
</script>

<script>
  export default {
    name: 'NavBar',
    components: {
      Icon,
    },
  }
</script>

<style>
  nav a.router-link-exact-active {
    color: #9BA78B;
    font-size: xx-large;
    font-weight: bold;
  }
</style>