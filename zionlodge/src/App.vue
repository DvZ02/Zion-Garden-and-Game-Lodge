<template>
 <div id='app'>
    Hello World!
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