import restrictedRoutes  from './routes-restricted';
import messageRoutes from '../api/message/message-routes'; 
import addressBookRoutes from '../api/addressBook/addressBook-routes'; 
import loginRoutes from '../api/login/login-routes'; 
import adminRoutes from '../api/admin/admin-routes';

export default class RouterConfig {
  static init(app, router) {
    restrictedRoutes.init(app);
    messageRoutes.init(router);
    addressBookRoutes.init(router);
    loginRoutes.init(router);
    adminRoutes.init(router);

    app.use('/', router);
  }
}