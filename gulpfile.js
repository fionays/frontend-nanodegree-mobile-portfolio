var gulp = require('gulp'),
	inlinesource = require('gulp-inline-source'),
	imagemin = require('gulp-imagemin'),
  minifyhtml = require('gulp-htmlmin'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css');

// Compress src/img 
gulp.task('imagemin', function() {
  return gulp.src('src/img/*')
  	.pipe(imagemin({
  		progressive: true
  	}))
  	.pipe(gulp.dest('dist/img'));
});

// // Compress src/views/images 
// gulp.task('imageminViews', function() {
//   return gulp.src('src/views/images/*')
//     .pipe(imagemin({
//       progressive: true
//     }))
//     .pipe(gulp.dest('dist/views/images'));
// });

// Inline CSS and minify html
gulp.task('minifyhtml', function() {
  return gulp.src('src/*.html')
    .pipe(inlinesource())
    .pipe(minifyhtml({
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('minifypizza', function() {
  return gulp.src('src/views/pizza.html')
    .pipe(minifyhtml({
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('dist/views'));
});

// Minify print.css
gulp.task('minifyprint', function() {
  return gulp.src('src/css/print.css')
    .pipe(minifycss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'));
});

// Minify perfmatters.js
gulp.task('minifyper', function() {
  return gulp.src('src/js/perfmatters.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['imagemin', 'minifypizza', 'minifyhtml', 'minifyper', 'minifyprint']);
