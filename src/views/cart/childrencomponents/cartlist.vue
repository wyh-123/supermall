<template>
    <div class="cart-list">
        <CartListItem v-for="(item,index) in carlist" 
        :key="index"
        :itemInfo='item'/> 
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
    name: 'Cartlist',
    computed:{
        ...mapGetters(['carlist'])
    },
    components:{
        CartListItem
    }
};
</script>

<style  scoped>
.cart-list{
    width: 100vw;
    height: 100vh;
    word-break: break-all;
}
</style>