<template>
    <div class="home-page">
        <HomeHeader/>
        <HomeBody/>
        <HomeFooter/>
    </div>
</template>
<style scoped>
    .home-page{
        width: 90%;
        max-width: 1400px;
        margin: 15px auto;
        background: #fff;
        border-radius: 5px;
    }
</style>
<script>
    import HomeHeader from './HomeHeader.vue'
    import HomeBody from './HomeBody.vue'
    import HomeFooter from './HomeFooter.vue'
    export default{
        components:{
            "HomeHeader": HomeHeader,
            "HomeBody": HomeBody,
            "HomeFooter": HomeFooter
        }
    }
</script>