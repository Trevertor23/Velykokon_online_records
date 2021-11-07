import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'
//import Vuex from 'vuex'
import Login from './components/Login.vue'
import Records from './components/Records.vue'
    
const routes = [
    { name: 'login',path: '/', component: Login },
    { name: 'records', path: '/records', component: Records },
]

const router = new VueRouter({
    routes
})

    Vue.use(VueAxios, axios)
    Vue.use(VueRouter)

new Vue({
   render: h => h(App),
   el: '#app',
   router,
})