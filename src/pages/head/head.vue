<template>
  <div class="index">
    <!-- <transition-group enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
      <div class="toLeft" :key='1' v-show='toLeftShow'>
        <div v-for='item,index in toLeft'>{{item}}</div>
      </div>
    </transition-group> -->
      <div class="headTop">
        <div class="headTop-top">
          <div class='logo'>
             <img src="../../../static/images/indexImages/logo.png" alt="" width='60' height='31'>
           </div>
          <div class='headTopIcon'>
            <img src="../../../static/images/indexImages/headTopIcon.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- 轮播图开始 -->
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='item,index in swiperArr'>
            <img :src="item" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 轮播图结束 -->
      <!-- 圆形icon图标开始 -->
      <div class="radialIconList">
        <div class='radialIconItem' v-for='item,index in radialIconArr'>
          <img :src="item.imgSrc" alt="">
          <div class='text'>{{item.text}}</div>
        </div>
      </div>
      <!-- 圆形icon图标结束 -->

      <!-- banner开始 -->
      <div class="bannerList">
        <div class="bannerItem" v-for='item,index in bannerArr'>
          <img :src="item.imgSrc" alt="">
        </div>
      </div>
      <!-- banner结束 -->
      <split></split>
      <!-- 优秀方案开始 -->
      <div class="excellentPlan">
        <div class="top">
          <div class="left">
            <blueSplit></blueSplit>
            <div>优秀方案</div>
          </div>
          <div class="right" @click='toExcellentPlan'>
           更多>
          </div>
        </div>
        <div class="list">
          <div class="item" v-for='item,index in excellentPlanArr'>
            <img :src="item.imgSrc" alt="" class='bigImage'>
            <div>
              <p class="text">{{item.text}}</p>
              <img :src="item.iconImgSrc" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 优秀方案结束 -->
      <split></split>
      <!-- 设计灵感开始 -->
       <div class='designInspiration'>
         <div class="top">
           <div class="left">
             <blueSplit></blueSplit>
             设计灵感
           </div>
           <div class="right" @click='toDesignInpiration()'>
             更多>
           </div>
         </div>
         <div class="tabList">
           <div v-for='item,index in designInspirationTab' @click='inspirationtab(index)' :class="index==designInspirationCurrent?'active':''">{{item}}</div>
         </div>
         <div class="contentList">
           <div class="contentItem" v-show='designInspirationCurrent==0' ref='list'>
             <ul class='list' ref='listItem'>
             	<li v-for='item,index in designInspirationStyle' class='item'>
                <div class="drop"></div>
                <img :src="item.imgSrc" alt="">
                <div class='text'>{{item.text}}</div>
              </li>
             </ul>
           </div>

           <div class="contentItem" v-show='designInspirationCurrent==1' ref='list1'>
             <ul class='list' ref='listItem1'>
             	<li v-for='item,index in designInspirationZone' class='item'>
                <div class="drop"></div>
                <img :src="item.imgSrc" alt="">
                <div class='text'>{{item.text}}</div>
              </li>
             </ul>
           </div>
         </div>
       </div>
      <!-- 设计灵感结束 -->
      <split></split>
      <!-- 软件视频开始 -->
       <div class='softWareVideo'>
         <div class="top">
           <div class="left">
             <blueSplit></blueSplit>
             软件视频
           </div>
           <div class="right">更多></div>
         </div>
         <ul class="list">
           <li class="item" v-for='item,index in softwareVideo'>
             <img :src="item.imgSrc" alt="">
             <div class="text">{{item.text}}</div>
           </li>
         </ul>
       </div>
      <!-- 软件视频结束 -->
      <split></split>
      <!-- 直播课程开始 -->
      <div class="directClass">
        <div class="top">
          <div class="left">
            <blueSplit></blueSplit>
            直播课程
          </div>
          <div class="right" @click='toDirect()'>更多></div>
        </div>
        <ul class="list">
          <li class="item" v-for='item,index in directClass'>
            <img :src="item.imgSrc" alt="">
            <div class="text-person">
              <div class="text">{{item.text}}</div>
              <div class="person">{{item.person}}</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 直播课程结束 -->
      <split></split>
      <!-- 图文教程开始 -->
      <div class="imgWord">
        <div class="top">
          <div class="left">
            <blueSplit></blueSplit>
            图文教程
          </div>
          <div class="right">更多></div>
        </div>
        <ul class="list">
          <li class='item' v-for='item,index in imgWord'>
            <div class="text">{{item.text}}</div>
           <div class="img-num">
             <img src="../../../static/images/eye.jpg" alt="">
             <div class="num">{{item.num}}</div>
           </div>
          </li>
        </ul>
      </div>
      <!-- 图文教程结束 -->
      <!-- 首页底部 -->
      <div class="footer">
        <div>三维家学院</div>
        <div>Copyright © 广东三维家信息科技有限公司 版权所有三维家.</div>
      </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import Swiper from 'swiper';
  import 'swiper/css/swiper.min.css';
  import BScroll from 'better-scroll'
  import Router from 'vue-router'
export default {
    name : 'index',
    data(){
      return {
        toLeft:['优秀方案','设计灵感','软件视频','直播课程','图文教程'],
        toLeftShow:false,
        iconShow:true,
        swiperArr:[],
        radialIconArr:[],
        bannerArr:[],
        excellentPlanArr:[],
        designInspirationTab:['按风格','按空间'],
        designInspirationCurrent:0,
        designInspirationStyle:[],
        designInspirationZone:[],
        softwareVideo:[],
        directClass:[],
        imgWord:[],
        headFixed:true,
        offsetHeight:550
      }
    },
    created(){
      this.$axios({
        url:'../../../static/data.json',
        method:'get'
      }).then((data)=>{
        this.swiperArr=data.data.swiperArr
        this.radialIconArr = data.data.radialIconArr
        this.bannerArr = data.data.bannerArr
        this.excellentPlanArr = data.data.excellentspanArr
        this.designInspirationStyle = data.data.designInspirationStyle
        this.designInspirationZone = data.data.designInspirationZone
        this.softwareVideo = data.data.softwareVideo
        this.directClass = data.data.directClass
        this.imgWord = data.data.imgWord
        console.log(this.bannerArr)
      })
    },
    methods:{
      toLeftIsShow(){
        this.toLeftShow = !this.toLeftShow
        this.iconShow = true
      },
      inspirationtab(index){
        this.designInspirationCurrent=index
      },
      personScroll(){
        let width = 6*150;
        this.$refs.listItem.style.width = width + "px";
        this.$refs.listItem1.style.width = width + "px";
        this.$nextTick(()=>{
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.list,{
              scrollX:true,
              scrollY:false,
            });
            this.scroll = new BScroll(this.$refs.list1,{
              scrollX:true,
              scrollY:false,
            })
          }
        })
      },
      toExcellentPlan(){
         this.$router.push('/excellentPlan');
      },
      toDesignInpiration(){
         this.$router.push('/designInpiration');
      },
      toDirect(){
        this.$router.push('/direct');
      }
      // handleScroll(){
      //   // 得到页面滚动的距离
      //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //   // 判断页面滚动的距离是否大于吸顶元素的位置
      //   this.headerFixed = scrollTop > (this.offsetTop - this.offsetHeight);
      // }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: true,
        paginationClickable: true,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
        preventClicks: false,
        speed: 600,
        observer: true,
        loop: true,
        observeParents: true
      });
      this.$nextTick(() => {
           this.personScroll();
       });
       // this.$nextTick(function(){
       //   // 这里fixedHeaderRoot是吸顶元素的ID
       //   let header = document.querySelector('.headTop');
       //   // 这里要得到top的距离和元素自身的高度
       //   this.offsetTop = header.offsetTop;
       //   this.offsetHeight = header.offsetHeight;
       // });
       // window.addEventListener('scroll', this.handleScroll);
    },
    // destroyed(){
    //   window.removeEventListener('scroll', this.handleScroll);
    // }
  }
</script>

<style lang="less">
  *{
    margin: 0;padding: 0;
    list-style: none;
  }
  .toLeft{
    margin-top:50px;
    height:667px;
    width:50%;
    margin-left:200px;
    position:absolute;
    background:#fff;
    z-index:100;
    div{
      text-align: left;
      line-height:30px;
    }
  }
  .headTop{
    width:100%;
    height:46px;
    background:rgb(23,143,255);
    position:fixed;
    top:0;
    left:0;
    z-index:2;
    .headTop-top{
      width:100%;
      height:100%;
      display:flex;
      position:absolute;
      top:0;
      left:0;
      justify-content: space-between;
      align-items: center;
      .headTopIcon{
          width:35px;
          height:28px;
          position: fixed;
          right:10px;
          z-index:1000;
          img{
            width:35px;
            height:28px;
            position: fixed;
            right:10px;
            z-index:1000;
          }
      }
    }
    // .isFixed{
    //   position:fixed;
    //   top:0;
    //   left:0;
    //   bottom:0;
    //   right:0;
    // }
  }
  .swiper-wrapper{
    margin-bottom: 30px;
    .swiper-slide{
      img{
        width:100%;
        height:180px;
      }
    }
  }
  .radialIconList{
    width:100%;
    display:flex;
    justify-content: space-between;
    .radialIconItem{
      width:20%;
      display:flex;
      flex-direction: column;
      align-items: center;
      img{
        width:36px;
        height:36px;
      }
      .text{
        font-size:14px;
        margin-top:10px;
      }
    }
  }
  .bannerList{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    .bannerItem{
      width:45%;
      height:69px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .excellentPlan{
    .top{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      .left{
        display:flex;
        align-items: center;
      }
      .right{
        font-size:13px;
        color:#aaa;
      }
    }
    .list{
      width:100%;
      height:150px;
      display:flex;
      .item{
        width:50%;
         display: flex;
         flex-direction: column;
         img.bigImage{
           width:95%;
           height:130px;
         }
         div{
           display:flex;
           margin-top:10px;
           img{
             width:20px;
             height:20px;
             border-radius: 50%;
           }
         }
      }
    }
  }

  // 设计灵感
  .designInspiration{
    .top{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      .left{
        display:flex;
        align-items: center;
      }
      .right{
        font-size:13px;
        color:#aaa;
      }
    }
    .tabList{
      width:100%;
      display:flex;
      justify-content: space-around;
      .active{
        color:rgb(37,150,255);
        border-bottom:1px solid rgb(37,150,255);
      }
    }
  }
  .contentList{
    .contentItem{
      width:100%;
      overflow:hidden;
      .list{
        display:flex;
        .item{
          margin:5px;
          height:190px;
          width:150px;
          position: relative;
          img{
            width:100%;
            height:100%;
          }
          .text{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            color:#fff;
            z-index:3;
          }
          .drop{
            width:100%;
            height:100%;
            position: absolute;
            top:0;
            left:0;
            background:rgba(0,0,0,0.3);
            z-index:2;
          }
        }
      }
    }
  }
// 软件视频开始
.softWareVideo{
    .top{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      .left{
        display:flex;
        align-items: center;
      }
      .right{
        font-size:13px;
        color:#aaa;
      }
    }
    .list{
      width:100%;
      display:flex;
      justify-content: space-around;
      .item{
        width:48%;
        img{
          width:100%;
        }
      }
    }
  }
// 软件视频结束

// 直播课程开始
.directClass{
    .top{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      .left{
        display:flex;
        align-items: center;
      }
      .right{
        font-size:13px;
        color:#aaa;
      }
    }
    .list{
      width:100%;
      display:flex;
      justify-content: space-around;
      .item{
        width:48%;
        img{
          width:100%;
        }
        .text-person{
          width:100%;
          display:flex;
          align-items: center;
          justify-content: space-between;
          .text{
            font-size: 14px;
          }
          .person{
            font-size:12px;
          }
        }
      }
    }
  }
  // 直播课程结束
  // 图文教程开始
  .imgWord{
    width:100%;
      .top{
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:10px;
        .left{
          display:flex;
          align-items: center;
        }
        .right{
          font-size:13px;
          color:#aaa;
        }
      }
      .list{
        width:100%;
        .item{
          width:100%;
          display:flex;
          justify-content: space-between;
          line-height: 40px;
          border-bottom: 1px solid #eee;
          margin-left:10px;
          .img-num{
            display:flex;
            align-items:center;
            img{
              width:15px;
              height:10px;
              color:#ccc;
            }
            .num{
              font-size: 12px;
              margin-left:5px;
            }
          }

        }
      }
    }
  // 图文教程结束
  // 底部
  .footer{
    width:100%;
    height:70px;
    background:rgb(31,38,49);
    div{
      padding-left: 10px;
      padding-top:10px;
      text-align: left;
      line-height: 18px;
      font-size: 12px;
      color:#aaa;
    }
  }
</style>
