<template>
  <header class="bg-white">
    <NavBar/>
  </header>
  <RouterView/>
</template>

<script setup>
  import NavBar from './components/Navbar.vue'
  import { onMounted, ref } from 'vue';
  import { db } from './firebase';
  import { collection, doc, getDocs } from 'firebase/firestore';

  // firebaseData = '';

  onMounted(async () => {
    const firebaseData = await getDocs(collection(db, 'clients'));
    firebaseData.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
</script>