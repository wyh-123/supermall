<template>
  <div>
    <navbar @scroll="handleScroll">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="centertitle">
        <div
          v-for="(item, index) in titles"
          class="titleitem"
          :class="{ active: currentindex == index,active1:show }"
          @click="itemclick(index)">
          {{ item }}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar.vue";
export default {
  name: "Detailnavbar",
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
      show: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    itemclick(index) {
      this.currentindex = index;
    },
    back() {
      this.$router.go(-1);
    },
    handleScroll(){
         if (window.pageYOffset > 15478) {
             /* this.show=true */
      } 
      else if (window.pageYOffset > 16744) {

      }
      else if (window.pageYOffset > 16963) {

      }
    }
  },
};
</script>

<style scoped>
.centertitle {
  display: flex;
  font-size: 13px;
}
.titleitem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active1 {
  color: var(--color-high-text);
}
.back {
  margin-top: 6px;
}
</style>