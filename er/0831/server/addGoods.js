module.exports=(function () {
    return function (goodsList,shoppingList,obj,res,resultObj) {
        var arr=shoppingList.filter(function (item) {
                return item.id===obj.id;
        });
        if(arr.length===0){
            var g=goodsList.filter(function (item) {
                return item.id===obj.id;
            })[0];
            var goods={
                id:g.id,
                selected:false,
                icon:g.icon,
                name:g.name,
                info:g.info,
                price:g.price,
                num:obj.num || 1,
                total:g.price*(obj.num || 1),
                deleted:false
            };
            shoppingList.push(goods);
            resultObj.result=shoppingList;
        }else{
            resultObj.type=0x04;
            arr[0].num++;
            arr[0].total=arr[0].price*arr[0].num;
            resultObj.result={id:arr[0].id,num:arr[0].num};
        }
        res.write(JSON.stringify(resultObj));
        res.end();
    }
})();