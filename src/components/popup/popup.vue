<template>
    <transition name="fade">
        <div class="cover" v-if="show" @click="fade">
            <div class="popup-container">
                <transition
                    enter-active-class="animated bounceInDown"
                    leave-active-class="animated bounceInUp"
                >
                    <div class="popup" v-if="popupAn">
                        <slot name="children"></slot>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>
<style scoped>

</style>
<script>
    import '../../../asset/css/animate.css'
    import './popup.scss'
    export default{
        data(){
            return{
                popupAn: false
            }
        },
        props:[
            'show',
        ],
        watch:{
            show: {
                handler: function () {
                    this.popupAn = this.show
                }
            }
        },
        methods:{
            fade(){
                this.$emit('fade')
            }
        }
    }
</script>