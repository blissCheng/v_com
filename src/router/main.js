import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeView from '../components/Home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomeView }
]

const route = new VueRouter({
    routes
})
export default route
