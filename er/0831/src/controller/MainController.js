import MainModel from "../model/MainModel.js";

export default class MainController{
    constructor(){

    }
   static notify(eventType,data){
       let evt=new Event(eventType);
       evt.data=data;
       MainModel.getInstance().dispatchEvent(evt);
    }
    static showShoppingList(){
       location.href="./shoppingList.html";
    }
    static changeNumber(id,num){
        MainModel.getInstance().shoppingList.forEach(function (item) {
            if(item.id===id){
                item.num=num;
                item.total=num*item.price;
                MainModel.getInstance().table.setTotal(id,item.total)
            }
        });
        MainModel.getInstance().table.getSum();
    }
}