import QueryString from "../utils/QueryString.js";
import AJAX from "../utils/AJAX.js";
import MainModel from "../model/MainModel.js";
import ZoomShow from "../component/ZoomShow.js";
import StepNumber from "../component/StepNumber.js";
import Utils from "../utils/Utils.js";

export default class Info{
    constructor(){
        MainModel.getInstance().addEventListener(MainModel.SHOW_GOODS_INFO_EVENT,this.showGoodsInfoHandler.bind(this));
       MainModel.getInstance().addEventListener(StepNumber.EVENT_ID,this.stepNumberHandler.bind(this));
        let id=QueryString.parse(location.search.split("?")[1]).id;
        AJAX.post({type:0x07,id:id});
    }
    showGoodsInfoHandler(e){
        let step=new StepNumber();
        step.appendTo(document.body);
        step.move(600,400);
        let zoom=new ZoomShow();
        zoom.appendTo(document.body);
        let title=document.querySelector(".title");
        title.textContent=MainModel.getInstance().goodsInfo.name;
        let bn=Utils.ce("button",{
            display:"block",
            width:"80px",
            height:"40px",
            backgroundColor:"#DF0021",
            margin:"29.5px 0",
            position:"absolute",
            left:"800px",
            top:"350px",
            textAlign:"center",
            lineHeight:"40px",
            color:"white",
            fontSize:"16px",
            textDecoration:"none"
        });
        bn.textContent="立即抢购";
        bn.addEventListener("click",this.clickHandlers.bind(this));
        document.body.appendChild(bn);
    }
    stepNumberHandler(e){
        this.step=e.data.step;
    }
    clickHandlers(e){
        AJAX.post({type:0x03,id:MainModel.getInstance().goodsInfo.id,num:this.step});
    }
}