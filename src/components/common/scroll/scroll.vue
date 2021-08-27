<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll"
export default {
  name: "Scroll",
  data() {
      return {
          scroll:null
      }
  },
  mounted() {
      this,scroll=new BS(this.$refs.wrapper,{
      })
  },
};
</script>

<style scoped>
</style>