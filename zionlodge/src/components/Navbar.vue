<template>
  <header class="bg-white">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <img class="w-40" id="nav-logo" src="../assets/logo.svg" alt="...">
      </div>
      <div ref="navlinks" class="duration-500 md:static absolute bg-white md:min-h-fit min-h-[20vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[6vw] gap-8">
            <li>
              <a class="hover:text-gray-500" href="#">HOME</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">ACCOMODATION</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">ABOUT US</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">CONTACT US</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">GALLERY</a>
            </li>
          </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon ref="menuicon" @click="toggleMenu()" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const navlinks = ref(null) ;
  const menuicon = ref(null) ;

  const toggleMenu = () => {
    menuicon.value.name = menuicon.value.name === 'menu' ? 'close' : 'menu';
    navlinks.value.classList.toggle('top-[9%]');
  }

</script>

<script>
  export default {
    name: 'NavBar',
  }
</script>
