var http=require("http");


module.exports=(function () {
    var goodsList = [
        { id: 1001, name: "7天发芽四季开花水培碗莲", icon: "./img/a1.jpg", info: "7天发芽四季碗莲", self: false, history: "146天历史最低价", price: 9.9, oldPrice: 19.8, sold: 0.34 },
        { id: 1002, name: "【请平安】和田玉十二生肖本命佛", icon: "./img/b1.jpg", info: "", self: false, history: "1年历史最低价", price: 236, oldPrice: 658, sold: 0.95 },
        { id: 1003, name: "【品牌秒杀】宽松休闲中长款连衣裙", icon: "./img/c1.jpg", info: "买2件减5元", self: false, history: "62天历史最低价", price: 79, oldPrice: 199, sold: 0.21 },
        { id: 1004, name: "京鱼座 智能红外多功能遥控器", icon: "./img/d1.jpg", info: "普通家电秒变智能", self: true, history: "296天历史最低价", price: 69, oldPrice: 79, sold: 0.23 },
        { id: 1005, name: "【55元两条+送T恤】清凉短裤", icon: "./img/e1.jpg", info: "两条短裤+T恤", self: false, history: "296天历史最低价", price: 55, oldPrice: 128, sold: 0.97 },
        { id: 1006, name: "AOC 21.5吋升级版四核一体机电脑", icon: "./img/f1.jpg", info: "三年上门售后", self: true, history: "31天历史最低价", price: 1849, oldPrice: 2399, sold: 0.19 },
        { id: 1007, name: "联想商务台式机电脑整机21.5英寸", icon: "./img/g1.jpg", info: "", self: true, history: "88天历史最低价", price: 2869, oldPrice: 3599, sold: 0.26 },
        { id: 1008, name: "华美月饼礼盒金秋月圆795g", icon: "./img/h1.jpg", info: "十饼十味", self: true, history: "1年历史最低价", price: 29.9, oldPrice: 99, sold: 0.47 },
    ];
    var goodsInfoList=[
        {id:1001,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"7天发芽四季开花水培碗莲"},
        {id:1002,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"【请平安】和田玉十二生肖本命佛"},
        {id:1003,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"【品牌秒杀】宽松休闲中长款连衣裙"},
        {id:1004,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"京鱼座 智能红外多功能遥控器"},
        {id:1005,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"【55元两条+送T恤】清凉短裤"},
        {id:1006,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"AOC 21.5吋升级版四核一体机电脑"},
        {id:1007,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"联想商务台式机电脑整机21.5英寸"},
        {id:1008,imgList:["a","b","c","d","e","f","g","h","i","j"],imgIconList:["a_icon","b_icon","c_icon","d_icon","e_icon","f_icon","g_icon","h_icon","i_icon","j_icon"],name:"华美月饼礼盒金秋月圆795g"}
    ];
    var route;
    var shoppingList=[];
    return function (_route) {
        route=_route;
        var server=http.createServer(creates);
        server.listen(4010,"10.9.25.219",function () {
            console.log("开启服务");
        });
    };
   function creates(req,res) {
        var data="";
        req.on("data",function (_data) {
            data+=_data;
        });
        req.on("end",function () {
          var obj=JSON.parse(data);
            res.writeHeader(200,{
                "Access-Control-Allow-Origin":"*",
                "content-type":"text/html;charset=utf-8"
            });
            var resultObj={
                type:obj.type,
                error:null
            };
            switch (obj.type){
                case 0x01:
                    resultObj.result=goodsList;
                    break;
                case 0x02:
                    resultObj.result=shoppingList;
                    break;
                case 0x03:
                    route.addGoods(goodsList,shoppingList,obj,res,resultObj);
                    return;
                case 0x04:
                    route.changeNumber(shoppingList,obj,res,resultObj);
                    return;
                case 0x05:
                    route.removeGoods(shoppingList,obj,res,resultObj);
                    return;
                case 0x06:
                    route.changeSelect(shoppingList,obj,res,resultObj);
                    return;
                case 0x07:
                    route.goodsInfo(goodsInfoList,obj,res,resultObj);
                    return;
            }
            res.write(JSON.stringify(resultObj));
            res.end();
        })
    }
})();