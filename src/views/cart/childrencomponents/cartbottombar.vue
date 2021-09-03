<template>
  <div class="bottom-bar">
    <div class="check-content" >
      <Checkbutton :ischecked='checkall' @click.native="checkBtnClick"/>
    </div>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product">去计算({{ totalLength }})</span>
  </div>
</template>

<script>
import Checkbutton from "./CheckButton.vue";
export default {
  name: "Cartbottombar",
  components: {
    Checkbutton,
  },
  methods: {
       checkBtnClick: function () {
       if(this.checkall){
           this.$store.state.carlist.forEach(item=>{
               item.checked=false
           })
       }else{
           this.$store.state.carlist.forEach(item=>{
               item.checked=true
           })
       }
      }
  },
  computed: {
    totalPrice() {
      return this.$store.state.carlist
        .filter((item) => {
          return item.checked == true;
        })
        .reduce((prevalue, item) => {
          return prevalue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    totalLength() {
      return this.$store.state.carlist.filter((item) => {
        return item.checked == true;
      }).length;
    },
    checkall(){
        if(this.$store.state.carlist.length==0){
            return false
        }
        return !this.$store.state.carlist.find(item=>{
            return !item.checked
        })
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  background-color: #eee;
  height: 45px;
  position: fixed;
  bottom: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 15px;
}
.check-content {
  margin-left: 10px;
  margin-right: 3px;
}
.total-price {
  font-size: 15px;
  color: #666;
  flex: 1;
}

.buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  flex: 1;
}
.check {
  background-color: red;
  border-radius: 50%;
}
</style>