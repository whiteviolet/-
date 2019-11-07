<template>
    <div>
       <span><router-link to="/">首页</router-link></span>
        计时器：{{count}}
        <div class="box" v-show="isShow" @click="isShow=false"></div>
    </div>
</template>

<script>


    export default {
        name: '',
        data(){
            return {
                count:0,
                isShow:true
            }
        },
        created(){
            this.time=setInterval(()=>{
               this.count++
                console.log(this.count)
    },1000)
        },
        beforeRouteLeave(to,from,next){
            if(this.isShow){
                alert("请先点一下小红")
            }else{
                next()
            }

           
        },
        destroyed(){
            clearInterval(this.time)
        }

    }
</script>

<style scoped>
    .box{width: 50px;height:50px;background-color: red;position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%)}
</style>
