<template>
    <div v-if="colour" class="p-8 bg-ziongreen my-4 md:w-[45%] md:mx-5 shadow-md rounded-2xl">
        <div class="flex items-center justify-center mb-4">
            <h1 class="md:text-[40px] text-[2svh] items-center font-title">{{ title }}</h1>
        </div>
        <div>
            <div v-if="allignment" class="container">
                <div class="row">
                    <div class="col">
                        <img class="mt-3 md:w-[18svw] rounded-[7%] mx-auto" src="../assets/sunset_1.jpg" alt="...">
                    </div>
                    <div class="col items-center justify-center flex">
                        <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                    </div>                    
                </div>
            </div>   
            <div v-else class="container">
                <div class="row">
                    <div class="col items-center justify-center flex">
                        <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                    </div>  
                    <div class="col">
                        <img class="mt-3 md:w-[18svw] rounded-[7%] mx-auto" src="../assets/sunset_1.jpg" alt="...">
                    </div>                  
                </div>
            </div>           
        </div>
    </div>
    <div v-else class="p-8 bg-white my-4 md:w-[45%] md:mx-5 inner-shadow rounded-2xl">
        <div class="flex items-center justify-center mb-4">
            <h1 class="md:text-[40px] text-[2svh] items-center font-title">{{ title }}</h1>
        </div>
        <div>
            <div v-if="allignment" class="container">
                <div class="row">
                    <div class="col">
                        <img class="mt-3 md:w-[18svw] rounded-[7%] mx-auto" src="../assets/sunset_1.jpg" alt="...">
                    </div>
                    <div class="col items-center justify-center flex">
                        <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                    </div>                    
                </div>
            </div>   
            <div v-else class="container">
                <div class="row">
                    <div class="col items-center justify-center flex">
                        <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                    </div>  
                    <div class="col">
                        <img class="mt-3 md:w-[18svw] rounded-[7%] mx-auto" src="../assets/sunset_1.jpg" alt="...">
                    </div>                  
                </div>
            </div>           
        </div>
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
        },
        allignment: {
            type: Boolean,
            require: false,
            default: true
        },
        colour: {
            type: Boolean,
            require: false,
            default: true
        }
    })
</script>

<script>
    export default {
        name: 'CardComponent',
    }
</script>

<style>
    .inner-shadow {
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
</style>