import browsersync from 'browser-sync'
import replace from 'gulp-replace'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'

export const plugins = {
  replace: replace,
  browsersync: browsersync,
  plumber: plumber,
  notify: notify,
  newer: newer,
}