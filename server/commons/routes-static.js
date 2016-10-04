import fs from 'fs';

export default class StaticRoutes {
  static init(router) {
    router.route('*').get((req, res) => {
      var _root = process.cwd();

      res.type('.html');

      fs.createReadStream(_root + '/client/dev/index.html')
        .pipe(res);
    });
  }
}