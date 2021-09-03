<template>
  <div>
    <img src="~assets/img/cart/tick.svg" alt="" :class="{ active: ischecked }"class="check-button" />
  </div>
</template>

<script>
export default {
  name: "Checkbutton",
  props: {
    ischecked: {
      type: Boolean,
      default(){
          return false
      }
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.active {
  background-color: red;
   border: 2px solid red;
  border-radius: 50%;
}
</style>