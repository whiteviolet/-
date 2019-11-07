import Util from "../utils/Utils.js";
import MainController from "../controller/MainController.js";
export default class StepNumber{
    constructor(_data){
        this.data=_data;
        this._step=(_data && _data.num) || 1;
        this.elem=this.init();
    }
    init(){
        if(this.elem) return this.elem;
        let div=Util.ce("div",{
            width:"79px",
            height:"20px",
            display:"inline-block"

        });

        let addBn=Util.ce("div",{
            width:'20px',
            height:'20px',
            lineHeight:'20px',
            backgroundColor:"white",
            display: 'inline-block',
            verticalAlign:"middle",
            textAlign:"center",
            fontSize: "14px",
            cursor:"default",
            border:"1px solid #000000",
            marginTop:"-1px"
        });
        addBn.textContent="+";
        this.input=Util.ce("input",{
            width:"35px",
            height:"20px",
            backgroundColor:"white",
            border:"none",
            textAlign:"center",
            outline:"none",
            display: 'inline-block',
            borderTop:"1px solid #000000",
            borderBottom:"1px solid #000000",
            marginTop: '0px',
            padding: "0px",
           
        });
        this.input.value=this.step.toString();
        let subtract=addBn.cloneNode(false);
        subtract.textContent="-";
        div.appendChild(subtract);
        div.appendChild(this.input);
        div.appendChild(addBn);
        subtract.addEventListener("mousedown",this.mouseHandler);
        addBn.addEventListener("mousedown",this.mouseHandler);
        addBn.addEventListener("click",this.clickHandler.bind(this));
        subtract.addEventListener("click",this.clickHandler.bind(this));
        this.input.addEventListener("input",this.inputHandler.bind(this));
        return div;
    }
    appendTo(parent){
        parent.appendChild(this.elem);
    }
    move(x,y){
        this.elem.style.position="absolute";
        this.elem.style.left=x+"px";
        this.elem.style.top=y+"px";
        this.elem.children[0].style.marginTop="0px";
        this.elem.children[2].style.marginTop="0px";
    }
    mouseHandler(e){
        e.preventDefault();
        
    }
    clickHandler(e){
        if(e.currentTarget.textContent.indexOf("+")>-1){
            this.step++;
        }else{
            this.step--;
        }

    }
    inputHandler(e){
        if(this.ids) return;
        this.ids=setTimeout(()=>{
            clearTimeout(this.ids);
            this.ids=0;
            // this.input.value=this.input.value.replace(/\D/g,"").trim()  || "1";
             this.step=Number(this.input.value.replace(/\D/g,"").trim());
        },500);
    }

    set step(value){
        if(!value)value=1;
        if(value<1)value=1;
        if(value>99)value=99;
        this._step=value;
        this.input.value=value.toString();
        MainController.notify(StepNumber.EVENT_ID,{step:value,id:this.data.id});

    }
    get step(){
        return this._step;
    }

    static get EVENT_ID(){
        return "step_Number_Change";
    }
}