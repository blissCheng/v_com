import Vue from 'vue'
import App from './components/app.vue'
import router from './router/main'
import store from './vuex/store'

const myApp = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})