<template>
     <div class="nav">
   <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'Tabbar',
};
</script>

<style  scoped>
#app .nav{
  padding-top: 10px;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}

</style>