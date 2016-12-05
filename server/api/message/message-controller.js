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
    let message = _.pick(req.body, ["title", "body"]);
    let receivers = _.pick(req.body, ["receivers"]);
    console.log(message);
    console.log(receivers);
    receivers = receivers.receivers.split(',');
    message.createdAt = moment().format();

    let messages = {};
    receivers.forEach((receiver) => {
      messages[`messages/${receiver}`] = message
    }, this);
    dbFirebase.pushObject(messages).then(() => {
      res.status(200).send();
    }, (err) => {
      res.status(500).json(err);
    })
  }
}