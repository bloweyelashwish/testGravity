import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import nunjucksRender from 'gulp-nunjucks-with-env';

export  const templates = () => {
  nunjucksRender.nunjucks.configure(['./src']);
  console.log(`${app.path.src.templates}*.njk`)
  return app.gulp.src(`${app.path.src.templates}*.njk`)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'NJK',
        message: 'Error: U+1F921 <%= error.message %>'
      }))
    )
    .pipe(nunjucksRender())
    // .pipe(app.nunjucks.compile())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(webpHtmlNosvg())
    .pipe(
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ],
        },
        'output': {
          'file': 'gulp/version.json',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.templates))
    .pipe(app.plugins.browsersync.stream())
}