import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css' // сжатие css Файла
import webpcss from 'gulp-webpcss' // вывод webp изображений
import autoprefixer from 'gulp-autoprefixer' // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries' // группировка медиа запросов

const sass = gulpSass(dartSass)

export const styles = () => {
  return app.gulp.src(`${app.path.src.styles}**/*.scss`, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SASS',
        message: 'Error: <%= error.message %>'
      })))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
      webpClass: '.webp',
      noWebpClass: '.no-webp',
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true,
    }))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browsersync.stream())
}