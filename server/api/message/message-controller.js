import dbFirebase from '../../commons/db-firebase.js';
import _ from 'lodash';
import moment from 'moment';

export default class MessagesCtrl {
  static getAllMessages(req, res) {
    dbFirebase.getAll('messagess').then((items) => {
      res.status(200).json(items);
    }, (err) => {
      res.status(500).send();
    })
  }

  static sendMessage(req, res) {
    let message = _.pick(req.body, ["title", "body", "receivers"]);
    let transmitTo = message.receivers;

    message.createdAt = moment().format();
    dbFirebase.pushItem("messageList", message).then((r) => {
      let messages = {};
      transmitTo.forEach((receiver) => {
        messages[`userData/${receiver}/messages/${r.key}`] = {status: "unread"}
      }, this);
      dbFirebase.pushObject(messages).then(() => {
        res.status(200).send();
      }, (err) => {
        res.status(500).json(err);
      })
    }, (e) => {
      res.status(500).json(err);
    });
  }
}