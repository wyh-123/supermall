<template>
  <div class="tabbar-item" @click="itemclick">
    <div class="item-img" v-if="!isactive">
      <slot name="item-img"></slot>
    </div>
    <div class="item-active" v-else><slot name="item-active"></slot></div>
    <div class="item-name" :class="{ active: isactive }">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarTabbaritem", 
  props: {
    path: String,
  },
  methods: {
    itemclick(){
      this.$router.replace(this.path)
    }
  },
  computed: {
    isactive() {
      /* 判断当前活跃路由是否为path变量，是的话isactive为true，不是的item组件isactive是false */
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  line-height: 30px;
  height: 70px;
}
.tabbar-item .item-img {
  width: 24px;
  height: 24px;
  margin-top: 10px;
  margin: 0 auto;
  
}
/* 使用穿透选择器 */
.tabbar-item .item-img >>> img {
  width: 100%;
  height: 100%;

}
.item-active {
   width: 24px;
  height: 24px;
  margin-top: 10px;
   margin: 0 auto;
}
.item-active >>> img {
  width: 100%;
  height: 100%;
}
.active {
  color: red;
}
.item-name{
  margin-top: 5px;
}
</style>