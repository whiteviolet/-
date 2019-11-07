<template>
    <div>
        用户名：<input type="text" placeholder="请输入用户名" v-model="username"><br>
        密&emsp;码：<input type="password" placeholder="请输入密码" v-model="password"><br>
        <button type="button" @click="login()">登录</button>
    </div>
</template>

<script>

import {mapActions} from "vuex"
    export default {
        name: 'login',
        data(){
            return {
                username:"",
                password:""
            }
        },
        methods:{
            ...mapActions({
                storeLogin:"login/login"
            }),
            login() {
                if (this.username.match(/^\s*$/)) {
                    alert("请输入用户名");
                    return
                }
                if (this.password.match(/^\s*$/)) {
                    alert("请输入密码");
                    return
                }
                this.storeLogin({cellphone:this.username,password:this.password,success:res=>{
//                   console.log(res)
                    if(res.code==200){
                        this.$router.push("/")
                    }else{
                        alert("登录失败，请重新输入")
                    }
                } 
                })

            }
        }
    }
</script>

<style scoped>

</style>
