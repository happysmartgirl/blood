<template>
  <div class="direct">
    <div class="directTop">
      <div class="top">
        <div class="left" @click='go'>
          <img src="../../../static/images/left-arrow.jpg" alt="">
        </div>
        <div class="center">直播课程</div>
        <div class="right">
          <img src="../../../static/images/indexImages/headTopIcon.jpg" alt="">
        </div>
      </div>
      <ul class="fixedTop">
        <li v-for='item,index in arr' :class='index==current?"active":""' @click='choose(index)'>
          {{item.text}}
          <img src="../../../static/images/bottom-arrow.jpg" alt="" v-show='item.bol==false'>
          <img src="../../../static/images/top-arrow.jpg" alt="" v-show='item.bol==true'>
        </li>
      </ul>
    </div>
    <split style='margin-top:80px;'></split>
    <div class='loadingImage' v-show='loadingIsShow' ref='loading'>
      <img src="../../../static/images/loading.gif" alt="">
    </div>
    <ul class="direct-list" v-show='show'>
      <li class="item" v-for='item,index in direct' @click='toLogin()'>
        <img :src="item.imgSrc" alt="">
        <div class='text-name'>
          <div class='text'>{{item.text}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </li>
    </ul>
    <div class='login-after' v-show='ifLogin'>请先登录</div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import Router from 'vue-router'
  export default{
    name:'direct',
    inject:['reload'],
    data(){
      return {
        loadingIsShow:false,
        show:true,
        ifLogin:false,
        arr:[
          {
            text:'微课堂',
            bol:false
          },
          {
            text:'腾讯课堂',
            bol:false
          }
        ],
        current:-1,
        count:0,
        direct:[]
      }
    },
    created(){
      this.$axios({
        url:'../../../static/data.json',
        method:'get',
      }).then((data)=>{
        this.direct = data.data.direct;
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

       this.arr.forEach((item,index)=>{
          item.bol=false;
       })
        this.arr[index].bol=true
        this.current = index
        this.loadingIsShow = true
        this.show = false
        setTimeout(()=>{
          this.loadingIsShow = false;
          this.show = true
        },1000)
      },
      loadingShow(){
        this.loadingIsShow = true
      },
      hide(){
        this.loadingIsShow = false
      },
      toLogin(){
        this.ifLogin = true

        setTimeout(()=>{
          this.$router.push('/login')
        },1000)

      }
    }
  }
</script>

<style lang='less'>
  *{
    margin: 0;padding: 0;
    list-style: none;
  }
  .directTop{
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
      background: #eee;
      position:absolute;
      top:50px;
      .active{
        color:rgb(23,143,255);
        border-bottom:1px solid rgb(23,143,255);
      }
      li{
        line-height: 30px;
        padding-right:15px;
        width:50%;
        border-right:1px solid #ccc;
        img{
          width:11px;
          height:5px;
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
.direct-list{
  width:100%;
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
  .item{
    width:48%;
    height:110px;
    margin:10px 0;
    img{
      width:100%;
      height:90%;
    }
    .text-name{
      display: flex;
      width:100%;
      justify-content: space-between;
      align-items:center;
      line-height:30px;
      font-size:14px;
      .name{
        color:#aaa;
      }
    }
  }
}
.login-after{
  background:rgba(0,0,0,0.5);
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  z-index:6;
  color:#fff;
  padding:5px;
  line-height:30px;
}
</style>
