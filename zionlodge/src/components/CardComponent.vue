<template>
    <div class="flex items-center justify-center p-10 bg-ziongreen my-4 md:w-[45%] md:mx-5 shadow-xl rounded-2xl">
        <h1 class="md:text-[40px] text-[2svh] items-center font-title">{{ title }}</h1>
        <img class="md:w-[15svw] rounded-[7%] mx-auto mt-12" :src="require(`@/assets/${image}`)" alt="...">
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    defineProps({
        title:{ 
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        text: {
            type: String,
            require: true
        }
    })
</script>

<script>
    export default {
        name: 'CardComponent',
    }
</script>