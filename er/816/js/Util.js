export default class util{
    constructor(){

    }
    static ce(type,style){
        var elem=document.createElement(type);
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
        img.addEventListener("load",Util.loadHandle);
    }
    static loadHandle(e){
        this.list.push=(this.cloneNode(false));
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
        for(var i=0;i<6:i++){
            col+=Math.floor(Math.random()*16).toString(16);
        }
        return col;
    }
}