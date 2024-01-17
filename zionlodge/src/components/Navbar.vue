<template>
  <header class="bg-white">
    <nav class="flex justify-between items-center w-[92%] mx-auto md:text-2xl">
      <div>
        <img class="md:w-48 w-24" id="nav-logo" src="../assets/logo.svg" alt="...">
      </div>
      <div ref="navlinks" class="duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[6vw] gap-8">
            <li>
              <a ref="home" @click="setActicve(1)" class="hover:text-gray-500" href="#">HOME</a>
            </li>
            <li>
              <a ref="accomodation" @click="setActicve(2)" class="hover:text-gray-500" href="#">ACCOMODATION</a>
            </li>
            <li>
              <a ref="about" @click="setActicve(3)" class="hover:text-gray-500" href="#">ABOUT US</a>
            </li>
            <li>
              <a ref="contact" @click="setActicve(4)" class="hover:text-gray-500" href="#">CONTACT US</a>
            </li>
            <li>
              <a ref="gallery" @click="setActicve(5)" class="hover:text-gray-500" href="#">GALLERY</a>
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
  const home = ref(null);
  const accomodation = ref(null);
  const about = ref(null);
  const contact = ref(null);
  const gallery = ref(null);

  const toggleMenu = () => {
    menuicon.value.name = menuicon.value.name === 'menu' ? 'close' : 'menu';
    navlinks.value.classList.toggle('top-[9%]');
  }

  const setActicve = (el) => {
    switch (el) {
      case 1:
        home.value.classList.toggle('text-ziongreen');
        home.value.classList.toggle('text-3xl');
        accomodation.value.classList.toggle('text-black');
        about.value.classList.toggle('text-black');
        contact.value.classList.toggle('text-black');
        gallery.value.classList.toggle('text-black');
        break;
      case 2:
        home.value.classList.toggle('text-black');
        accomodation.value.classList.toggle('text-blue-500');
        about.value.classList.toggle('text-black');
        contact.value.classList.toggle('text-black');
        gallery.value.classList.toggle('text-black');
        break;
      case 3:
        home.value.classList.toggle('text-black');
        accomodation.value.classList.toggle('text-black');
        about.value.classList.toggle('text-blue-500');
        contact.value.classList.toggle('text-black');
        gallery.value.classList.toggle('text-black');
        break;
      case 4:
        home.value.classList.toggle('text-black');
        accomodation.value.classList.toggle('text-black');
        about.value.classList.toggle('text-black');
        contact.value.classList.toggle('text-blue-500');
        gallery.value.classList.toggle('text-black');
        break;
      case 5:
        home.value.classList.toggle('text-black');
        accomodation.value.classList.toggle('text-black');
        about.value.classList.toggle('text-black');
        contact.value.classList.toggle('text-black');
        gallery.value.classList.toggle('text-blue-500');
        break;
    }
  }

</script>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style>
 .active{
    color: #2D7A4C;
 }
</style>