(function($,factory){
    if(typeof module!=="undefined" && module.exports){
        //commomJS规范
        module.exports=factory($);
    }else if(typeof define==="function" && define.amd){
        define(function(){
            return factory($);
        })
    }else if(typeof window!=="undefined"){
        window.Swiper=factory($);
    }
})(window.jQuery,function($){

    var Swiper=function(opts){
        var $this=this;
        //继承
        //第一个参数是否深度拷贝 false浅拷贝，true 深拷贝
        //第二个参数源对象
        //第三个参数目标对象
        $this.opts=$.extend(false,Swiper.default,opts);//没有传参这里就有

        $this.el=$($this.opts.el);//最外面的div
        $this.dot=$this.el.find(".dot");

        $this.swiperWrap=$this.el.find(".swiper-wrap");//外套
        $this.swiperSlide=$this.el.find(".swiper-slide");//图片父元素
        $this.index=0;
        $this.time=null;
        $this.init();


    };
    Swiper.default={
        el:"#show-swiper",
        autoPlay:3000,
        animate:"opacity"//动画类型 slide：滑动，opacity：淡入淡出
    };
    //初始化数据
    Swiper.prototype.init=function(){
        var $this=this;
        // console.log(this)
        $this.bindEvent();
        $this.typeRun();
        $this.autoPlay();
    };
    //监听事件
    Swiper.prototype.bindEvent=function(){
        var $this=this;
        //点击分页器
        $this.dot.on("click",function(){
            $this.index=$(this).index();

             console.log($(this).index())
            $this.typeRun();//那种类型的动画
        });
        // 暂停动画
        $this.swiperWrap.parent().on("mouseover",function(){
            clearInterval($this.timer);
        });
        //开始动画
        $this.swiperWrap.parent().on("mouseout",function(){
            $this.autoPlay();
        });

    };
    //自动播放
    Swiper.prototype.autoPlay=function(){
        var $this=this;
        $this.timer=setInterval(function(){
            $this.index++;
            if($this.index>=$this.swiperSlide.length){
                $this.index=0;
            }
            $this.typeRun();
        },$this.opts.autoPlay)
    };
    //slide滑动
    Swiper.prototype.slideRun=function(){
        var $this=this;
        $this.dot.removeClass("active");//删除当前
        $this.dot.eq($this.index).addClass("active");//轮到那给谁添加
        var iLeft=$this.index*$this.swiperWrap.width();
        $this.swiperWrap.css("left",-iLeft);
    };
    //淡入淡出效果
    Swiper.prototype.opacityRun=function(){
        var $this=this;
        $this.swiperSlide.css({"position":"absolute","z-index":"1","left":"0","top":"0","opacity":"0"});
        $this.swiperSlide.eq($this.index).css({"opacity":"1"})
        $this.dot.removeClass("active");
        $this.dot.eq($this.index).addClass("active");
    };
    //类型动画
    Swiper.prototype.typeRun=function(){
        var $this=this;
        if($this.opts.animate==="slide"){
            //滑动
            $this.slideRun();
        }else if($this.opts.animate==="opacity") {
            //淡入淡出
            $this.opacityRun();
        }
    };
        return Swiper;

})