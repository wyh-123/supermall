<template>
    <div class="toast" v-show="isshow">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'Toast',
    props:{
        message:{
            type:String,
            default(){
                return '1'
            }
        },
        isshow:{
            type:Boolean,
            default(){
                return false
            }
        }
    }

};
</script>

<style scoped>
.toast{
    width: 200px;
    height: 60px;
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    line-height: 60px;
    transform: translate(-50%,-50%);
    color: #fff;
    background-color: rgba(0, 0, 0, .7)
}
</style>