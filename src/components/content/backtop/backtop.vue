<template>
    <div class="back-top">
      <a href="#">
            <img src="~assets/img/common/top.png" alt="">
      </a>
    </div>
</template>

<script>
export default {
    name: 'Backtop',

   
};
</script>

<style scoped>
.back-top{
    position: fixed;
    right: 15px;
    bottom: 89px;
    z-index: 10000;
}
.back-top img{
    width: 43px;
    height: 43px;
}
</style>