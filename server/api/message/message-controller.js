import dbFirebase from '../../commons/db-firebase';
import userFirebase from '../../commons/user-dao';
import groupFirebase from '../../commons/group-dao';
import messagesDao from '../../commons/messages-dao';
import Logger from '../../commons/logger.js';
import _ from 'lodash';
import moment from 'moment';

class ErrorHadler {
  static handle(err, res) {
    res.status(err.httpStatus).send(err.message);
  }
}
class MessagesCtrlHelpers {
  getGoupsAndUsers(receivers) {
    return new Promise((resolve) => {
      let groupsAndUsers = {
        groups: [],
        users: []
      };
      receivers.forEach((receiver) => {
        if (receiver.type === 'group') {
          groupsAndUsers.groups.push(receiver);
        } else {
          groupsAndUsers.users.push(receiver);
        }
      });
      resolve(groupsAndUsers);
    })
  }

  getExistingGroups(groupDefs) {
    return new Promise((resolve, reject) => {
      let notExistingGroups = [];
      let existingGroups = [];

      groupDefs.forEach((groupDef) => {
        let groupName = groupDef.id;
        Logger.bizInfo(`looking for group ${groupName}`);
        groupFirebase.getGroupByName(groupName).then((group) => {
          console.log(group);
          if (group) {
            existingGroups.push(groupName);
          } else {
            notExistingGroups.push(groupName);
          }
        }, reject)
      });

      if (notExistingGroups.length) {
        Logger.bizWarning(`Some groups does not exist ${notExistingGroups}`);
      }
      resolve(existingGroups)
    })
  }

  reportNotExistingUsers(users) {
    return new Promise((resolve) => {
      if (users.nonExistingUsers.length) {
        Logger.bizWarning(`some receivers are not accessible ${JSON.stringify(users.nonExistingUsers)}`)
      }
      resolve(users.existingUsers || []);
    })
  }

  getGroupUsers(groupArray){
    return new Promise((resolve, reject) => {
      if (groupArray.length) {

      } else {
        resolve([]);
      }
    })
  }

  whichUsersExistAndWhichNot(userIdArray) {
    return new Promise((resolve, reject) => {
      let existingUsers = [];
      let nonExistingUsers = [];
      let fillfull = 0;
      userIdArray.forEach((user) => {
        userFirebase.doesExist(user).then((does) => {
          if (does) {
            existingUsers.push(user);
          } else {
            nonExistingUsers.push(user);
          }
          fillfull++;
          if (fillfull === userIdArray.length) {
            resolve({
              existingUsers: existingUsers,
              nonExistingUsers: nonExistingUsers,
            })
          }
        }, reject)
      });
    })
  }
}

class MessagesCtrl {
  getAllMessages(req, res) {
    Logger.bizDebug(`get messagess with req.body [${JSON.stringify(req.query)}]`);

    let data = _.pick(req.query, ["userId"]);
    Logger.bizInfo(`getting messages for user [${data.userId}]`)

    messagesDao.getMessagesByUserId(data.userId).then((items) => {
      res.status(200).json(items);
    }, (err) => {
      ErrorHadler.handle(err, res);
    })
  }

  sendMessage(req, res) {
    let message = _.pick(req.body, ["title", "body", "receivers"]);
    let groupsAndUsers = undefined;
    let users = undefined;
    let groups = undefined;

    let helper = new MessagesCtrlHelpers();
    let query = {
      ctx: {
        calle: 'mza'
      },
      input: {
        message: message
      },
      intermediate: {
        knownGroups: [],
        knownUsers: [],
      },
      output: {
        res: res
      }
    }
    helper.getGoupsAndUsers(message.receivers)
      .then((data) => {
        groupsAndUsers = data;
        users = groupsAndUsers.users;
        return helper.getExistingGroups(groupsAndUsers.groups);
      })
      .then(helper.getGroupUsers)
      .then(helper.whichUsersExistAndWhichNot)
      .then(helper.reportNotExistingUsers)
      .then((users) => {
        message.createdAt = moment().format();
        dbFirebase.pushItem("messageList", message).then((messageRef) => {
          let messages = {};
          users.forEach((receiver) => {
            messages[`userData/${receiver}/messages/${messageRef.key}`] = {
              status: "unread"
            }
          }, this);
          dbFirebase.updateObject(messages).then(() => {
            res.status(200).send();
          }, (err) => {
            ErrorHadler.handle(err, res);
          })
        }, (e) => {
          ErrorHadler.handle(e, res);
        });
      })
      .catch((wtf) => {
        ErrorHadler.handle(wtf, res);
      })
  }
}

export default new MessagesCtrl();