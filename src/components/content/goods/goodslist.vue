<template>
    <div class="goodlist">
        <Goodlistitem v-for="item in goods" :goodslistitem="item"/>
    </div>
</template>

<script>
import Goodlistitem from "./goodlistitem.vue"
export default {
    name: 'Goodslist',
    props:{
        goods:{
            type:Array,
            deefault(){
                return []
            }
        }
    },
    components:{
        Goodlistitem
    }
};
</script>

<style  scoped>
.goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>