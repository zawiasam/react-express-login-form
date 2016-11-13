import ctrl from './message-controller';

export default class MessagesRoutes {
  static init(router) {
    router.route('/api/message')
    .get(ctrl.getAllMessages)
    .post(ctrl.sendMessage);
  }
} 