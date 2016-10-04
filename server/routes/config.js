import staticRoutes  from '../commons/routes-static';
import restrictedRoutes  from '../commons/routes-restricted';
import messageRoutes from '../api/message/message-routes'; 

export default class RouterConfig {
  static init(app, router) {
    restrictedRoutes.init(app);
    messageRoutes.init(router);

    staticRoutes.init(router);
    app.use('/', router);
  }
}