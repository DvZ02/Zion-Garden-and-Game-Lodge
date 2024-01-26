<template>
    <div v-if="colour" class="p-8 bg-ziongreen my-4 md:mx-5 md:w-[100%] shadow-md rounded-2xl">
        <div class="flex items-center justify-center mb-4">
            <h1 class="md:text-[36px] text-[2svh] items-center font-title">{{ title }}</h1>
        </div>
        <div>
            <div v-if="allignment" class="container">
                <div class="row">
                    <div class="col">
                        <img class="mt-3 md:w-[25svw] object-contain rounded-[7%] mx-auto" :src="image" alt="...">
                    </div>
                    <div class="col items-center justify-center flex">
                            <div class="list-disc" v-if="bullets">
                                <li class="font-body md:text-2xl font-semibold text-[10px]" 
                                    v-for="(b, index) in bullets" :key="index">{{b}}</li>
                            </div>
                            <div v-else>
                                <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                            </div>
                    </div>                    
                </div>
            </div>   
            <div v-else class="container">
                <div class="row">
                    <div class="col items-center justify-center flex">
                        <div class="list-disc" v-if="bullets">
                            <li class="font-body md:text-2xl font-semibold text-[10px]" 
                                v-for="(b, index) in bullets" :key="index">{{b}}</li>
                        </div>
                        <div v-else>
                            <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                        </div>
                    </div>  
                    <div class="col">
                        <img class="mt-3 md:w-[25svw] object-contain rounded-[7%] mx-auto" :src="image" alt="...">
                    </div>                  
                </div>
            </div>           
        </div>
    </div>
    <div v-else class="p-8 bg-white my-4 md:w-[100%] md:mx-5 inner-shadow rounded-2xl">
        <div class="flex items-center justify-center mb-4">
            <h1 class="md:text-[36px] text-[2svh] items-center font-title">{{ title }}</h1>
        </div>
        <div>
            <div v-if="allignment" class="container">
                <div class="row">
                    <div class="col">
                        <img class="mt-3 md:w-[25svw] object-contain rounded-[7%] mx-auto" :src="image" alt="...">
                    </div>
                    <div class="col items-center justify-center flex">
                        <div class="list-disc" v-if="bullets">
                            <li class="font-body md:text-2xl font-semibold text-[10px]" 
                                v-for="(b, index) in bullets" :key="index">{{b}}</li>
                        </div>
                        <div v-else>
                            <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                        </div>
                    </div>                    
                </div>
            </div>   
            <div v-else class="container">
                <div class="row">
                    <div class="col items-center justify-center flex">
                        <div class="list-disc" v-if="bullets">
                            <li class="font-body md:text-2xl font-semibold text-[10px]" 
                                v-for="(b, index) in bullets" :key="index">{{b}}</li>
                        </div>
                        <div v-else>
                            <p class="font-body text-center md:text-2xl font-semibold text-[10px]">{{ text }}</p>
                        </div>
                    </div>  
                    <div class="col">
                        <img class="mt-3 md:w-[25svw] object-contain rounded-[7%] mx-auto" :src="image" alt="...">
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
            require: false,
            default: null
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
        },
        bullets: {
            type: [Array, String],
            require: false,
            default: null
        }
    })
</script>

<script>
    export default {
        name: 'CardComponent',

        methods: {
            loadImage(url){
                return require(`../assets/${url}`)
            }
        }
    }
</script>

<style>
    .inner-shadow {
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
</style>