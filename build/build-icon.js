var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

/** 生成图标字体文件*/
gulp.task('Iconfont', function() {
    return gulp
        .src(['../src/icons/svg/*.svg'])
        .pipe(
            iconfontCss({
                fontName: 'spicons', //字体名
                path: '../src/icons/templates/iconFont.less', //模板文件路径
                targetPath: '../spicons-icons.less',//样式文件目标地址相对于dest目录
                cssClass: 'sp-icon' //样式类名
            })
        )
        .pipe(
            iconfont({
                fontName: 'spicons', // required
                formats: ['ttf', 'eot', 'woff', 'svg']
            })
        )
        .pipe(gulp.dest('../src/styles/iconfont/fonts'));
});


gulp.task('default',gulp.series('Iconfont'));