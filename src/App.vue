<template>
  <div id="app">
    <maintabbar>
    </maintabbar>
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import maintabbar from "./components/content/maintabbar/maintabbar.vue";
export default {
  name: "App",
  components: {
    maintabbar,
  },
};
</script>

<style>
@import './assets/css/base.css';
</style>
