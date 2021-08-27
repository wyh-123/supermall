<template>
  <div class="category">
    <!-- 使用bscroll时，这里h1下面只能有一个子元素，可以有多个孙元素 -->
    <h1 ref="aaaa">
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
    </ul></h1>
  </div>
</template>

<script>
import BS from "better-scroll"
export default {
  name: 'category',
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
  this.scroll=new BS(this.$refs.aaaa,{
    probeType:3
    
  })
  this.scroll.on('scroll',position=>{
    console.log(position);
  })
  },
}
</script>
<style scoped>
h1{
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>