<template>
    <button type="button" class="btn" @click="emitClick()"><slot></slot></button>
</template>

<script>


    export default {
        name: 'button',
        methods:{
            emitClick(){
                this.$emit("click")
            }
        }


    }
</script>

<style scoped>
    .btn{width: auto;height:auto;background-color: #0000ff;color:#ffffff;padding:5px 15px;font-size:16px;
        cursor: pointer;}
</style>
