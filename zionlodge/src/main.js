import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import  HomeComponent  from './components/Home.vue'
import  AccomodationComponent  from './components/Accomodation.vue'

import './index.css'

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/accomodation', component: AccomodationComponent },
  ]

const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.use(router);
app.mount('#app');