// осн. модуль.
import gulp from 'gulp'
// import nunjucks from 'gulp-nunjucks'

// импорт путей.
import { path } from './gulp/config/path.js'
// плагины.

import { plugins } from './gulp/config/plugins.js'

// глобальные переменные.
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  // nunjucks: nunjucks,
}

// импорт задач.
// import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { templates } from './gulp/tasks/templates.js'
import { server } from './gulp/tasks/server.js'
import { styles } from './gulp/tasks/styles.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { ttfToWoff2, fontsStyle } from './gulp/tasks/fonts.js'


// function html() {
//   gulp.src(path.src.templates)
//         .pipe(nunjucks.compile({name: 'Sindre'}))
//         .pipe(gulp.dest('dist'))
// }

function watcher() {
  console.log(`${path.src.templates}*.njk`)
  gulp.watch(`./src/**/*.njk`, templates)
  gulp.watch(`./src/**/*.scss`, styles)
  gulp.watch(`./src/**/*.js`, js)
  gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(ttfToWoff2, fontsStyle)
// const dev = gulp.series(reset, fonts, templates, styles, js, images, gulp.parallel(watcher, server))
// const build = gulp.series(reset, fonts, templates, styles, js, images)
const build = gulp.series(reset, templates, styles, js, images)
const dev = gulp.series(build, gulp.parallel(watcher, server))

// выполнение копирования файлов(начальный)
gulp.task('default', dev)
gulp.task('build', build)