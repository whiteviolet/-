import Utils from "../utils/Utils.js";
import MainModel from "../model/MainModel.js";

export default class ZoomShow{
    constructor(){
        this.num=0;
        this.elem=this.init();
    }
    init(){
        if(this.elem) return this.elem;
        let div=Utils.ce("div");
        this.createZoom(div);
        this.createGoodsShow(div);
        return div;
    }
    appendTo(parent){
        parent.appendChild(this.elem);
    }
    createZoom(parent){
        let div = Utils.ce("div", {
            // position: "absolute",
        });
        let src=MainModel.getInstance().goodsInfo.imgList[0];

       this.min = Utils.ce("div", {
            width: "450px",
            height: "450px",
            position: "absolute",
            border: "1px solid #999999",
            backgroundImage: src ? "url(./img/"+src+".jpg??time="+(new Date()).getTime()+")":"",
            backgroundSize: "100% 100%"
        });

        this.max = Utils.ce("div", {
            width: "540px",
            height: "540px",
            position: "absolute",
            left: "458px",
            border: "1px solid #999999",
            backgroundImage:  src ? "url(./img/"+src+".jpg?time="+(new Date()).getTime()+")":"",
            display: 'none'
        });
        this.rect=this.min.getBoundingClientRect();
       this.mask = Utils.ce("div", {
           width: "303px",
           height: "303px",
           backgroundColor: 'rgba(240,220,0,0.3)',
           display: 'none',
           position: "absolute"
       });
        let img = Utils.ce("img", {
            position: "absolute",
            right: 0,
            bottom: 0
        });
        img.src = "./img/search.png";
        this.min.appendChild(img);
        this.min.appendChild(this.mask);
        div.appendChild(this.max);
        div.appendChild(this.min);
        parent.appendChild(div);
        this.min.addEventListener("mouseenter",this.mouseHandler.bind(this));
        this.min.addEventListener("mouseleave",this.mouseHandler.bind(this));
    }

    createGoodsShow(parent){
        let iconList=MainModel.getInstance().goodsInfo.imgIconList;
        let div=Utils.ce("div",{
            width:'452px',
            height:"58px",
            position:'absolute',
            marginTop: '10px',
            left:this.min.parentElement.offsetLeft+"px",
            top:450+"px"
        });
        let leftDiv=Utils.ce("div",{
            width:"41px",
            height:"58px",
            float:"left",
            textAlign:"center",
            lineHeight:"58px"
        });
        let leftimg=Utils.ce("img",{
            verticalAlign:"middle"
        });
        leftimg.src="./img/prev.png";
        leftDiv.appendChild(leftimg);

        let maskDiv=Utils.ce("div",{
            width:"370px",
            height:"58px",
            float:"left",
            position:"relative",
            overflow:"hidden"
        });
        let rightDiv=leftDiv.cloneNode(true);
        rightDiv.firstElementChild.src="./img/next.png";
        this.imgCon=Utils.ce("div",{
            width:iconList.length*(54+ZoomShow.IMG_MARGIN+4)-ZoomShow.IMG_MARGIN+"px",
            height:"58px",
            transition:"all 0.5s",
            position:"absolute",
            left:0
        });
        for(let i=0;i<iconList.length;i++){
            let img=new Image();
            img.src="./img/"+iconList[i]+".jpg";
            this.imgCon.appendChild(img);
            Object.assign(img.style,{
                border:"2px solid rgba(255,0,0,0)",
                marginLeft: i===0 ? 0 : ZoomShow.IMG_MARGIN+"px"
            });
            if(i===0)this.changeBorder(img);
        }
        div.appendChild(leftDiv);
        div.appendChild(maskDiv);
        maskDiv.appendChild(this.imgCon);
        div.appendChild(rightDiv);
        parent.appendChild(div);
        this.imgCon.addEventListener("mouseover",this.iconMouseHandler.bind(this));
        leftDiv.firstElementChild.addEventListener("click",this.bnClickHandler.bind(this));
        rightDiv.firstElementChild.addEventListener("click",this.bnClickHandler.bind(this));
    }

    mouseHandler(e){
        if (e.type === "mouseenter") {
            this.mouseBind=this.mouseHandler.bind(this);
            e.currentTarget.addEventListener("mousemove",this.mouseBind );
            this.mask.style.display = "block";
            this.max.style.display = "block";
        } else if (e.type === "mouseleave") {
            e.currentTarget.removeEventListener("mousemove", this.mouseBind);
            this.mask.style.display = "none";
            this.max.style.display = "none";
        } else if (e.type === "mousemove") {
            this.rect = this.min.getBoundingClientRect();
            this.mask.style.left = e.clientX - this.rect.x - this.mask.offsetWidth / 2 + "px";
            this.mask.style.top = e.clientY - this.rect.y - this.mask.offsetHeight / 2 + "px";
            if (this.mask.offsetLeft <= 0) this.mask.style.left = "0px";
            if (this.mask.offsetTop <= 0) this.mask.style.top = "0px";
            if (this.mask.offsetLeft >= this.rect.width - this.mask.offsetWidth) this.mask.style.left = this.rect.width - this.mask.offsetWidth + "px";
            if (this.mask.offsetTop >= this.rect.height - this.mask.offsetHeight) this.mask.style.top = this.rect.height - this.mask.offsetHeight + "px";
            this.max.style.backgroundPositionX = -this.mask.offsetLeft * (this.max.offsetWidth / this.mask.offsetWidth) + "px";
            this.max.style.backgroundPositionY = -this.mask.offsetTop * (this.max.offsetHeight / this.mask.offsetHeight) + "px"
        }
    }
    iconMouseHandler(e){
        if(e.target.nodeName!=="IMG") return;
        this.changeBorder(e.target);
        this.min.style.backgroundImage="url("+e.target.src.replace("_icon","")+"?time="+(new Date()).getTime()+")";
        this.max.style.backgroundImage="url("+e.target.src.replace("_icon","")+"?time="+(new Date()).getTime()+")";
    }
    changeBorder(elem){
        if(this.pre){
            this.pre.style.border="2px solid rgba(255,0,0,0)";
        }
        this.pre=elem;
        this.pre.style.border="2px solid rgba(255,0,0,1)";
    }

    bnClickHandler(e){
        if(this.bool) return;
        if(e.currentTarget.src.indexOf("next")>-1){
            this.num++;
            if(this.num>=Math.ceil(this.imgCon.offsetWidth/this.imgCon.parentElement.offsetWidth)-1){
                this.num=Math.floor(this.imgCon.offsetWidth/this.imgCon.parentElement.offsetWidth)-1;
                this.imgCon.style.left=-(this.imgCon.offsetWidth-this.imgCon.parentElement.offsetWidth)+"px";
                return;
            }
        }else{

            this.num--;
            if(this.num<0){
                this.num=0;
            }
        }
        this.imgCon.style.left=-this.num*(this.imgCon.parentElement.offsetWidth+ZoomShow.IMG_MARGIN)+"px";
    }
    static get IMG_MARGIN(){
        return 20;
    }

}
