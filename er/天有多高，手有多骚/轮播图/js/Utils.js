var Utils = (function () {
    return {
        ce: function (type, style) {
            var elem = document.createElement(type);
            for (var prop in style) {
                elem.style[prop] = style[prop]
            }
            return elem;
        },
        loadImage: function (srcList, callback) {
            var img = new Image();
            img.src = srcList[0];
            img.srcList = srcList;
            img.callback = callback;
            img.self = this;
            img.num = 0;
            img.list = [];
            img.addEventListener("load", this.loadHandler)

        },
        loadHandler: function () {
            this.list.push(this.cloneNode(false));
            this.num++;
            if (this.num > this.srcList.length - 1) {
                this.removeEventListener("load", this.self.loadHandler);

                if (this.callback) {
                    this.callback(this.list);
                    return;
                }

                var evt = new Event("loadFinish");
                evt.list = this.list;
                document.dispatchEvent(evt);
                return;

            }
            this.src = this.srcList[this.num];
        }
    }
})();