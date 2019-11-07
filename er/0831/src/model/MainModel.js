//数据池
export default class MainModel extends EventTarget{
    constructor(){
        super();
        this.table=null;
    }
   static getInstance(){
        if(!MainModel._instance){
            Object.defineProperty(MainModel,"_instance",{
                value:new MainModel()
            });
        }
        return MainModel._instance;
   }
   set goodsList(value){
       this._goodList=value;
   //    数据分解
   }
   get goodsList(){
        return this._goodList;
   }

   set goodsInfo(value){
       this._goodsInfo=value;
   }
   get goodsInfo(){
       if(!this._goodsInfo) this._goodsInfo={};
       return this._goodsInfo;
   }
   set shoppingList(value){
        this._shoppingList=value;
   }
   get shoppingList(){
        return this._shoppingList;
   }
   static get GET_GOODS_LIST_EVENT(){
       return "get_goods_list_event";
   }
   static get SHOW_GOODS_INFO_EVENT(){
       return "show_goods_info_event";
   }
   static get SHOW_SHOPPING_LIST_EVENT(){
       return "show_Shopping_List_Event";
   }
}