import ctrl from './admin-controller';

export default class MessagesRoutes {
  static init(router) {
    /**
     * post - 
     * newGroup = {name: }
     */
    router.route('/api/admin/group')
    .post(ctrl.newGroup);
    
    /**
     * post - 
     * {
     *  userId: 'asfas1asd',
     *  groupId: 'kasda1',
     * }
     */
    router.route('/api/admin/userGroup')
    .post(ctrl.addUserIdToGroupId);
  }
}
