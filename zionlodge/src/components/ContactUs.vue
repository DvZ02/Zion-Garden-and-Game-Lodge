<template>
    <!-- <div class="flex items-center justify-center">
        <div class="bg-ziongreen md:h-[30svh] h-[15svh] shadow-xl rounded-2xl md:mb-14 mb-8">

        </div>
    </div> -->
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="container">
                    <div class="row">
                        <img class="md:w-[15svw] rounded-[7%] mx-auto mt-12" src="../assets/sunset_1.jpg" alt="...">
                    </div>
                    <div class="row">
                        <img class="md:w-[15svw] rounded-[7%] mx-auto mt-3" src="../assets/roos_1.png" alt="...">
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="bg-ziongreen md:h-[98%] h-[15svh] shadow-xl rounded-2xl md:mb-10 mb-8 font-body text-xl">
                    <div class="flex items-center justify-center p-6">
                        <h1 class="md:text-[40px] text-[2svh] items-centerfont-bold font-title">Contact Us</h1>
                    </div>
                    <div>
                        <div class="flex space-x-4">
                            <label class="md:w-[38%] mx-auto flex">Name:</label>
                            <label class="md:w-[38%] mx-auto flex">Contact Number:</label>
                        </div>
                        <div class="flex space-x-4">
                            <input class="md:w-[40%] mx-auto my-2 p-2 flex" type="text" placeholder="Name">
                            <input class="md:w-[40%] mx-auto my-2 p-2 flex" type="text" placeholder="Contact Number">
                        </div>
                        <label class="md:w-[88%] mx-auto flex">Email:</label>
                        <input class="md:w-[90%] mx-auto my-2 p-2 flex" type="text" placeholder="Email">
                        <label class="md:w-[88%] mx-auto flex">Your Query:</label>
                        <input class="md:w-[90%] md:h-[11svh] mx-auto my-2 p-2 flex" type="text" placeholder="Your Query">
                        <button class="bg-buttonface md:w-[33%] md:h-[6svh] mx-auto mt-[3svh] flex items-center justify-center text-center text-4xl rounded-3xl">Submit</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <img class="md:w-[15svw] rounded-[7%] mx-auto mt-12" src="../assets/deck_view_1.jpg" alt="...">
                    </div>
                    <div class="row">
                        <img class="md:w-[15svw] rounded-[7%] mx-auto mt-3" src="../assets/sunset_2.jpg" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
</script>

<script>
    export default {
        name: 'ContactUs',
    }
</script>