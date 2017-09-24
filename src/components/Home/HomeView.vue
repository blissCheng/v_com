<template>
    <div class="home-page">
        <HomeHeader @changeState="tabTransform"/>
        <HomeBody :source="topics"/>
        <Page
                :total="total"
                :pageSize="26"
                :showQuickJumper = "true"
                :defaultCurrent="current"
                @onChange = "onChange"
        />
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
    @media screen and (max-width: 960px){
        .home-page{
            width: 100%;
        }
    }
</style>
<script>
    import HomeHeader from './HomeHeader.vue'
    import HomeBody from './HomeBody.vue'
    import Page from '../page/page.vue'
    import config from '../../config'
    export default{
        data(){
            return{
                topics: [],
                tab: config.tab[0],
                total: 1000,
                current: 1
            }
        },
        mounted(){
            this.loadTopics(this.tab, '1')

        },
        components:{
            "HomeHeader": HomeHeader,
            "HomeBody": HomeBody,
            "Page": Page
        },
        methods:{
            loadTopics(type, pageno = 1){

                fetch(`${config.host}topics?limit=${config.limit}&page=${pageno}&tab=${type}`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((json) => {
                        this.topics = json.data
                    })
                    .catch((err) => {
                        alert(err)
                    })
            },
            tabTransform(val){
                this.tab = val
                this.current = 1
                this.loadTopics(val)
            },
            onChange(page){
                this.current = page
                this.loadTopics(this.tab,page)
            }
        }
    }
</script>