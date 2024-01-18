<template>
    <div class="flex items-center justify-center p-10">
        <h1 class="md:text-[44px] text-[2svh] items-centerfont-bold font-title">{{ title }}</h1>
    </div>
</template>

<script setup>
    defineProps({
        title:{ 
            type: String,
            require: true
        }
    })
</script>

<script>
    export default {
        name: 'TitleComponent',
    }
</script>