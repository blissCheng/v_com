<template>
    <div class="home-header">
        <ul>
            <li :class="{active: isActive.one}"><span @click="toggleActive('one')">全部</span></li>
            <li :class="{active: isActive.two}"><span @click="toggleActive('two')">精华</span></li>
            <li :class="{active: isActive.three}"><span @click="toggleActive('three')">weex</span></li>
            <li :class="{active: isActive.four}"><span @click="toggleActive('four')">分享</span></li>
            <li :class="{active: isActive.five}"><span @click="toggleActive('five')">问答</span></li>
            <li :class="{active: isActive.six}"><span @click="toggleActive('six')">招聘</span></li>
        </ul>
    </div>
</template>
<style scoped>
    .home-header{
        width: 100%;
        padding: 10px;
        background: #f6f6f6;
    }
    .home-header>ul{
        float: left;
    }
    .home-header>ul>li{
        float: left;
        padding: 0 10px;
    }
    .home-header>ul>li>span{
        font-size: 14px;
        color: #369219;
        cursor: pointer;
    }
    .home-header>ul>li>span:hover{
        color: #08c
    }
    .home-header>ul>.active>span{
        font-size: 15px;
        color: #ffffff;
        border-radius: 4px;
        background: #369219;
        padding:0 4px;
    }
    .home-header>ul>.active>span:hover{
        color: #ffffff;
    }
</style>
<script>
    export default{
        data(){
            return{
                isActive:{
                    "one": true,
                    "two": false,
                    "three": false,
                    "four": false,
                    "five": false,
                    "six": false
                }
            }
        },
        methods:{
            toggleActive(key){
                this.isActive[key] = true;
                let keyArr = ['one','two','three','four','five','six'];
                keyArr.map((val) => {
                    if(val !== key)
                        this.isActive[val] = false
                })
            }
        }
    }
</script>