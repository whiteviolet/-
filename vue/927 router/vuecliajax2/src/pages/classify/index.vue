<template>
    <div>
        <!--<li @click="$router.replace('/classify?id=1')">男装</li>-->
        <!--<li @click="$router.replace('/classify?id=2')">女装</li>-->
        <!--<li @click="$router.replace('/classify?id=3')">童装</li>-->
        <li @click="goPage('/classify?id=1')">男装</li>
        <li @click="goPage('/classify?id=2')">女装</li>
        <li @click="goPage('/classify?id=3')">童装</li>
    </div>
</template>

<script>


    export default {
        name: '',
        created(){
//            console.log(this.$router.query.id)
        },
        methods:{
            goPage(url){
                this.$router.replace("/skip");
                setTimeout(()=>{
                    this.$router.replace(url)
                    console.log(this.$route.query.id)
                },100)

            }
        }
//        beforeRouteUpdate(to,from,next){
//            setTimeout(()=>{
//                console.log(this.$route.query.id)
//            },100)
////            console.log(this.$route.query.id)
//            next()
//        }


    }
</script>

<style scoped>

</style>
