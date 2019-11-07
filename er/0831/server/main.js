var server=require("./server");
/*var [addGoods,changeNumber,changeSelect,removeGoods]=[
    require("./addGoods"),
    require("./changeNumber"),
    require("./changeSelect"),
    require("./removeGoods")
];*/
var route={
    addGoods:require("./addGoods"),
    changeNumber:require("./changeNumber"),
    changeSelect:require("./changeSelect"),
    removeGoods:require("./removeGoods"),
    goodsInfo:require("./goodsInfo")
};
server(route);