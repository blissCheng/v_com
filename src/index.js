import Vue from 'vue'
import App from './components/app.vue'

const myApp = new Vue({
    el: '#app',
    render: h => h(App)
})