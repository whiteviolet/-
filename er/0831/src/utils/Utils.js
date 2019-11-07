// 动态方法是针对通过new一个类名创建对象可以调用方法 arr.push()  str.slice()
// 静态方法是直接使用类名调用,不需要实例化对象(new 类名)   Array.from()
export default class Utils{
    constructor(){

    }
    static ce(type,style){
        var elem=document.createElement(type);
            // Object.assign(elem.style,style);
            for(var prop in style){
                elem.style[prop]=style[prop];
            }
            return elem;
    }
    static loadImage(srcList,callback){
        var img=new Image();
        img.src=srcList[0];
        img.srcList=srcList;
        img.num=0;
        img.list=[];

        img.callback=callback;
        img.addEventListener("load",Util.loadHandler);
    }
    static loadHandler(e){
        this.list.push(this.cloneNode(false));
        this.num++;
        if(this.num>this.srcList.length-1){
            this.removeEventListener("load",Util.loadHandler);
            if(this.callback){
                this.callback(this.list);
                return;
            }
            var evt=new Event("loadFinish");
            evt.list=this.list;
            document.dispatchEvent(evt);
            return;
        }
        this.src=this.srcList[this.num];
    }
   static randomColor(){
        var col="#";
        for(var i=0;i<6;i++){
            col+=Math.floor(Math.random()*16).toString(16);
        }
        return col;
    }
}