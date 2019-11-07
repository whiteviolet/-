<template>
    <div>
        用户名：<input type="text" placeholder="请输入用户名" v-model="username"><br>
        密&emsp;码：<input type="password" placeholder="请输入密码" v-model="password"><br>
        <button type="button" @click="login()">登录</button>
    </div>
</template>

<script>

import {mapMutations} from "vuex"
    export default {
        name: 'login',
        data(){
            return {
                username:"",
                password:""
            }
        },
        methods:{
            ...mapMutations({
                storeLogin:"use/login"
            }),
            login(){
                if(this.username.match(/^\s*$/)){
                    alert("请输入用户名");
                    return
                }
                if(this.password.match(/^\s*$/)){
                    alert("请输入密码");
                    return
                }
                let url=process.env.VUE_APP_API+"/home/user/pwdlogin?token="+process.env.VUE_APP_TOKEN
                this.$request(url,"post",{cellphone:this.username,password:this.password}).then(res=>{
//                    console.log(res)
                    if(res.code==200){
//                        localStorage['cickname']=res.data.nickname;
//                        localStorage['isLogin']=true;
                        this.storeLogin({cickname:res.data.nickname,isLogin:true})
                        this.$router.replace("/ucenter")
                    }else{
                        alert(res.data)
                    }
                })

            }

        }


    }
</script>

<style scoped>

</style>
