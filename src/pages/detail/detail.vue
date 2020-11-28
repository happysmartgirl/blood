<template>
  <div class="detail">
    <div class="top">
      <div class="left" @click='go()'>
        <img src="../../../static/images/left-arrow.jpg" alt="">
      </div>
      <div class="center">方案详情</div>
      <div class="right">
        <img src="../../../static/images/indexImages/headTopIcon.jpg" alt="">
      </div>
    </div>
   <div class="image">
      <img :src="obj.imgSrc" alt="">
    </div>
    <div class='info'>
      <div class="avatar-name">
        <div class="avatar">
          <img :src="obj.avatar" alt="">
        </div>
        <div class="name">{{obj.name}}</div>
      </div>
      <div class="title-info">
        <div class="title">{{obj.title}}</div>
        <div class="huxing">
          <span>户型：</span>
          {{obj.huxing}}
        </div>
        <div class="style">
          <span>风格：</span>
          {{obj.style}}
        </div>
        <div class="bigsmall">
          <span>面积：</span>
          {{obj.bigsmall}}
        </div>
      </div>
    </div>
    <div class="content">{{obj.content}}</div>
    <div class="eye-num">
      <img src="../../../static/images/eye.jpg" alt="">
      <div class="num">{{obj.num}}</div>
    </div>
    <div class='method'>
      <div class='method-title'>方法概述</div>
      <ul>
      	<li v-for='item,index in obj.arr'>
          <img :src="item.imgSrc1" alt="">
          <img :src="item.imgSrc2" alt="">
          <div class="text">{{item.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data(){
      return{
        excellentOneContent:[],
        obj:{}
      }
    },
    created(){
      var id = this.$route.query.id
      console.log(id)
      this.$axios({
        url:'../../../static/data.json',
        method:'get'
      }).then((data)=>{
        this.excellentOneContent = data.data.excellentOneContent;
        this.obj = this.excellentOneContent[id]
      })
    },
    methods:{
      go(){
        this.$router.go(-1)
        console.log(this.obj)
      }
    }
  }
</script>

<style lang='less'>
  .detail{
    .top{
      width:100%;
      display:flex;
      height: 50px;
      background:rgb(23,143,255);
      align-items: center;
      justify-content: space-between;
      position:fixed;
      top:0;
      left:0;
      color:#fff;
      .left{
        margin-left:10px;
      }
      .right{
        margin-right:10px;
      }
    }
    .image{
      img{
        width:100%;
        height:225px;
      }
    }
    .info{
      margin-top: 20px;
      display:flex;
      width: 100%;
      justify-content: space-around;
      .avatar-name{
        display:flex;
        width:40%;
        flex-direction: column;
        align-items: center;
        .avatar{
          img{
            width:20px;
            height:20px;
            border-radius:50%;
          }
        }
      }
      .title-info{
        flex:1;
        display:flex;
        flex-direction: column;
        .title{
          font-size:16px;
          color:#000;
        }
        div{
          text-align: left;
          color:#aaa;
          font-size:14px;
        }

      }
    }
    .content{
      text-indent: 2em;
      color:#999;
      margin-top:25px;
    }
    .eye-num{
      width:100%;
      display:flex;
      justify-content: flex-end;
      align-items:center;
      color:#ccc;
      img{
        width:20px;
        height:15px;
        margin-right:5px;
      }
      .num{
        margin-right:15px;
      }
    }
    .method{
      .method-title{
        width:100%;
        text-align: center;
      }
      ul{
        width:100%;
        li{
          width:100%;
          list-style: none;
          img{
            width:100%;
            height:225px;
            margin:10px 0;
          }
          .text{
            text-indent: 2em;
            text-align: left;
          }
        }
      }
    }
  }
</style>
