<template>
  <div class="home">
    <div class="home-navbar">
      <navbar>
        <template v-slot:center>
          <div class="home-center">购物街</div>
        </template>
      </navbar>
    </div>
    <!-- 父传子 -->
    <Homeswiper :banners="banners"/>
    <Recommondview :recommends="recommends" />
   
  </div>
</template>

<script>
import { gethomeMultidata } from "network/home.js";
import navbar from "components/common/navbar/NavBar.vue";
import Homeswiper from "./chilidcomponents/homeswiper.vue"
import Recommondview from "./chilidcomponents/recommondview.vue"
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    /* 只保存banner的数据 */
    gethomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
  components: {
    navbar,
   Homeswiper,
   Recommondview
  },
};
</script>
<style scoped>
.home-navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>