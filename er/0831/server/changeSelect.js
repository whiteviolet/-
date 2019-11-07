module.exports=(function () {
    return function (shoppingList,obj,res,resultObj) {
        shoppingList.forEach(function (item) {
            if(obj.ids.indexOf(item.id)>-1){
                item.selected=obj.selected;
            }
        });
        resultObj.result={ids:obj.ids,selected:obj.selected};
        res.write(JSON.stringify(resultObj));
        res.end();
    }
})();