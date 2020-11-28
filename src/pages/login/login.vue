<template>
  <div class="login">
    <div class="top">
      <div class="left" @click='go()'>
        <img src="../../../static/images/left-arrow.jpg" alt="">
      </div>
      <div class="center">登录</div>
      <div class="right"></div>
    </div>
   <div class="logo">
      <img src="../../../static/images/login.jpg" alt="">
   </div>
   <div class="form" width='300px'>
     <div class="phoneNum" style='border:1px solid #ccc;width:300px;margin:30px auto;text-align:left;'>
       <input type="text" placeholder="请输入你的手机号" style='border:0;outline:0;'>
     </div>
     <div class="imgYanZheng" style='width:300px;margin:30px auto;display:flex;align-items:center'>
       <input type="text" placeholder="请填写图形验证码" style='border:1px solid #ccc;outline:0;width:200px;margin-right:20px;'>
       <img src="../../../static/images/imgYanZheng.jpg" alt="">
     </div>
     <div class="YanZheng" style='width:300px;margin:30px auto;display:flex;align-items:center'>
       <input type="text" placeholder="请输入验证码" style='border:1px solid #ccc;outline:0;width:190px;margin-right:10px;'>
       <button class='btn btn-info' style='font-size:14px;'>获取验证码</button>
     </div>
    <div style='width:300px;margin:30px auto;display:flex;align-items:center'>
       <button class='btn btn-info btn-block'>登录</button>
    </div>
    <div style='width:300px;margin:auto;display:flex;align-items:center;justify-content: space-between;'>
       <p class='text-info'>立即注册</p>
       <p class='text-info'>忘记密码</p>
    </div>
   </div>
   <div class="line">
     <div></div>其他登录方式<div></div>
   </div>
   <div class="userLogin">
     <img src="../../../static/images/userLogin.jpg" alt="">
     <div class='text-info'>用户名登录</div>
   </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  export default{
    name:'login',
    methods:{
      go(){
        this.$router.push('/direct')
      }
    }
  }
</script>

<style lang='less'>
  *{
    margin: 0;padding: 0;
  }
  .login{
    .top{
      width:100%;
      display:flex;
      justify-content: space-between;
      position:fixed;
      top:0;
      left:0;
      color:#fff;
      background:rgb(23,143,255);
      height:50px;
      align-items: center;
    }
    .logo{
      width:100%;
      margin-top:100px;
      img{
        width:100%;
      }
    }
    .form{
      div{
        margin-top:30px;
      }

    }
    .line{
      width:100%;
      display:flex;
      align-items: center;
      font-size: 14px;
      justify-content: space-around;
      div{
        width:130px;
        height: 1px;
        background:#ccc;
      }
     /* p{
        padding-left: 10px;
        padding-right: 10px;
      } */
    }
    .userLogin{
      width:100%;
      margin:auto;
      margin-top:20px;
    }
  }
</style>
