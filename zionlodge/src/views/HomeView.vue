<template>
    <TitleComponent title="Zion Garden & Game Lodge"/>

    <div class="flex items-center justify-center">
        <BannerComponent/>
    </div>
    <div class="flex items-center justify-center">
        <p class="font-body mx-auto text-center p-6 md:text-4xl text-[10px] md:w-[70%] w-[92%]">
            Our mission at Zion is to create the most beautiful space in God’s creation where He is invited to dwell daily so that our guests can relax, rest, feel spoiled and revived in His presence. <br/><br/>
            <span class="font-[1000]">God is inviting you to come away with Him! <br/><br/></span>
            We want to welcome anyone that is in full-time Christian ministry, to come and REST in God’s creation in the beautiful Waterberg of South Africa. Zion is a harbor of REST, connection, healing, restoration, renewal, calling and purpose. Our prayer is that those serving to help God’s Kingdom come in the hearts of people, can have their zeal, vision and passion re-ignited while spending time in Zion’s beautiful garden and Bushveld. <br/><br/>
            The lodge is situated in the picturesque and malaria-free Waterberg biosphere. <br/><br/>
            Zion is celebrated for its peaceful atmosphere, stunning garden, beautiful surroundings, breathtaking sunsets and diverse wildlife which all add to a true African Bushveld experience. <br/><br/>
            The Lodge offers accommodation in unique rock-art chalets near a sparkling swimming pool and can accommodate groups of up to twenty guests at a time, sharing a fully equipped, communal self-catering kitchen. <br/><br/>
        </p>
    </div>
    <ContactUs/>
</template>

<script setup>
    import ContactUs from '@/components/ContactUs.vue'
    import TitleComponent from '@/components/TitleComponent.vue'
    import BannerComponent from '@/components/BannerComponent.vue';
    import { ref } from 'vue';
</script>