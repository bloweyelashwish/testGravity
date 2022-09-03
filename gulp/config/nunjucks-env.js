import merge from 'merge';
// const merge = require('merge');

export const njkEnv = (env) => {
  const globals = {
    merge: (...args) => merge({}, ...args)
	}
};
