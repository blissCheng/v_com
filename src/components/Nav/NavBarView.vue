<template>
    <div class="navbar-container">
        <div class="navbar">
            <router-link to="/">
                <img src="../../../asset/img/logo.png" class="logo"/>
            </router-link>
            <div class="form">
                <label for="serch"></label>
                <input type="text" id="serch"/>
            </div>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="">交互教程</router-link></li>
                <li><router-link to="">微信公众号</router-link></li>
                <li><router-link to="">VUE2.0</router-link></li>
                <li><router-link to="">参考资料</router-link></li>
                <li><router-link to="">API</router-link></li>
                <li><router-link to="">关于</router-link></li>
                <li><router-link to="">注册</router-link></li>
                <li><router-link to="">登录</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import './NavBarView.scss'
    export default {
        data(){
            return{

            }
        }
    }
</script>