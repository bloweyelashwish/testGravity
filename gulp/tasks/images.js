import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export  const images = () => {
  return app.gulp.src(`${app.path.src.images}/**/*.{jpg,jpeg,png,gif,webp}`)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        tittle: 'IMAGES',
        message: 'Error: <%= error.message %>'
      }))
    )
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(`${app.path.src.images}/**/*.{jpg,jpeg,png,gif,webp}`))
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interplace: true,
      optimizationLevel: 3 // 0 - 7,
    }))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browsersync.stream())
}