<template>
    <div>
        个人资料 <br>
        <span>欢迎{{$store.state.use.cickname}}回来</span>
        <div @click="outLogin()">安全退出</div>
    </div>
</template>

<script>


    export default {
        name: '',
        methods:{
            outLogin(){
                localStorage.clear();
                this.$router.replace("/login")
            }
        },
        beforeRouteEnter(to,from,next){
            if(Boolean(localStorage['isLogin'])){
                next()
            }else  {
                next('/login')
            }

        }


    }
</script>

<style scoped>

</style>
