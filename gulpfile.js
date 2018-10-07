let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let rename = require("gulp-rename");
let babel = require("gulp-babel");
let uglyfly = require('gulp-uglyfly');
let browserSync = require("browser-sync");
let less = require("gulp-less");


let paths = {
    html:"./src/*.html",
    css:"./src/css/*.css",
    less:"./src/css/*.less",
    js:'./src/js/*.js'
};


gulp.task("sync",()=>{
    browserSync.init({
        server:{baseDir:"./dist"},
        port:8080,
        open:true,
        notify:false
    })
});


gulp.task("html",()=>{
    gulp.src(paths.html)
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task("css",()=>{
    gulp.src(paths.css)
        .pipe(cleanCSS({
            compatibility:'ie8',
            format:'beautify'
        }))
        .pipe(gulp.dest("./dist/css"))
        .pipe(cleanCSS({
            compatibility:'ie8'
        }))
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task("less",()=>{
    gulp.src(paths.less)
        .pipe(less())
        .pipe(cleanCSS({
            compatibility:'ie8',
            format:'beautify'
        }))
        .pipe(gulp.dest("./dist/css"))
        .pipe(cleanCSS({
            compatibility:'ie8'
        }))
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task("js",()=>{
    gulp.src(paths.js)
        .pipe(babel({presets:['@babel/env']}))
        .pipe(gulp.dest("./dist/js"))
        .pipe(uglyfly())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.reload({stream:true}))

});
gulp.task("watch",()=>{
    gulp.watch(paths.html,['html']);
    gulp.watch(paths.less,['less']);
    gulp.watch(paths.css,['css']);
    gulp.watch(paths.js,['js']);
});





gulp.task("build",["less","html","css","js","watch","sync"]);

