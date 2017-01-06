import db from '../../../commons/db-firebase';
import ErrorFactory from '../../../commons/app-errors';
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
    let groups = '/groups'
    let groupPath = `${groups}/${groupId}`;
    return new Promise((resolve, reject) => {
        db.getItem(groups, groupId).then((group) => {
            let groupExists = group && group.name;
            if (groupExists) {
                let usersOfGroup = group.users || [];
                let userIsInGroup = !!(usersOfGroup.indexOf(userId) + 1);
                if (!userIsInGroup) {
                    usersOfGroup.push(userId);
                }

                group.users = usersOfGroup;
                let toUpdate = {};
                toUpdate[groupPath] = group;
                db.updateObject(toUpdate).then(resolve, reject);
            } else {
                reject(ErrorFactory.BizError(undefined ,`could not find group of id ${groupId}`));
            }
        })
    })
}

export default {
    createGroup: createGroup,
    newUser: createNewUser,
    addUserIdToGroupId: addUserIdToGroupId,
}