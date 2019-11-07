import AJAX from "../utils/AJAX.js";
import MainModel from "../model/MainModel.js";
import ShoppingTable from "../component/ShoppingTable.js";
import StepNumber from "../component/StepNumber.js";

export default class ShoppingList{
    constructor(){
        MainModel.getInstance().addEventListener(StepNumber.EVENT_ID,this.stepNumberChangeHandler.bind(this));
        MainModel.getInstance().addEventListener(MainModel.SHOW_SHOPPING_LIST_EVENT,this.showListHandler.bind(this));
        AJAX.post({type:0x02});
    }
    showListHandler(e){
        if(MainModel.getInstance().table){
            MainModel.getInstance().table.dispose();
            MainModel.getInstance().table=null;
        }
        MainModel.getInstance().table=new ShoppingTable();
        MainModel.getInstance().table.appendTo(document.body);
    }
    stepNumberChangeHandler(e){
        AJAX.post({type:0x04,id:e.data.id,num:e.data.step});
        
    }
}