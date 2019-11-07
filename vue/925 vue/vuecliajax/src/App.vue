
 <template>
  <div id="app">


  </div>
</template>

<script>
import Vue from "vue"//导入vue
import axios from "axios"

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

    },
    created(){
        axios.get(process.env.VUE_APP_API+"/home/index/nav?token="+process.env.VUE_APP_TOKEN).then(res=>{
            console.log(res)
        })
    }



}
</script>

<style>
@import "./assets/css/publish.css";
</style>
