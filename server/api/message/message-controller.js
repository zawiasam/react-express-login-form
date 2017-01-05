import dbFirebase from '../../commons/db-firebase.js';
import userFirebase from '../../commons/user-firebase.js';
import Logger from '../../commons/logger.js';
import _ from 'lodash';
import moment from 'moment';

class MessagesCtrlHelpers {

  static areUsersExist(userIdArray) {
    return new Promise((res, rej) => {
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
            res({
              existingUsers: existingUsers,
              nonExistingUsers: nonExistingUsers,
            })
          }
        }, (err) => {
          rej({
            fillfull: fillfull
          });
        })
      });
    })
  }
}

export default class MessagesCtrl {
  static getAllMessages(req, res) {
    dbFirebase.getAll('messages').then((items) => {
      res.status(200).json(items);
    }, (err) => {
      res.status(500).send();
    })
  }

  static sendMessage(req, res) {
    let message = _.pick(req.body, ["title", "body", "receivers"]);

    MessagesCtrlHelpers.areUsersExist(message.receivers).then((val) => {
      return new Promise((resolve) => {
        if (val.nonExistingUsers.length) {
          Logger.bizWarning(`some receivers are not accessible ${JSON.stringify(val.nonExistingUsers)}`)
        }
        resolve(val.existingUsers || []);
      })
    }, (err) => {
      Logger.bizError(`could not validate all users. Fillfulled ${err.fillfull}`)
      return new Promise((resolve)=> {
        resolve([]);
      })
    }).then((users) => {
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
          res.status(500).json(err);
        })
      }, (e) => {
        res.status(500).json(e);
      });
    })
  }
}