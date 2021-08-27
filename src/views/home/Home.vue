<template>
  <div class="home" @scroll="handleScroll">
    <div class="home-navbar">
      <navbar>
        <template v-slot:center>
          <div class="home-center">购物街</div>
        </template>
      </navbar>
    </div>
    <!-- 父传子 -->
    <Homeswiper :banners="banners" />
    <Recommondview :recommends="recommends" />
    <feature />
    <div class="tabscroll">
      <Tabcontrol :titles="['流行', '新款', '精选']" @btnclick="btnclick" />
    </div>
    <!-- 对应pop的list -->
    <goodslist :goods="changegoodslist"></goodslist>
    <Backtop v-show="isshow"/>
    <ul>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
    </ul>
  </div>
</template>

<script>
import { gethomeMultidata, gethomegoods } from "network/home.js";
import navbar from "components/common/navbar/NavBar.vue";
import Homeswiper from "./chilidcomponents/homeswiper.vue";
import Recommondview from "./chilidcomponents/recommondview.vue";
import feature from "./chilidcomponents/feature.vue";
import Tabcontrol from "components/content/tabcontrol/tabcontrol.vue";
import goodslist from "../../components/content/goods/goodslist.vue";
import Backtop from "components/content/backtop/backtop.vue";
export default {
  name: "Home",
  data() {
    return {
      scrollindex:1,
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentindex: "pop",
      isshow:false
    };
  },
  created() {
    /* 只保存banner的数据 */
    this.gethomeMultidata();
    /* 请求商品数据,有三种类型，pop，new，sell */
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  computed: {
    changegoodslist() {
      return this.goods[this.currentindex].list;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    /* 触发事件 */
    btnclick(index) {
      switch (index) {
        case 0:
          this.currentindex = "pop";
          break;
        case 1:
          this.currentindex = "new";
          break;
        case 2:
          this.currentindex = "sell";
          break;
      }
    },
    handleScroll() {
      if(window.pageYOffset>1000){
        this.isshow=true
      }else{
        this.isshow=false
      };
      if(window.pageYOffset>4437&&this.scrollindex==1){
        this.gethomegoods(this.currentindex)
        this.scrollindex++;
      } else if(window.pageYOffset>8767&&this.scrollindex==2){
        this.gethomegoods(this.currentindex)
        this.scrollindex++;
      }
    },
    /* 网络请求 */
    gethomeMultidata() {
      gethomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    gethomegoods(type) {
      /* 请求的页码不能写死 */
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then((res) => {
        /* 使用扩展运算符把请求来的数据全加到list中 */
        this.goods[type].list.push(...res.data.data.list);
      });
      /* 让当前page+1 */
      this.goods[type].page += 1;
    },
  },
  components: {
    navbar,
    Homeswiper,
    Recommondview,
    feature,
    Tabcontrol,
    goodslist,
    Backtop,
  },
};
</script>
<style scoped>
.home-navbar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.big {
  width: 100%;
  height: 44px;
}
.tabscroll {
  position: sticky;
  /* 距离页面顶部小于44px自动变为fixed定位 */
  top: 44px;
  background-color: #fff;
  z-index: 99;
}
</style>