<template>
  <header class="bg-white">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <img class="w-36" id="nav-logo" src="../assets/logo.svg" alt="...">
      </div>
      <div class="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
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
        <ion-icon onclick="toggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script>

function toggleMenu(e){
  e.name = e.name === 'menu' ? 'close' : 'menu';
}

export default {
  name: 'NavBar',
}
</script>

<!-- <style>
  .navbar-brand{
    margin-left: 5%;  
    width: 20%;
  }


  .navbar-nav{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }


 .nav-item {
  /* width: 100%; */
  font-size: xx-large;
  margin-left: 5%;
 }
</style> -->
