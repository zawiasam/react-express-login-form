import ctrl from './admin-controller';

export default class MessagesRoutes {
  static init(router) {
    router.route('/api/admin/group')
    .post(ctrl.newGroup);
  }
} 