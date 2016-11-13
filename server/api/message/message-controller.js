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
    let message = _.pick(req.body, ["title", "message"]);
    let receiver = _.pick(req.body, ["receiver"]).receiver || "temp";
    message.createdAt = moment().format();

    dbFirebase.pushItem("messagess/" + receiver, message).then(() => {
      res.status(200).send();
    }, (err) => {
      res.status(500).json(err);
    })
  }
}