<template>
  <div class="detail" >
    <Detailnavbar class="scrollnavbar" />
    <Detailswiper :TopImages="topImages" />
    <Detailbaseinfo :goods="goods" />
    <DetailShopInfo :shop="shop" />
    <DetailGoodsInfo :detailInfo="detailInfo" />
    <detailparam :paramInfo="paramInfo" />
    <DetailCommentInfo :commentInfo="commentInfo" />
    <goodslist :goods="recommend" />
    <div class="white"></div>
  </div>
</template>

<script>
import Detailnavbar from "./childrencomponents/detailNavBar.vue";
import {
  Getdetail,
  Goods,
  Shop,
  GoodsParam,
  Getrecommend,
} from "network/detail.js";
import Detailswiper from "./childrencomponents/detailswiper.vue";
import Detailbaseinfo from "./childrencomponents/detailBaseinfo.vue";
import DetailShopInfo from "./childrencomponents/detailshopinfo.vue";
import DetailGoodsInfo from "./childrencomponents/detailGoodsInfo.vue";
import detailparam from "./childrencomponents/detailparam.vue";
import DetailCommentInfo from "./childrencomponents/detailcommentInfo.vue";
import goodslist from "components/content/goods/goodslist.vue";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
    };
  },
  components: {
    Detailnavbar,
    Detailswiper,
    Detailbaseinfo,
    DetailShopInfo,
    DetailGoodsInfo,
    detailparam,
    DetailCommentInfo,
    goodslist,
  },
  created() {
    this.iid = this.$route.params.iid;
    /* 请求数据 */
    Getdetail(this.iid).then((res) => {
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      /* 获取商品信息 */
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      /* 获取店铺信息 */
      this.shop = new Shop(data.shopInfo);
      /* 保存商品详情数据 */
      this.detailInfo = data.detailInfo;
      /* 获取参数信息 */
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      /* 获取评论信息 */
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    /* 请求推荐数据 */
    Getrecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
};
</script>

<style  scoped>
.detail {
  width: 100%;
  height: 100%;
}
.scrollnavbar {
  position: sticky;
  top: 0px;
  z-index: 10000;
  background-color: white;
}
.white {
  height: 85px;
}
</style>
