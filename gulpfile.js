// Plugins do Gulp
var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var concat   = require('gulp-ruby-sass'); //Plugin do Pré-processador SASS
var rename   = require('gulp-rename');
 
// Onde estão localizados todos os arquivos e mostrar que são JS
var js_src   = "./src/javascript/*.js";
 
// Endereço do script
var js_dist  = "./javascript/";
var js_dist_name = "arquivos.js";
 
// Minify e Concat arquivos
gulp.task('arquivos', function() {
	return gulp.src(js_src)
        .pipe(plumber())
	    .pipe(uglify())
		.pipe(concat(js_dist_name))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(js_dist));
});