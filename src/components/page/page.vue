<template>
    <div id="page">
        <ul>
            <li class="page-start-btn" @click="handleChangePagenoList(1)"><i class="iconfont">&#xe509;</i></li>
            <li v-if="pagenoList.indexOf(1)<0">
                <span>...</span>
            </li>
            <li class="page-number" v-for="num in pagenoList" :class="{active: num == current}" @click="handleChangePagenoList(num)">
                <span>
                    {{num}}
                </span>
            </li>
            <li v-if="pagenoList.indexOf(pageno)<0">
                <span>...</span>
            </li>
            <li class="page-end-btn" @click="handleChangePagenoList(pageno)"><i class="iconfont">&#xe508;</i></li>
        </ul>
        <div class="quick-jumper" v-if="showQuickJumper">
            <span>跳至</span>
            <input type="text" v-model="inputVal" @blur="quickJumper(parseInt(inputVal))" @keyup.enter="quickJumper(parseInt(inputVal))"/>
        </div>
    </div>
</template>
<script>
    import './page.scss'
    export default{
        data(){
          return{
              pageno: 1,
              pagenoList: [],
              current: 1,
              inputVal: ""
          }
        },
        mounted(){
            this.defaultCurrent ? this.current = this.defaultCurrent : ''
            this.pageno = Math.ceil(this.total / this.pageSize);
            (this.pageno / 5) < 1 ? this.handleChangePagenoList(1,this.row()) : this.handleChangePagenoList(1,[1,2,3,4,5])
        },
        props:[
            'total', //数据总数
            'defaultCurrent',//默认的当前页
            'pageSize', //每页条数
            'showQuickJumper',//是否可以快速跳转,
            'showTotal',//显示数据总量
            'showPage'//显示总页数
        ],
        watch:{
            current:{
                handler(){
                    this.$emit('onChange',this.current)
                },
                deep: true
            },
            defaultCurrent:{
                handler(){

                    this.current = this.defaultCurrent
                    this.handleChangePagenoList(this.current)
                },
                deep: true
            }
        },
        methods:{
            row(){
                let arr = []
                for (let i=1;i<this.pageno.length;i++){
                    arr.push(i)
                }
                return arr
            },
            handleChangePagenoList(num,arr){

                this.current = num

                let defaultArr = []
                if(arr){
                    this.pagenoList = arr
                    return
                }
                if(this.pageno>5){
                    switch (num){
                        case 1:
                            defaultArr = [num,num+1,num+2,num+3,num+4]
                            break
                        case 2:
                            defaultArr = [num-1,num,num+1,num+2,num+3]
                            break
                        case this.pageno:
                            defaultArr = [num-4,num-3,num-2,num-1,num]
                            break
                        case this.pageno-1:
                            defaultArr = [num-3,num-2,num-1,num,num+1]
                            break
                        default:
                            defaultArr = [num-2,num-1,num,num+1,num+2]
                    }
                    this.pagenoList = defaultArr
                }
            },
            quickJumper(num){
                if(isNaN(num) || num>this.pageno){
                    this.inputVal = ""
                    return
                }
                this.handleChangePagenoList(num)
                this.inputVal = ""
            }
        }
    }
</script>