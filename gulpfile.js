/**
 * Created by Chengxs on 2017/9/16.
 */
const gulp = require('gulp')
const gulpUtil = require('gulp-util')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackStream = require('webpack-stream')
const webpackDevConfig = require('./build_scripts/webpack.dev.config')
const webpackDistConfig = require('./build_scripts/webpack.dist.config')

gulp.task('build-dev',["webpack:dev-server"], function () {

})

gulp.task('webpack:dev-server', function () {
    let compiler = webpack(webpackDevConfig)
    webpackDevConfig.entry.main.unshift("webpack-dev-server/client?http://localhost:8888/")
    new WebpackDevServer(compiler,{
        hot: true,
        contentBase: './dist'
    }).listen(8888, 'localhost', function (err) {
        if (err){
            throw new gulpUtil.PluginError('webpack-dev-server', err)
        }
        gulpUtil.log('[webpack-dev-server]', 'http://localhost:8888/')
    })
})

gulp.task('dist-html', ['dist-webpack'], function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./dist'))
})

gulp.task('dist-webpack',[], function () {
    return gulp.src('./src/*.js')
        .pipe(webpackStream(webpackDistConfig, webpack))
        .pipe(gulp.dest('./dist'))
})

gulp.task('build-dist',['dist-html'], function () {
    
})