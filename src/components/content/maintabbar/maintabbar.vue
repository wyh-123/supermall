<template>
  <tabbar>
    <tabbaritem path="/home">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-active>
        <img src="@/assets/img/tabbar/home_active.svg" alt="" >
      </template>
      <template v-slot:item-name>
        <div>首页</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/category">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/category.svg" alt="" >
      </template>
      <template v-slot:item-active>
        <img src="@/assets/img/tabbar/category_active.svg" alt="" >
      </template>
      <template v-slot:item-name>
        <div>分类</div>
      </template>
    </tabbaritem>

    <tabbaritem path="/cart">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" >
      </template>
      <template v-slot:item-active>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" >
      </template>
      <template v-slot:item-name>
        <div>购物车</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/profile">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/profile.svg" alt="" >
      </template>
      <template v-slot:item-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" >
      </template>
      <template v-slot:item-name>
        <div>我的</div>
      </template>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from "@/components/common/tabbars/tabbar";
import tabbaritem from "@/components/common/tabbars/tabbaritem";
export default {
    name: 'TabbarMaintabbar',
    components: {
    tabbar,
    tabbaritem,
  }
};
</script>

<style scoped>

</style>