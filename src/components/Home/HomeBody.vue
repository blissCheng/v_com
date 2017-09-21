<template>
    <div class="home-body">
        <ul>
            <li v-for="item in source">
                <img :src="item.author.avatar_url"/>
                <div class="count">
                    <span>{{item.reply_count}}/</span><span>{{item.visit_count}}</span>
                </div>

                <span class="tag" :class="{top: item.top}">
                    {{tagText(item)}}
                </span>
                <span class="title" :class="{topTitle: item.top}">{{item.title}}</span>
                <span class="create-time">{{createTime(item.last_reply_at)}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import './HomeBody.scss'
    export default{
        data(){
            return{

            }
        },
        mounted(){
            console.log(this.source)
        },
        props:[
            'source'
        ],
        methods:{
            createTime(date){
                let dif = Math.floor((Date.parse(new Date()) - Date.parse(date))/1000)
                let minutes = dif / (60),
                    hours = minutes / 60,
                    day = hours / 24,
                    month = day / 30,
                    year =  month /12,
                    difDate
                minutes < 60
                    ? difDate = `${Math.ceil(minutes)} 分钟前`
                    : hours < 24
                        ? difDate = `${Math.floor(hours)} 小时前`
                        : day < 30
                            ? difDate = `${Math.floor(day)} 天前`
                            : month < 12
                                ? difDate = `${Math.floor(month)} 个月前`
                                : difDate = `${Math.floor(year)} 年前`

                return difDate
            },
            tagText(item){
                let tagName,text
                item.top ? tagName = '置顶' : tagName = item.tab
                switch (tagName){
                    case '置顶':
                        text = tagName
                        break
                    case 'share':
                        text = '分享'
                        break
                    case 'ask':
                        text = '问答'
                        break;
                    case 'job':
                        text = '招聘'
                        break;
                    case 'week':
                        text = 'week'
                        break
                }
                return text
            }
        }
    }
</script>