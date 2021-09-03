<template>
<div class="cart">
  <!-- nav -->
 <nav-bar class="nav-bar">
  <div slot="center">购物车({{cartLength}})</div>
 </nav-bar>
 <!-- list -->
 <Cartlist class="list"/>
 <!-- bottom -->
 <Cartbottombar/>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import {mapGetters} from "vuex";
import Cartlist from "./childrencomponents/cartlist.vue"
import Cartbottombar from './childrencomponents/cartbottombar.vue'
export default {
  name: 'cart',
  components:{
    NavBar,
    Cartlist,
    Cartbottombar
  },
  computed:{
    ...mapGetters(['cartLength'])
  }

}
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 11;
}
.list{
  margin-top: 44px;
}
</style>