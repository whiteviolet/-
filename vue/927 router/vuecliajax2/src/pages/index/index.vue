<template>
    <div>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/news">新闻</router-link></li>
            <li @click="goPage('/goods',{gid:3,title:'商品'})">产品</li>
            <li @click="$router.push('/login')">会员登录</li>
            <li @click="$router.push('/ucenter')">会员中心</li>
            <li @click="$router.push('/profile')">个人资料</li>
            <li @click="$router.push('/classify?id=1')">商品分类</li>
            <li @click="$router.push('/time')">定时器 </li>
        </ul>
    </div>
</template>

<script>


    export default {
        name: 'index',
        methods:{
            goPage(url,param){
                this.$router.push({name:"goods",params:param})
            }
        }

    }
</script>

<style scoped>

</style>
