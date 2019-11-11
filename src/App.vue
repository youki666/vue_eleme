<template>
  <div id="app">
    <vheader :seller='seller'></vheader>
    <div class='tab border-1px'>
      <div class="tab-item">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
          <router-view :seller='seller'></router-view>
    </div>
  </div>
</template>
<script>
import vheader from './components/head'
const ERR_OK = 0
export default {
  data () {
    return {
      seller: {
        // avatar: {}
      }
    }
  },
  created () {
    this.axios.get('/api/seller').then(res => {
      if (res.data.errno === ERR_OK) {
        this.seller = res.data.data
      }
    })
  },
  components: {
    vheader
  }
}
</script>
<style lang="less">
@import './common/less/mixin.less';
#app {
  .tab{
  display: flex;
  height: 40px;
  line-height: 40px;
  .border-1px(rgba(rgba(7,17,27,0.1)));
  .tab-item {
    flex: 1;
    text-align: center;
    a {
       display: block;
       text-decoration:none;
       font-size: 14px;
       color: rgb(177,185,193);
       &.active{
        color: rgb(240,20,20)
      }
    }
 }
}

}

</style>
