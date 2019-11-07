import QueryString from "./QueryString.js";
import ErrorInfo from "../controller/ErrorInfo.js";
import MainModel from "../model/MainModel.js";
import MainController from "../controller/MainController.js";

export default class AJAX{
    static get(obj,dataType){
        if(!dataType) dataType=AJAX.JSON_DATA;
        if(dataType!==AJAX.JSON_DATA && dataType!==AJAX.QUERY_STRING) dataType=AJAX.QUERY_STRING;
        let reqStr;
        if(dataType===AJAX.QUERY_STRING){
            reqStr=QueryString.stringify(obj);
        }else{
            reqStr=JSON.stringify(obj);
        }
        let xhr=new XMLHttpRequest();
        xhr.addEventListener("readystatechange",AJAX.resultHandler);
        xhr.open("GET",AJAX.protocol+AJAX.URL+AJAX.PORT+"?"+reqStr);
        xhr.send();
    }
    static post(obj,dataType){
        if(!dataType) dataType=AJAX.JSON_DATA;
        if(dataType!==AJAX.JSON_DATA && dataType!==AJAX.QUERY_STRING) dataType=AJAX.QUERY_STRING;
        let reqStr;
        if(dataType===AJAX.QUERY_STRING){
            reqStr=QueryString.stringify(obj);
        }else{
            reqStr=JSON.stringify(obj);
        }
        let xhr=new XMLHttpRequest();
        xhr.addEventListener("readystatechange",AJAX.resultHandler);
        xhr.open("POST",AJAX.protocol+AJAX.URL+AJAX.PORT);
        xhr.send(reqStr);
    }
    static resultHandler(e){
        if(this.readyState<4)return;
        if(this.status!==200){
            new ErrorInfo(this.status);
            AJAX.dispose(this);
            return;
        }
        let obj;
        try {
            obj=JSON.parse(this.response);
        }catch (e){
            obj=QueryString.parse(this.response);
        }
        // console.log(obj);
        //obj就是我们需要的返回内容
        switch (obj.type){
            case 0x01:
                //存起来
                MainModel.getInstance().goodsList=obj.result;
                //告诉控制中心抛发
                MainController.notify(MainModel.GET_GOODS_LIST_EVENT);
                break;
            case 0x02:
            case 0x05:
                MainModel.getInstance().shoppingList=obj.result;
                MainController.notify(MainModel.SHOW_SHOPPING_LIST_EVENT);
                break;
            case 0x03:
                MainController.showShoppingList();
                break;
            case 0x04:
                if(location.pathname.indexOf("info.html")>-1){
                    MainController.showShoppingList();
                    return;
                }
                MainController.changeNumber(obj.result.id,obj.result.num);
                break;
            case 0x07:
                MainModel.getInstance().goodsInfo=obj.result;
                MainController.notify(MainModel.SHOW_GOODS_INFO_EVENT);
                break;
        }
        AJAX.dispose(this);
    }
    static dispose(xhr){
        xhr.removeEventListener("readystatechange",AJAX.resultHandler);
        xhr=null;
    }
    static get URL(){
        return "10.9.25.219";
    }
    static get PORT(){
        return ":4010";
    }

    static set protocol(value){
        AJAX._protocol=value;
    }
    static get protocol(){
        if(!AJAX._protocol){
            AJAX._protocol="http";
        }
        if(AJAX._protocol.indexOf("://")<0) AJAX._protocol+="://";
        return AJAX._protocol;
    }

    static get JSON_DATA(){
        return "JSON_DATA";
    }
    static get QUERY_STRING(){
        return "QUERY_STRING";
    }
}