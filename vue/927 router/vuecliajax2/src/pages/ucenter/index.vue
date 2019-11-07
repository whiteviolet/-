<template>
    <div>
        会员中心 <br>
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
        }


    }
</script>

<style scoped>

</style>
