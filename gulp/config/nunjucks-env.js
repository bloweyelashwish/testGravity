import merge from 'merge';

export const manageEnvironment  = (environment) => {
  environment.addGlobal('merge', function(...args) {
    return merge({}, ...args)
  })
}