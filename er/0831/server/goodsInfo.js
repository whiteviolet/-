module.exports=(function () {
    return function (goodsInfoList,obj,res,resultObj) {
      var arr=goodsInfoList.filter(function (item) {
            return item.id.toString()===obj.id.toString();
        });
        resultObj.result=arr[0];
        res.write(JSON.stringify(resultObj));
        res.end();
    }
})();