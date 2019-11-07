import Util from "../utils/Utils.js";
import MainModel from "../model/MainModel.js";
import StepNumber from "../component/StepNumber.js";
import AJAX from "../utils/AJAX.js";
export default class ShoppingTable{
    headList = ["全选", "", "商品", "", "单价", "数量", "小计", "操作"];
    headWidth = [122, 0, 208, 210, 120, 80, 140, 110];
    constructor(){
        this.elem=this.init();
    }
    init(){
        if(this.elem) return this.elem;
        let table = Util.ce("table", {
            borderCollapse: "collapse",
            width: "990px",
            margin: "auto"
        });
        this.createTableHead(table);
        this.createTableBody(table);
        this.createTableSum(table);
        this.getSum();
       return table;
    }
    appendTo(parent){
        this.parent=parent;
        parent.appendChild(this.elem);
    }
    createTableHead(parent) {
        let tr = Util.ce("tr", {
            backgroundColor: "#f3f3f3",
            border: "1px solid #e9e9e9",
            fontSize: "12px"
        });
        for (let i = 0; i < this.headList.length; i++) {
            let th = Util.ce("th", {
                height: "43px",
                width: this.headWidth[i] + "px",
                textAlign: "left"
            });
            th.textContent = this.headList[i];
            if (i === 0) {
                th.colSpan = 2;
                th.style.paddingLeft = "11px";
                let ck = Util.ce("input", {
                    verticalAlign: "middle"
                });
                ck.type = "checkbox";
                ck.checked=MainModel.getInstance().shoppingList.every(function(item){
                    return item.selected;
                });
                this.ckChangeBind=this.ckChangeHandler.bind(this);
                ck.addEventListener("click",this.ckChangeBind);
                th.insertBefore(ck, th.firstChild);
            }

            if (i === 1) continue;
            if (i === 2) th.style.paddingLeft="20px";
            if (i>= 4 && i<=6) th.style.textAlign="center";
            tr.appendChild(th);
        }
        parent.appendChild(tr);
    }
    createTableBody(parent) {
        let shoppingList=MainModel.getInstance().shoppingList;
        for (let i = 0; i < shoppingList.length; i++) {
            let tr = Util.ce("tr", {
                "border": "1px solid #c5c5c5",
                backgroundColor: "#FFFFFF",
                fontSize: "12px",
                height: "119px",
                lineHeight: "119px"
            });

            for (let prop in shoppingList[i]) {
                if (prop === "id") continue;
                let td = Util.ce("td", {

                });
                if(prop==="names"){
                    td.style.paddingLeft = "20px";
                    Object.assign(td.style,{
                        paddingLeft:"15px",
                        lineHeight:"16px",
                    })
                }
                this.addTdContent(td, prop, shoppingList[i]);
                tr.appendChild(td);
            }
            parent.appendChild(tr);
        }
    }
    addTdContent(td, prop, obj) {
        switch (prop) {
            case "selected":
                let ck=Util.ce("input",{verticalAlign: "middle"});
                ck.type="checkbox";
                ck.data=obj;
                ck.checked=obj.selected;
                td.appendChild(ck);
                td.style.paddingLeft="11px";
                ck.addEventListener("click",this.ckChangeBind);
                break;
            case "icon":
                let img=Util.ce("img",{
                    width:"80px",
                    height:"80px",
                    verticalAlign: "middle",
                    marginLeft:"10px"
                });
                img.src=obj.icon;
                td.appendChild(img);
                break;
            case "price":
            case "total":
                td.textContent="￥"+obj[prop].toFixed(2);
                td.style.textAlign="center";
                if(prop==="total")  td.id=obj.id;
                break;
            case "num":
                let step=new StepNumber(obj);
                step.appendTo(td);
                break;
            case "deleted":
                let a=Util.ce("a",{
                    color:"black",
                    textDecoration:"none"
                });
                a.textContent="删除";
                a.ids=obj.id;
                this.deleteHandlerBind=this.deleteHandler.bind(this);
                a.addEventListener("click",this.deleteHandlerBind);
                a.href="javascript:void(0)";
                td.appendChild(a);
                break;
            default:
                td.textContent=obj[prop];
        }
    }
    setTotal(id,total){
        let td=document.getElementById(id);
        td.textContent=total.toFixed(2);
    }
    ckChangeHandler(e){
        if(!e.currentTarget.data){
            let checked=e.currentTarget.checked;
            let ids=[];
            MainModel.getInstance().shoppingList.forEach(function(item){
                item.selected=checked;
                ids.push(item.id);
            });
            AJAX.post({type:0x06,ids:ids,selected:checked});
        }else{
            let id=e.currentTarget.data.id;
            let arr=MainModel.getInstance().shoppingList.filter(function(item){
                return item.id===id;
            });
            arr[0].selected=e.currentTarget.checked;
            AJAX.post({type:0x06,ids:[id],selected:arr[0].selected});
        }
        this.dispose();
        this.elem=this.init();
        this.parent.appendChild(this.elem);

    }
    deleteHandler(e){
        e.currentTarget.removeEventListener("click",this.deleteHandlerBind);
        AJAX.post({type:0x05,ids:[e.currentTarget.ids]})
    }
    createTableSum(parent){
        let tr=Util.ce("tr");
        this.sumTd=Util.ce("td",{
            fontSize:"30px",
            color: "red",
            textAlign:"right",
            paddingRight:"10px"
        });
        this.sumTd.colSpan = 8;
        this.sumTd.textContent="总价:0元";
        tr.appendChild(this.sumTd);
        parent.appendChild(tr);
    }
    getSum(){
        this.sumTd.textContent="总价:"+MainModel.getInstance().shoppingList.reduce(function(sum,item){
            if(item.selected) return sum+item.total;
            return sum;
        },0).toFixed(2)+"元";
    }
    dispose(){
        let cks=document.querySelectorAll("[type=checkbox]");
        for(let i=0;i<cks.length;i++){
            cks[i].removeEventListener("click",this.ckChangeBind);
        }
        this.ckChangeBind=null;
        let as=document.querySelectorAll("a");
        for(let i=0;i<as.length;i++){
            as[i].removeEventListener("click",this.deleteHandlerBind);
        }
        this.deleteHandlerBind=null;
        this.elem.remove();
        this.elem=null;
    }
}