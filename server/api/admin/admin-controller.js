import db from '../../commons/db-firebase.js';
import _ from 'lodash'
import adminLogic from './logic/admin-controller-logic'
import adminLogicFake from './logic/admin-controller-logic-fake'

function authSuccess(data, res) {
    res.status(200).send(data);
}
function authFaild(reason, res) {
    res.status(401).send(reason);
}

const logic = adminLogic;

export default class AdminController {
    static newGroup(req, res, next) {
        let groupObj = _.pick(req.body, "name");

        logic.createGroup(groupObj)
            .then((d) => authSuccess(d, res), (e) => authFaild(e, res));
    }

    static newUser(req, res, next) {
        let userObj = _.pick(req.body, "email", "firstName", "lastName", "address");

        logic.newUser(userObj)
            .then((d) => authSuccess(d, res), (e) => authFaild(e, res));
    }

    static addUserIdToGroupId(req, res, next) {
        let userIdAndGroupId = _.pick(req.body, "userId", "groupId");
        logic.addUserIdToGroupId(userIdAndGroupId.userId, userIdAndGroupId.groupId)
            .then((d) => authSuccess(d, res), (e) => authFaild(e, res))
    }
}