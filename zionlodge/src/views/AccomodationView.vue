<template>
    <TitleComponent title="Communal Areas"/>
    <CardComponent title="Lapa" image="roos_1.png" 
    text="The open kitchen overlooks the beautiful garden and bushveld and is fully equipped with all kitchen utensils, cutlery, and crockery for 20 guests,
            fridges, a 3-plate gas stove and a patio gas braai.  The lounge area as spacious with a great outdoor feeling to it. 
            The furniture gives a wonderful earthly feeling of leather and food and this area allows for all guests to cook, visit and eat together."/>

    <CardComponent title="Lapa" image="roos_1.png" :allignment="false"
    text="The open kitchen overlooks the beautiful garden and bushveld and is fully equipped with all kitchen utensils, cutlery, and crockery for 20 guests,
            fridges, a 3-plate gas stove and a patio gas braai.  The lounge area as spacious with a great outdoor feeling to it. 
            The furniture gives a wonderful earthly feeling of leather and food and this area allows for all guests to cook, visit and eat together."/>

    <ContactUs/>
</template>

<script setup>
    import ContactUs from '../components/ContactUs.vue';
    import TitleComponent from '../components/TitleComponent.vue';
    import CardComponent from '../components/CardComponent.vue';
    import { ref } from 'vue';
</script>