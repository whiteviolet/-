 <template>
  <div id="app">
    <div class="app">
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
      <tr v-for="(item,index) in news" :key="index">
      <td height="35" align="center">{{item.id}}</td>
      <td align="center">{{item.title}}</td>
      <td align="center"><img :src="item.image" alt=""></td>
      <td align="center">{{item.date}}</td>
      </tr>
      </table>
      <div class="header"></div>
    </div>

  </div>
</template>

<script>

import "./assets/js/libs/jquery";
import "./api/news"
export default {
  name: 'app',
  components: {

  },
    data(){
      return{
          news:[]

      }
    },

    created(){
//      console.log(process.env.VUE_APP_DOMAIN)
//        console.log(process.env.VUE_APP_API)
//        let url =process.env.VUE_APP_API+"/home/index/slide?token="+process.env.VUE_APP_TOKEN;
        $.ajax({
            url:"/api/v1/news",
            type:"get",
            dataType:"json",
            success:(res)=>{
//                console.log(res)
                this.news=res.data
            }

        })
    }
}
</script>

<style>
@import "./assets/css/publish.css";
</style>
