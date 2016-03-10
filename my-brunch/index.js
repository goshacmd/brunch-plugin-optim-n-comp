'use strict';

class My {
  compile(params) {
    console.log(1, params.path);
    return Promise.resolve(params);
  }

  optimize(params) {
    console.log(2, params.path);
    return Promise.resolve(params);
  }
}

My.prototype.brunchPlugin = true;
My.prototype.type = 'javascript';
My.prototype.defaultEnv = '*';
My.prototype.extension = 'js';

module.exports = My;
