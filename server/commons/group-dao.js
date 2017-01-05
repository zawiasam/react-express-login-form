import db from './db-firebase';


class GroupDao {
  static getGroupById(groupId) {
    let groups = '/groups'
    let groupPath = `${groups}/${groupId}`;
    return db.getItem(groups, groupId);
  }
}