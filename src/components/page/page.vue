<template>
    <div id="page">
        <ul>
            <li class="page-start-btn"><i class="iconfont">&#xe624;</i></li>
            <li class="page-prev-btn"><i class="iconfont">&#xe615;</i></li>
            <li
                    class="page-number"
                    v-for="num in pagenoList"
            >
                <span>{{num}}</span>
            </li>
            <li class="page-next-btn"><i class="iconfont">&#xe614;</i></li>
            <li class="page-end-btn"><i class="iconfont">&#xe65c;</i></li>
        </ul>
    </div>
</template>
<script>
    import './page.scss'
    export default{
        data(){
          return{
              pageno: 1,
              pagenoList: []
          }
        },
        mounted(){
            this.pageno = this.total / this.pageSize
        },
        props:[
            'total', //数据总数
            'current',//当前页
            'defaultCurrent',//默认的当前页
            'pageSize', //每页条数
            'showQuickJumper',//是否可以快速跳转,
            'showTotal',//显示数据总量
            'showPage'//显示总页数
        ],
        watch:{

        },
        methods:{
            handleChangePagenoList(initVal, endVal){
                for(let i=initVal; i<endVal;i++){
                    this.pagenoList.push(i)
                }
            }
        }
    }
</script>