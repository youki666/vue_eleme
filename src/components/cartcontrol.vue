<template>
  <div class="cartcontrol">
        <transition name="move">
          <div class="decrease" v-show="food.count>0" @click.stop.prevent="deCrease">
              <span class="inner">
                  <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-minus"></use>
                  </svg>
              </span>
          </div>
        </transition>
     <div class="count" v-show="food.count>0">{{food.count}}</div>
     <div class="add" @click.stop.prevent="addCart">
         <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-add"></use>
            </svg>
     </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
 props:{
   food:{
    type: Object
   }
 },
 methods:{
    addCart () {
    if (!event._constructed) {
          return;
        }
    if(!this.food.count){
        Vue.set(this.food,'count',1)
    }else {
        this.food.count++
    }
 },
    deCrease() {
    if (!event._constructed) {
          return;
    }
    if (this.food.count) {
         this.food.count--
      }
 }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .cartcontrol{
      font-size: 0;
      .decrease{
        display: inline-block;
        padding: 6px;
        transition: all .4s linear;
        opacity: 1;
        transform: translate3d(0, 0, 0);
        .inner {
          // 减按钮外层
        display: inline-block;
        line-height: 24px;
        font-size: 24px;
        color: rgb(0, 160, 220);
        transition: all .4s linear;
        transform: rotate(0);
      }
      &.move-enter-active, &.move-leave-active{
         transition: all 0.4s linear
      }
        
      &.move-enter, &.move-leave-active{
         opacity: 0;
         transform: translate3d(24px, 0, 0);
         .inner{
           transform: rotate(360deg)
         }  
       }
      }
    .count{
       display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .add{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }
      
  }
      
</style>
<!--    -->
