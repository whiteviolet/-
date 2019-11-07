var Utils = (function () {
    return {
        ce: function (type, style) {
            var elem = document.createElement(type);
            //ES6   Object.assign(elem.style,style);
            /* ES5 */for (var prop in style) {
                elem.style[prop] = style[prop]
            }
            return elem;

        },
        loadImage: function (srcList, callback) {
            var img = new Image();
            img.src = srcList[0];
            img.srcList = srcList;
            img.num = 0;
            img.list = [];
            img.self = this;
            img.callback = callback;
            img.addEventListener("load", this.loadHandler);
            // document.body.appendChild(img)
        },
        loadHandler: function () {
            //this--->img
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
            this.src = this.srcList[this.num]


        }
    }
})();