<template>
  <div class="detail">
    <Detailnavbar class="scrollnavbar" />
    <div class="bac">
      <Detailswiper :TopImages="topImages" />
      <Detailbaseinfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" />
      <detailparam :paramInfo="paramInfo" />
      <DetailCommentInfo :commentInfo="commentInfo" />
      <goodslist :goods="recommend" />
      <Detailbottombar @addToCart="addcart" />
      <toast :message='msg' :isshow='show'/>
      <div class="big"></div>
    </div>
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
import Detailbottombar from "./childrencomponents/detailbottombar.vue";
import toast from "components/common/toast/Toast.vue"
/* 映射actions */
import {mapActions} from 'vuex'
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
      msg:'',
      show:false
    };
  },
  methods: {
    ...mapActions(['addCart']),
        addcart() {
      /* 获取购物车要展示的数据 */
      const product = {};
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;
      /* 如果想要知道操作是否完成，在actions里面返回一个promise对象 */
    /*   this.$store.dispatch('addCart',product).then(res=>{
        console.log(res);
      }); */
      this.addCart(product).then(res=>{
        console.log(res);
        this.show=true;
        this.msg=res
        setTimeout(()=>{
          this.show=false
          this.msg=''
        },2000)

      })
    },
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
    Detailbottombar,
    toast
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
  height: 100vh;
  position: relative;
  z-index: 100;
  background-color: #fff;
}
.bac {
  margin-top: 44px;
  background-color: #fff;
}
.scrollnavbar {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 10000;
  background-color: white;
}
.big {
  height: 10px;
  margin-top: 45px;
}
</style>
