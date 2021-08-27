<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tabcontrol-item"
        :class="{active:index===currentindex}" @click="activebtn(index)">
            <span >{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabcontrol',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentindex:0
        }
    },
    methods: {
        activebtn(index){
            this.currentindex=index;
            this.$emit('btnclick', index);
        }
    },
};
</script>

<style  scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
}
.tabcontrol-item{
    flex: 1;
    height:40px;
    line-height: 40px;

}
.active{
    color: var(--color-high-text)
}
.active span{
    border-bottom: 3px solid var(--color-tint);
    padding: 5px;
}
</style>