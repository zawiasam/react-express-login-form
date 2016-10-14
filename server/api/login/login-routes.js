import ctrl from './login-controller';

export default class MessagesRoutes {
  static init(router) {
    router.route('/api/login')
    .post(ctrl.validateUserByEmail);
  }
} 