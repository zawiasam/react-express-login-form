import ctrl from './addressBook-controller';

export default class MessagesRoutes {
  static init(router) {
    router.route('/api/addressBook')
    .get(ctrl.getAddressBook);
  }
} 