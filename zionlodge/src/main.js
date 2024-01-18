import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import  HomeView  from './views/HomeView.vue'
import  AccomodationView  from './views/AccomodationView.vue'

import './index.css'

const routes = [
    { path: '/', component: HomeView },
    { path: '/accomodation', component: AccomodationView },
  ]

const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.use(router);
app.mount('#app');