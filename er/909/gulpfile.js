var gulp=require("gulp");
gulp.task("init",async function(){
    console.log("简单任务");
    gulp.src("./src/assets/js/*.js").pipe(gulp.dest("./src/static/js"));
});
