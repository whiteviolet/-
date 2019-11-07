import {createStore} from "redux";
import reducer from "./reducer";
let store=createStore(reducer);
//和纯函数建立联系
export default store;