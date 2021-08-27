<template>
    <div class="swiper-detail">
       <Swiper class="sss">
            <Swiper-item v-for="(item,index) in TopImages" :key="index" class="swiper-item">
                <img :src="item" alt="">
            </Swiper-item>
        </Swiper> 
    </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
    name: 'Detailswiper',
    props:{
        TopImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }


};
</script>

<style scoped>
.swiper-item{
    height: 400px;
    overflow: hidden;
}
.swiper-item img{
    height: 100%;
}
</style>