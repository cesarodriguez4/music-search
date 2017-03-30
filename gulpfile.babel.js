import gulp from 'gulp';
import connect from 'gulp-connect';
import webpack from 'gulp-webpack';
import open from 'open';
import clean from 'gulp-clean';

gulp.task('start:server', () => {
	connect.server({
  	  root: __dirname + '/dist/',
      livereload: false,
      port: process.env.PORT || 3000
    });
});

gulp.task('cleanDist', () => {
	return gulp.src('./dist', {read: false}).pipe(clean());
});

gulp.task('moveViews', () => {
	return gulp.src("./app/views/*")
	.pipe(gulp.dest("./dist/views"));
});

gulp.task('moveAssets', () => {
	return gulp.src("./app/assets/**/*")
	.pipe(gulp.dest("./dist/assets"));
});

gulp.task('moveIndex', () => {
	return gulp.src("./app/index.html")
	.pipe(gulp.dest("./dist"));
});

gulp.task('openInBrowser', () => {
	open('http://localhost:3000');
});

gulp.task('build', () => {
	var input = "./app/index.js";
	var output = "./dist";
	return gulp.src(input)
		.pipe(webpack( require('./webpack.config.js')))
		.pipe(gulp.dest(output));
});

gulp.task("watchYou", () => {
	gulp.watch("./app/**/*", ["change"]);
});

gulp.task("change", ["moveViews", "moveAssets","moveIndex", "build"]);

gulp.task("start", ["moveViews", "moveAssets", "moveIndex", "build", "watchYou", "start:server", "openInBrowser"]);






