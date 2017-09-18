<template>
    <div id="app" style="background: #e1e1e1">
        <NavBar/>
        <router-view></router-view>
    </div>
</template>
<style>
   *{
       margin: 0;
       padding: 0;
   }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
   @font-face {
       font-family: 'iconfont';
       src: url('../../asset/font/iconfont.eot');
       src: url('../../asset/font/iconfont.eot?#iefix') format('embedded-opentype'),
       url('../../asset/font/iconfont.woff') format('woff'),
       url('../../asset/font/iconfont.ttf') format('truetype'),
       url('../../asset/font/iconfont.svg#iconfont') format('svg');
   }
   .iconfont{
       font-family:"iconfont" !important;
       font-size:16px;font-style:normal;
       -webkit-font-smoothing: antialiased;
       -webkit-text-stroke-width: 0.2px;
       -moz-osx-font-smoothing: grayscale;
   }
</style>
<script>
    import NavBarView from './Nav/NavBarView.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            NavBar: NavBarView
        }
    }
</script>