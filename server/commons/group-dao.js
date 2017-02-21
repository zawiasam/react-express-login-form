import db from './db-firebase';

let groups = '/groups'
class GroupDao {
  static getGroupById(groupId) {
    let groupPath = `${groups}/${groupId}`;
    return db.getItem(groups, groupId);
  }

  static getGroupByName(groupName) {
    let groupPath = `${groups}`;
    return db.getItemWithFilter(groupPath, {
      name: 'name',
      value: groupName
    });
  }
}

export default GroupDao