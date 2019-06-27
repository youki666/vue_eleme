<template>
    <transition name='move'>
          <div class="food" v-show="showFlag" ref="food">
               <div class="food-content">
                   <div class="img-header">
   	       	   	       <img :src="food.image" alt="">
   	       	   	      <div class="back" @click="hide">
   	       	                <span class="icon">
                                <svg class="icon" aria-hidden="true">
                                  <use xlink:href="#icon-previewleft"></use>
                                </svg>
                            </span>
   	                  </div>
   	       	       </div>
                    <div class="contents">
   	       	   	         <h1 class="food-title">{{food.name}}</h1>
                         <div class="food-detail">
                   	          <span class="sell-count">月售{{food.sellCount}}</span>
                              <span class="rating">好评率{{food.rating}}%</span>
                        </div>
                         <div class="food-price"> <!--价格-->
                              <span class="now">￥{{food.price}}</span>
                              <span class="old"  v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                        </div>
       	       	        <div class="cartcontrol-wrapper">
   	       	   	            <cartcontrol :food="food"></cartcontrol>
   	       	             </div>
   	       	             <transition name="fade">
   	       	     	          <div @click.stop.prevent="add" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
   	       	            </transition>
   	       	        </div>
                    <split v-show="food.info"></split>
                    <div class="info" v-show="food.info">
                      <h1 class="title">商品信息</h1>
                      <p class="text">{{food.info}}</p>
                    </div>
               <split></split>
               </div>
          </div>
    </transition>
</template>

<script>
import Vue from 'vue'
import BS from 'better-scroll'
import cartcontrol from './cartcontrol'
import split from './split'
export default{
    name: 'food',
    props:{
  	 food:{
  	 	type: Object
  	 }
      },
    components:{
      cartcontrol,
      split
  	},
    data () {
    return {
        showFlag: false
    }
  },
  methods:{
    show(){
        this.showFlag = true
        this.$nextTick(()=>{
       	if(!this.scroll){
       	 this.scroll = new BS(this.$refs.food, {click:true});
       	}else{
       		this.scroll.refresh();
       	}
       })
      },
    hide(){
     	this.showFlag = false;
     },
    add(){
        this.$emit('add', event.target);
        Vue.set(this.food, 'count', 1);
     },
  }
}
</script>

<style lang="less" scoped>
  .food{
   position: fixed;
   left: 0;
   top: 0;
   bottom: 48px;
   z-index: 98;
   width: 100%;
   background: #fff;
   transform: translate3d(0 ,0 ,0);
   .img-header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    padding-top: 100%;
    img{
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%; /* 图片布局 end*/
    }
    .back {
     position: absolute;
     top: 0;
     left: 10px;
     .icon{
      display: block;
      padding: 10px;
      font-size: 20px;
      color: #fff;
     }
    }
   }
   .contents {
       position: relative;
      padding: 18px;
      .food-title {
        line-height: 14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
      }
      .food-detail {
        margin-bottom: 18px;
        line-height: 10px;
        height: 10px;
        font-size: 0;
        .sell-count,.rating{
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .sell-count {
            margin-right: 12px
        }
      }
      .food-price {
          font-weight: 700;
        line-height: 24px;
        .now {
            // 现价
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }
        .old {
            // 原价
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .cartcontrol-wrapper{
        position: absolute;
        right: 12px;
        bottom: 12px;
      }
      .buy {
        position: absolute;
        right: 18px;
        bottom: 18px;
        z-index: 10;
        line-height: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        border-radius: 12px;
        font-size: 10px;
        color: #fff;
        background: rgb(0, 160, 220);
        opacity: 1;
        &.fade-enter-active, &.fade-leave-active{
          transition: all 0.2s
        }
        &.fade-enter, &.fade-leave-active{
          opacity: 0;
          z-index: -1;
        }
      }
        
   }
   .info {// 商品详情
    padding: 18px;
    .title{
    line-height: 14px;
    margin-bottom: 6px;
    font-size: 14px;
    color: rgb(7, 17, 27);
     }
     .text {// 商品介绍
    line-height: 24px;
    padding: 0 8px;
    font-size: 12px;
    color: rgb(77, 85, 93)
    }
   }
  }
   .move-enter-active,&.move-leave-active{
     transition: all 0.5s linear;
   }
   .move-enter,&.move-leave-active{
     transform: translate3d(100%, 0, 0);
   }
    
</style>
