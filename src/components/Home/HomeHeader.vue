<template>
    <div class="home-header">
        <ul>
            <li :class="{active: isActive.one}">
                <span @click="toggleActive('one',config.tab[0])">全部</span>
            </li>
            <li :class="{active: isActive.two}">
                <span @click="toggleActive('two',config.tab[1])">精华</span>
            </li>
            <li :class="{active: isActive.three}">
                <span @click="toggleActive('three',config.tab[2])">weex</span>
            </li>
            <li :class="{active: isActive.four}">
                <span @click="toggleActive('four',config.tab[3])">分享</span>
            </li>
            <li :class="{active: isActive.five}">
                <span @click="toggleActive('five',config.tab[4])">问答</span>
            </li>
            <li :class="{active: isActive.six}">
                <span @click="toggleActive('six',config.tab[5])">招聘</span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .home-header{
        width: 100%;
        padding: 10px 0;
        background: #f6f6f6;
        overflow: hidden;
        border-radius: 5px;
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
    import config from '../../config'
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
                },
                config: config
            }
        },
        props:[

        ],
        methods:{
            toggleActive(key, val){
                this.isActive[key] = true;
                let keyArr = ['one','two','three','four','five','six'];
                keyArr.map((val) => {
                    if(val !== key)
                        this.isActive[val] = false
                })
                this.$emit('changeState',val)
            }
        }
    }
</script>