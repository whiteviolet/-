import AJAX from "../utils/AJAX.js";
import MainModel from "../model/MainModel.js";
// import GoodsItem from "../component/goodsItem.js";

export default class Index{
    constructor(){
        MainModel.getInstance().addEventListener(MainModel.GET_GOODS_LIST_EVENT,this.goodListHandler)
        MainModel.getInstance().addEventListener(GoodsItem.EVENT_ID,this.goodsAddItemHandler);
        AJAX.post({type:0x01});
    }
    goodListHandler(e){
       for(let i=0;i<MainModel.getInstance().goodsList.length;i++){
           let goods=new GoodsItem();
           goods.data=MainModel.getInstance().goodsList[i];
           goods.appendTo(document.body);
       }
    }

}