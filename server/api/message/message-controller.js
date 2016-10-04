import dbFirebase from '../../commons/db-firebase.js';

export default class MessagesCtrl {
  static getAllMessages(req, res) {
    dbFirebase.getAll('todos').then((items) => {
      res.status(200).json(items);
    })
  }
}