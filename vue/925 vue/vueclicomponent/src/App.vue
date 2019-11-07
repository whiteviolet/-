
 <template>
  <div id="app">
       <my-button @click="del()">删除</my-button>
      <ul>
          <li v-for="(item,index) in list" :key="index">{{item.name}} <my-button @click="del(index

          )">删除</my-button></li>
      </ul>

  </div>
</template>

<script>
import Vue from "vue"//导入vue
import Button   from "./components/button/index.js";
import Confirm  from "./components/confirm"
Vue.use(Button);
Vue.use(Confirm);
export default {
  name: 'app',
  components: {

  },
    data(){
      return {
          list:[
              {name:"张莹"},
              {name:"胡海扬"},
              {name:"齐丹萍"}
          ]

      }

    },
    methods:{
        del(index){
            console.log(index)
            this.$confirm("确认要删除吗？",(action)=>{//回调函数

                if(action=="confirm"){

                    this.list.splice(index,1)
                    
                }else if(action=="cannel"){
//                    console.log("取消")
                }
            })
        }
    }



}
</script>

<style>
@import "./assets/css/publish.css";
</style>
