<template>
    <div>
        <!--<li @click="$router.replace('/classify?id=1')">男装</li>-->
        <!--<li @click="$router.replace('/classify?id=2')">女装</li>-->
        <!--<li @click="$router.replace('/classify?id=3')">童装</li>-->
        <li @click="goPage('/classify?id='+item.cid)"  v-for="(item, index) in this.classify" :key="index">{{item.title}}</li>

    </div>
</template>

<script>

    import {mapState,mapActions} from "vuex"
    export default {
        name: '',

        data(){
            return {


            }

        },
        created(){

            this.getclassify()


//            this.$request(url).then(res=>{
////                console.log(res)
//                if(res.code==200){
//                    this.classify=res.data
//
//                }
//
//            })

        },
        methods:{
            ...mapActions({
                getclassify:"classify/getclassify"
            }),
            goPage(url){
                this.$router.replace("/skip");
                setTimeout(()=>{
                    this.$router.replace(url)
//                    console.log(this.$route.query.id)
                },100)

            }
        },
        computed:{

            ...mapState({
            classify:state=>state.classify.classify
            })
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
