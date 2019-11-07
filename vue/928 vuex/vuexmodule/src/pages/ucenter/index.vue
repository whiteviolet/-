<template>
    <div>
        会员中心 <br>
        <div @click="outLogin()">安全退出</div>
    </div>
</template>

<script>

import {mapMutations} from "vuex"
    export default {
        name: '',
        methods:{
            ...mapMutations({
                storeOutlogin:"use/outlogin"


            }),
            outLogin(){
//                localStorage.clear();
                this.storeOutlogin()
                this.$router.replace("/login")
            }
        }


    }
</script>

<style scoped>

</style>
