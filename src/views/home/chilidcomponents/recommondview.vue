<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommenditem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="recommend-text">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommondview',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }

  
};
</script>

<style scoped>
.recommend{
    display: flex;
font-size: 15px;
text-align: center;
padding: 10px 0 20px;
border-bottom: 8px solid #eee;
   
}
.recommenditem{
flex: 1;

}
.recommenditem img{
    width: 80%;
    margin-bottom: 10px;
}

</style>