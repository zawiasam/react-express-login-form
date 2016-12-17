import db from '../../../commons/db-firebase.js';
import _ from 'lodash'

function createGroupFake(group) {
    return echo(group.name);
}

function createNewUserFake(user) {
    return echo(user.email);
}

function addUserIdToGroupIdFake(userId, groupId) {
    return echo({
        userId: userId,
        groupId: groupId
    })
}

function echo(param) {
    return new Promise((resolve, reject) => {
        resolve(param)
    });
}

export default {
    createGroup: createGroupFake,
    newUser: createNewUserFake,
    addUserIdToGroupId: addUserIdToGroupIdFake,
}