import webpack from 'webpack-stream'

export  const js = () => {
  return app.gulp.src(`${app.path.src.js}/*.js`, {sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        tittle: 'JS',
        message: 'Error: U+1F921 <%= error.message %>'
      }))
    )
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.min.js',
      },
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}