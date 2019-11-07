import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter"
import use from "./modules/login"
import classify from "./modules/classify/index"
import login from "./modules/login/index"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        counter,
        use,
        classify,
        login
    }
})