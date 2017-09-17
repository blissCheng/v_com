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