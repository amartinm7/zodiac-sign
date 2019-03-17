const gulp = require('gulp')

const distAssets = "dist/assets"
const assets = "assets/**/*"
const distImages = "dist/images"
const images = "images/**/*"
const dist = 'dist'

gulp.task('copy-assets', function() {
  return gulp.src(assets)
    .pipe(gulp.dest(distAssets))
})

gulp.task('copy-images', function() {
  return gulp.src(images)
    .pipe(gulp.dest(distImages))
})

gulp.task('copy-index', function() {
  return gulp.src("index.html")
    .pipe(gulp.dest(dist))
})

gulp.task('copy-favicon', function() {
  return gulp.src("favicon.ico")
    .pipe(gulp.dest(dist))
})

gulp.task('build', gulp.parallel('copy-assets', 'copy-images', 'copy-index', 'copy-favicon'), function () {
  console.log('build...')
})

gulp.task('default',gulp.parallel('build'), function () {
  console.log('default...')
})
