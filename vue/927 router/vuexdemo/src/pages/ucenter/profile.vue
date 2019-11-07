<template>
    <div>
        个人资料
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
