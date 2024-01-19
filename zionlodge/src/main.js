import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import  HomeView  from './views/HomeView.vue'
import  AccomodationView  from './views/AccomodationView.vue'
import  AboutView  from './views/AboutView.vue'
import  ContactView  from './views/ContactView.vue'
import  GalleryView  from './views/GalleryView.vue'

import './index.css'

const routes = [
    { path: '/', component: HomeView },
    { path: '/accomodation', component: AccomodationView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/gallery', component: GalleryView },
  ]

const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.use(router);
app.mount('#app');