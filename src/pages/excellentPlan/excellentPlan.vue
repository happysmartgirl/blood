<template>
  <div class="excellentPlan">
    <div class="excellentTop">
      <div class="top">
        <div class="left" @click='go'>
          <img src="../../../static/images/left-arrow.jpg" alt="">
        </div>
        <div class="center">优秀方案</div>
        <div class="right">
          <img src="../../../static/images/indexImages/headTopIcon.jpg" alt="">
        </div>
      </div>
      <ul class="fixedTop">
        <li v-for='item,index in arr' :class='index==current?"active":""' @click='choose(index)'>
          {{item.text}}
          <img src="../../../static/images/bottom-arrow.jpg" alt="" v-show='item.bol==false'>
          <img src="../../../static/images/top-arrow.jpg" alt="" v-show='item.bol==true'>
         <div class="hide" v-if='current==0'>
           <div v-for='item,index in excellentOne' @click='one(index)'>{{item}}</div>
         </div>
          <div class="hide" v-else-if='current==1'>
            <div v-for='item,index in excellentTwo' @click='two(index)'>{{item}}</div>
          </div>
          <div class="hide" v-else-if='current==2'>
            <div v-for='item,index in excellentThree' @click='three(index)'>{{item}}</div>
          </div>
          <div class="hide" v-else-if='current==3'>
            <div v-for='item,index in excellentFour' @click='four(index)'>{{item}}</div>
          </div>
        </li>
      </ul>
    </div>
    <split style='margin-top:80px;'></split>
    <div class='loadingImage' v-show='loadingIsShow' ref='loading'>
      <img src="../../../static/images/loading.gif" alt="">
    </div>
    <ul class="contentone-list" v-show='show'>
      <li class='item' v-for='item,index in excellentOneContent' @click='toDetail(item.id)'>
        <div class="title">{{item.title}}</div>
        <img :src="item.imgSrc" alt="" class="content">
        <div class="bottom">
          <div class="left">
            <img :src="item.avatar" alt="" class="avatar">
            <div class="name">{{item.name}}</div>
          </div>
          <div class="right">
            <img src="../../../static/images/eye.jpg" alt="" width='10' height='10'>
            <div class="num">{{item.num}}</div>
          </div>
        </div>
        <split></split>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import Router from 'vue-router'
  export default{
    name:'excellentPlan',
    inject:['reload'],
    data(){
      return {
        loadingIsShow:false,
        show:true,
        arr:[
          {
            text:'按空间',
            bol:false
          },
          {
            text:'按风格',
            bol:false
          },
          {
            text:'按户型',
            bol:false
          },
          {
            text:'按面积',
            bol:false
          }
        ],
        current:-1,
        count:0,
        excellentOne:[],
        excellentTwo:[],
        excellentThree:[],
        excellentFour:[],
        excellentOneContent:[]
      }
    },
    created(){
      this.$axios({
        url:'../../../static/data.json',
        method:'get',
      }).then((data)=>{
        this.excellentOne = data.data.excellentOne
        this.excellentTwo = data.data.excellentTwo
        this.excellentThree = data.data.excellentThree
        this.excellentFour = data.data.excellentFour
        this.excellentOneContent = data.data.excellentOneContent
        console.log(data.data.excellentOneContent)
      })
    },
    mounted(){
      console.log('重新加载了此页面')
    },
    methods:{
      go(){
       this.$router.push('/');
      },
      choose(index){
        this.count++;
        if(this.count%2==0){
          this.arr.forEach((item,index)=>{
             item.bol=false;
          })
        }else{
          this.arr.forEach((item,index)=>{
             item.bol=false;
          })
           this.arr[index].bol=true
           this.current = index
        }

      },
      loadingShow(){
        this.loadingIsShow = true
      },
      hide(){
        this.loadingIsShow = false
      },
      one(index){
        let text = this.excellentOne[index]
        this.arr[0].text = text
        this.current=-1
        this.reload
        this.loadingIsShow = true
        this.show = false
        setTimeout(()=>{
          this.loadingIsShow = false;
          this.show = true
        },1000)
      },
      two(index){
        let text = this.excellentTwo[index]
        this.arr[1].text = text
        this.current=-1
        this.reload
        this.loadingIsShow = true
        this.show = false
        setTimeout(()=>{
          this.loadingIsShow = false;
          this.show = true
        },1000)
      },
      three(index){
        let text = this.excellentThree[index]
        this.arr[2].text = text
        this.current=-1
        this.reload
        this.loadingIsShow = true
        this.show = false
        setTimeout(()=>{
          this.loadingIsShow = false;
          this.show = true
        },1000)
      },
      four(index){
        let text = this.excellentFour[index]
        this.arr[3].text = text
        this.current=-1
        this.reload
        this.loadingIsShow = true
        this.show = false
        setTimeout(()=>{
          this.loadingIsShow = false;
          this.show = true
        },1000)
      },
      toDetail(id){
        this.$router.push({
          path:'../detail/detail',
          query:{
            id:id
          }
        })

      }
    }
  }
</script>

<style lang='less'>
  *{
    margin: 0;padding: 0;
    list-style: none;
  }
  .excellentTop{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height: 80px;
    z-index:2;
    .top{
        width:100%;
        height:50px;
        background:rgb(23,143,255);
        display:flex;
        align-items: center;
        justify-content: space-between;
        color:#fff;
        .left{
          margin-left:10px;
        }
      }
    .fixedTop{
      width:100%;
      display:flex;
      line-height:30px;
      justify-content: space-around;
      align-items: center;
      list-style:none;
      position:fixed;
      top:50px;
      background: #eee;
      .active{
        color:rgb(23,143,255);
      }
      li{
        line-height: 30px;
        padding-right:15px;
        img{
          width:11px;
          height:5px;
        }
        .hide{
          width:100%;
          background: #eee;;
          display: flex;
          flex-wrap:wrap;
          position:absolute;
          top:50px;
          left:0;
          z-index:2;
          div{
            width:25%;
            /* margin:8px; */
            text-align: center;
            border:1px solid #ccc;
            color:#000;
          }
        }
      }
    }
  }


 .loadingImage{
      img{
        width:100%;
        height:300px;
        margin:200px auto;
      }
    }
  .contentone-list{
    width:100%;
    padding:0;
    .item{
      width:100%;
      text-align:left;
      .content{
        width:100%;
        height: 211px;
      }
      .bottom{
        margin-top:10px;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
        .left{
          display:flex;
          margin-left:10px;
          align-items: center;
          .avatar{
            width:30px;
            height:30px;
            border-radius:50%;
            margin-right:10px;
          }
        }
        .right{
          display: flex;
          margin-right:10px;
          align-items: center;
          img{
            margin-right:10px;
          }
        }
      }
    }
  }
</style>
