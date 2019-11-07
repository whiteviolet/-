<template>
    <div>
        <Counter></Counter>
        <!--计数器: <button type="button" @click="dec()">-</button>{{this.$store.state.total}}<button type="button" @click="int()">+</button>-->
        计数器: <button type="button" @click="dec()">-</button>{{this.$store.state.counter.total}}<button type="button" @click="int()
">+</button>

        <ul>
            <li v-for="(item,index) in $store.getters.getUsers" :key="index">{{item.name}}-{{item.age}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex"
import Counter from "../../components/counter.vue"
    export default {
        name: '',
        components:{
            Counter
        },
        data(){
            return {
                count:0
            }

        },
        methods:{
            int(){
                this.$store.commit("incTotal",{total:++this.count})
            },
            dec(){
                this.$store.commit("decTotal",{total:--this.count})
            }
        },
        computed:{
//            ...mapState(["total"])  //其一
//            ...mapState({
//                total2:"total"
//            })  //其二
            ...mapState({
                total3:state=>state.total
            })
        }


    }
</script>

<style scoped>

</style>
