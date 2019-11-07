module.exports=(function () {
    return function (shoppingList,obj,res,resultObj) {
        for(var i=0;i<obj.ids.length;i++){
            var len=shoppingList.length;
            for(var j=0;j<len;j++){
                if(shoppingList[j].id===obj.ids[i]){
                    shoppingList.splice(j,1);
                    break;
                }
            }
        }
        resultObj.result=shoppingList;
        res.write(JSON.stringify(resultObj));
        res.end();
    }
})();