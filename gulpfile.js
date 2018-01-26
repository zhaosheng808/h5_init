/**
 * Created by DELL on 2018/1/26.
 */
// For ES5
var gulp = require('gulp');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task('devServer', function () {
  browserSync({
    notify: false,  // 是否开启浏览器提示
    port: 9000,    // 端口
    server: {
      baseDir: ['public']
    }
  });
  gulp.watch('public/js/*.js').on('change', reload);
  gulp.watch('public/*.html').on('change', reload);
});