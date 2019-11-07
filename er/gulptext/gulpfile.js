let {src,dest,series,parallel,watch}=require("gulp");
let uglify=require("gulp-uglify");//js文件压缩
let minifyCss=require("gulp-minify-css");//css压缩
let imagemin=require("gulp-imagemin");//图片压缩
let clean=require("gulp-clean");//清空文件
let sass=require("gulp-sass");//解析sass
let concat=require("gulp-concat");//文件合并
let gulpWebServer=require("gulp-webserver");
//登录页面的js合并压缩
function loginJsTask(){
    return src(["./src/assets/js/utils/jquery.js","./src/assets/js/login.js"]).pipe(concat("jquery-login.js"))
        .pipe(uglify()).pipe(dest("./src/static/js"));
}
//会员中心的js合并压缩
function ucenterJsTask(){
        return src(["./src/assets/js/utils/jquery.js","./src/assets/js/ucenter.js"]).pipe(concat("jquery-ucenter.js")).pipe(uglify()).pipe(dest("./src/static/js"));
}
//css
function cssTask(){
    return src("./src/assets/css/**").pipe(minifyCss()).pipe(dest("./src/static/css"));   
}
//图片
function imgTask(){
    return src("./src/assets/images/**").pipe(imagemin()).pipe(dest("./src/static/images"));
}
//sass
function sassTask(){
    return src("./src/assets/sass/**").pipe(sass().on("error",sass.logError)).pipe(minifyCss()).pipe(dest("./src/static/sass"))
}
//清空文件
function cleanTask() {
    return src("./src/static/**").pipe(clean());
}
//静态服务器
function server(){
    return src("./src").pipe(gulpWebServer({
        host:"localhost",//主机地址
        port:8000,//端口号
        open:true,//运行是否自动打开默认浏览器
        livereload:true//更改代码是否自动更新
    }))
}
//监听
function watchTask(){
    //监听css
    watch("./src/assets/css/**",parallel(cssTask));
    //监听scss
    watch("./src/assets/sass/**",parallel(sassTask));
    //监听js
    watch("./src/assets/js/**",parallel([loginJsTask,ucenterJsTask]))
}

exports.default=series(cleanTask,parallel([loginJsTask,cssTask,imgTask,sassTask,ucenterJsTask]),server,watchTask);