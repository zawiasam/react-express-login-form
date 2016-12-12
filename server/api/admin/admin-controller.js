import db from '../../commons/db-firebase.js';
import _ from 'lodash'

function createGroup(group) {
    return new Promise((resolve, reject) => {
        db.pushItem("/groups", group).then(resolve, reject);
    })
}

function createGroupFake(group) {
    return new Promise((resolve, reject) => {
        resolve(group.name)
    });
}

let di = {
    prod: {
        createGroup: createGroup
    },
    fake: {
        createGroup: createGroupFake
    }
}

export default class AddressBookController {
    static newGroup(req, res, next) {
        let groupObj = _.pick(req.body, "name");

        di['fake'].createGroup(groupObj)
            .then(function authSuccess(data) {
                res.status(200).send(data);
            },
                function authFaild(reason) {
                    res.status(401).send(reason);
                });
    }
}