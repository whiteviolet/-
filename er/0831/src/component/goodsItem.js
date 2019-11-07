import Util from "../utils/Utils.js";
import MainController from "../controller/MainController.js";

export default class GoodsItem{
    constructor(){
        this.elem=this.init();
    }
    init(){
        if(this.elem) return this.elem;
        let div=Util.ce("div",{
            width:"290px",
            height:"400px",
            color:"#666666",
            fontSize: "12px",
            margin:"0px 0px 10px 10px",
            float:"left"
        });
        this.createIconDiv(div);
        this.createPriceDiv(div);
        return div;
    }
    appendTo(parent){
        parent.appendChild(this.elem);
    }
    createIconDiv(parent){
        let div=Util.ce("div",{
            width:'230px',
            height:"270px",
            padding:"20px 30px 0px"
        });
        this.iconImg=Util.ce("img",{
            width:"200px",
            height:"200px",
            transition:"all 0.5s"
        });
        
        this.nameTxt=Util.ce("h4",{
            fontSize:"14px",
            color:"#000000",
            margin:" 10px 0 10px -10px"
        });
       
        let info=Util.ce("p",{
            margin:" 5px 0 5px -10px",
            fontSize:"14px",
            color:"#E01222",
        });
        this.selfImg=Util.ce("img",{
            marginRight:"10px",
            verticalAlign:"middle",
        });
        this.selfImg.src="./img/self.png";
        this.infoText=Util.ce("span");
        
        info.appendChild(this.selfImg);
        info.appendChild(this.infoText);
        div.appendChild( this.iconImg);
        div.appendChild( this.nameTxt);
        div.appendChild(info);
        div.addEventListener("mouseenter",this.mouseIconHandler);
        div.addEventListener("mouseleave",this.mouseIconHandler);
        parent.appendChild(div);
    }

    createPriceDiv(parent){
        let div=Util.ce("div",{
            width:"270px",
            height:"89px",
            paddingTop:"10px",
            paddingLeft:"20px",
            position:"relative",
            borderTop:"1px solid #eeeeee"
        });
        this.histordiv=Util.ce("span",{
            color:"#999999",
            backgroundColor:"#E6E6E6",
            padding:"0px 8px",
            fontSize:"12px"
        });

        this.button=Util.ce("a",{
            display:"block",
            width:"80px",
            height:"40px",
            backgroundColor:"#DF0021",
            margin:"29.5px 0",
            position:"absolute",
            right:"0px",
            textAlign:"center",
            lineHeight:"40px",
            color:"white",
            fontSize:"16px",
            textDecoration:"none"
        });
        this.button.textContent="立即抢购";
        div.appendChild(this.button);
        div.appendChild(this.histordiv);
        this.createPrice(div);
        this.createSold(div);
        this.button.target="_blank";
        parent.appendChild(div);
    }
    createPrice(parent){
        let div=Util.ce("div");
        let priceIcon=Util.ce("span",{
            color:"#E01222",
            fontSize:"12px",
        });
        priceIcon.textContent="￥";
        this.priceTxt=Util.ce("span",{
            color:"#E01222",
            fontSize:"24px",
        });
       
        div.appendChild(priceIcon);
        div.appendChild(this.priceTxt);
        let oldPriceIcon=Util.ce("span",{
            color:"#999999",
            fontSize:"12px",
            marginLeft:"10px"
        })
        oldPriceIcon.textContent="￥";
        this.oldPriceTxt=Util.ce("span",{
            color:"#999999",
            fontSize:"12px",
            textDecoration: "line-through"
        })
     
        div.appendChild(oldPriceIcon);
        div.appendChild(this.oldPriceTxt);
        parent.appendChild(div);
    }
    createSold(parent){
        let div=Util.ce("div");
        this.soldSpan=Util.ce("span");
        let spanCon=Util.ce("span",{
            display: 'inline-block',
            width:"88px",
            height:"8px",
            borderRadius: "10px",
            marginLeft:"10px",
            backgroundColor:"#E6E6E6",
            position:"relative"
        });
        this.soldSpanShape=Util.ce("span",{
            display: 'inline-block',
            backgroundColor:"#E01222",
            width:"40px",
            height:"8px",
            borderRadius: "10px",
            position:"absolute"
        });
        spanCon.appendChild(this.soldSpanShape);
        div.appendChild(this.soldSpan);
        div.appendChild(spanCon);
        parent.appendChild(div);
    }
  set data(value){
      this._data=value;
      this.iconImg.src=value.icon;
      this.nameTxt.textContent=value.name;
      if(!value.self){
          this.selfImg.style.display="none";
      }
      this.infoText.textContent=value.info;
      this.histordiv.textContent=value.history;
      this.priceTxt.textContent=value.price;
      this.oldPriceTxt.textContent=value.oldPrice;
      this.soldSpan.textContent="已售"+value.sold*100+"%";
      this.soldSpanShape.style.width=88*value.sold+"px";
      this.button.href="./info.html?id="+this.data.id;
  }
  get data(){
      if(!this._data) this._data = {};
      return this._data;
  }

    static get EVENT_ID(){
        return "add_Click_Goods_Event";
    }
    mouseIconHandler(e){
        if(e.type==="mouseenter"){
           this.firstElementChild.style.marginTop="-15px";
           this.firstElementChild.style.marginBottom="15px";
        }else{
            this.firstElementChild.style.marginTop="0";
           this.firstElementChild.style.marginBottom="0";
        }
    }
}