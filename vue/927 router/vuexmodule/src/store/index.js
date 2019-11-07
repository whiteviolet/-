import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter"
import use from "./modules/login"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        counter,
        use
    }
})