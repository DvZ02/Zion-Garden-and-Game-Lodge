<template>
    <TitleComponent title="Communal Areas"/>
    <div class="container">
        <div class="row -mx-[16%]">
            <div class="col">
                <CardComponent title="Communal Kitchen & Lounge" :image="sLapa" 
                    text="The open kitchen overlooks the beautiful garden and bushveld and is fully equipped with all kitchen utensils, cutlery, and crockery for 20 guests,
                    fridges, a 3-plate gas stove and a patio gas braai.  The lounge area as spacious with a great outdoor feeling to it. 
                    The furniture gives a wonderful earthly feeling of leather and food and this area allows for all guests to cook, visit and eat together."/>
            </div>
            <div class="col">
                <CardComponent title="Sunset Deck" :image="deck" :colour="false" 
                text="The sunset deck has a captivating view 
                of the Elandsberg and overlooks a 
                close by dam where game come up do 
                drink. The amazing atmosphere on 
                this elevated deck makes the days feel 
                longer as the beauty of the sunsets 
                captures and mesmerizes guests until 
                well after dark."/>                
            </div>
        </div>
        <div class="row -mx-[16%]">
            <div class="col">
                <CardComponent title="Boma" :image="boma" :allignment="false"
                text="The boma area allows our guests to not only enjoy the beautiful garden,
                but also the amazing starry nights where guests can spend hours around the fire, fellowshipping, singing or just 
                being."/>
            </div>
            <div class="col">
                <CardComponent title="Games & Conference Lapa" :image="wLapa" :colour="false" :allignment="false"
                text="This lapa is completely indoor and creates the extra space for guests to visit indoors and to play games or brainstorm new visions and ideas. We 
                have a pool table, dart board and tv in this lapa"/>
            </div>
        </div>
    </div>
    <TitleComponent title="Chalets"/>
    <div class="container">
        <div class="row -mx-[16%]">
            <div class="col">
                <CardComponent title="Love" :image="love" :colour="false" 
                 :bullets="['R399pp per nigh', 'Accommodates: 2', 'Minimum stay: 2 Nights']"/>
            </div>
            <div class="col">
                <CardComponent title="Faithfullness" :image="faith" 
                :bullets="['R399pp per nigh', 'Accommodates: 2', 'Minimum stay: 2 Nights']"/>                
            </div>
        </div>
        <div class="row -mx-[16%]">
            <div class="col">
                <CardComponent title="Peacfulness" :image="peace" :allignment="false" :colour="false"
                :bullets="['R399pp per nigh', 'Accommodates: 5', 'Minimum stay: 2 Nights']"/>
            </div>
            <div class="col">
                <CardComponent title="Joy" :image="joy"  :allignment="false"
                :bullets="['R399pp per nigh', 'Accommodates: 4', 'Minimum stay: 2 Nights']"/>
            </div>
        </div>
        <div class="row -mx-[16%]">
            <div class="col">
                <CardComponent title="Goodness" :image="goodness" :colour="false"
                :bullets="['R399pp per nigh', 'Accommodates: 2', 'Minimum stay: 2 Nights']"/>
            </div>
            <div class="col">
                <CardComponent title="Humbleness" :image="humbleness" 
                :bullets="['R399pp per nigh', 'Accommodates: 2', 'Minimum stay: 2 Nights']"/>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center mb-10 -mt-10">
        <div>
            <p class="font-body mx-auto text-center p-6 md:text-4xl text-[10px] md:w-[70%] w-[92%]">
                All chalets has all linen for the beds and the
                bathroom.  All Chalets share the communal kitchen, lounge and boma.
            </p>
            <button @click="scrollDown" class="bg-buttonface md:w-[33%] md:h-[5svh] mx-auto flex items-center justify-center text-center text-4xl rounded-3xl">Enquire Now</button>              
        </div>
    </div>
    <TitleComponent title="Things to do"/>
    <div class="flex items-center justify-center mb-20">
        <div class="list-disc">
            <li class="font-body text-center md:text-3xl font-body text-[10px]" 
                v-for="(t, index) in thingstodo" :key="index">{{t}}</li>
        </div>
    </div>
    <ContactUs/>
</template>

<script setup>
    import ContactUs from '../components/ContactUs.vue';
    import TitleComponent from '../components/TitleComponent.vue';
    import CardComponent from '../components/CardComponent.vue';
    import sLapa from '@/assets/s_lapa_1.jpg';
    import deck from '@/assets/dek.png'
    import wLapa from '@/assets/w_lapa.jpg';
    import boma from '@/assets/boma.jpg';
    import love from '@/assets/love_in.jpg';
    import joy from '@/assets/joy.jpg';
    import faith from '@/assets/faithfulness_in.jpg';
    import peace from '@/assets/peacefulness.jpg';
    import goodness from '@/assets/goodness.jpg';
    import humbleness from '@/assets/humbleness.png';
    import { ref } from 'vue';

    const scrollDown = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }
</script>

<script>
    export default {
        data() {
            return{
                thingstodo: [
                    'Hike to the top of Elandsberg (at Zion)',
                    'Hike at Rhenosterpoort Waterfall (15km)',
                    'Fishing (15km)',
                    'Marakele National Park (75km)',
                    'Kololo Big 5 Game Drive (50km)',
                    'Welgevonden Big 5 Game Drive (75km)',
                    'Horse Riding (30km)',
                    'Vaalwater Town for restaurants and shopping (50km)'
                ]
            }
        }
    }
</script>