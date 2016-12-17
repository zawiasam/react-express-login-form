import db from '../../../commons/db-firebase.js';
import _ from 'lodash'

function createGroup(group) {
    return new Promise((resolve, reject) => {
        db.pushItem("/groups", group).then(resolve, reject);
    })
}

function createNewUser(user) {
    return new Promise((resolve, reject) => {
        db.pushItem("/users", user).then(resolve, reject)
    });
}

function addUserIdToGroupId(userId, groupId) {
    // let groupPath = `/groups/${groupId}`;
    return new Promise((resolve, reject) => {
        db.getItem('/groups', groupId).then((group) => {
            if (group && group.name) {
                let groupUsers = group.users || [];
                if (!(groupUsers.indexOf(userId) + 1)) {
                    groupUsers.push(userId);
                }
                
                group.users = groupUsers;
                let toUpdate = {};
                toUpdate[`/groups/${groupId}`] = group;
                db.updateObject(toUpdate).then(resolve, reject);
            } else {
                resolve([]);
            }
        })
    })
}

export default {
    createGroup: createGroup,
    newUser: createNewUser,
    addUserIdToGroupId: addUserIdToGroupId,
}