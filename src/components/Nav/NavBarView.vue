<template>
    <div class="navbar-container">
        <div class="navbar">
            <router-link to="/">
                <img src="../../../asset/img/logo.png" class="logo"/>
            </router-link>
            <div class="form">
                <label for="search"><i class="iconfont">&#xf01c9;</i></label>
                <input type="text" id="search"/>
            </div>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="">交互教程</router-link></li>
                <li><a href="#" class="router-link-active" @click="togglePopup">微信公众号</a></li>
                <li><router-link to="">VUE2.0</router-link></li>
                <li><router-link to="">参考资料</router-link></li>
                <li><router-link to="">API</router-link></li>
                <li><router-link to="">关于</router-link></li>
                <li><router-link to="">注册</router-link></li>
                <li><router-link to="">登录</router-link></li>
            </ul>
        </div>
        <Popup :show="showPopup" @fade="closePopup">
            <div slot="children">
                <img src="../../../asset/img/qr_code.png"/>
            </div>
        </Popup>
    </div>
</template>
<script>
    import './NavBarView.scss'
    import Popup from '../popup/popup.vue'
    export default{
        data(){
            return{
                showPopup: false
            }
        },
        components:{
            Popup: Popup
        },
        methods:{
            togglePopup(){
                this.showPopup == false ? this.showPopup = true : this.showPopup = false
            },
            closePopup(){
                this.showPopup = false
            }
        }
    }
</script>