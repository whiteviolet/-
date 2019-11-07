module.exports=(function () {
    return function (shoppingList,obj,res,resultObj) {
        var arr=shoppingList.filter(function (item) {
            return obj.id===item.id;
        });
        arr[0].num=obj.num;
        arr[0].total=obj.num*arr[0].price;
        resultObj.result={id:arr[0].id,num:arr[0].num};
        res.write(JSON.stringify(resultObj));
        res.end();
    }
})();