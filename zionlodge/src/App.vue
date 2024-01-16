<template>
 <div id='app'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img id="nav-logo" src="./assets/logo.svg" alt="Logo" width="70%" height="auto" class="d-inline-block align-text-top">
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ACCOMODATION</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GALLERY</a>
          </li>
        </ul>
      </div>
  </nav>
 </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { db } from './firebase';
  import { collection, doc, getDocs } from 'firebase/firestore';

  const docPath = 'clients/daniel';
  // firebaseData = '';

  onMounted(async () => {
    const firebaseData = await getDocs(collection(db, 'clients'));
    firebaseData.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
</script>