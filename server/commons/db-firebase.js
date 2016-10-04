import firebase from 'firebase';
import _ from 'lodash';

export default class DbFirebase {
  static getAll(tableName) {
    return new Promise((resolve, reject) => {
      let dbItems = firebase.database().ref(tableName);

      dbItems.once('value').then((snaps) => {
        /* resolve */
        var snapsValues = snaps.val();
        let result = [];
        for (let itemId in snapsValues) {
          result.push(_.assign({ _id: itemId }, snapsValues[itemId]));
        }
        resolve(result);

      }, (reason) => {
        /* reject */
        reject(reason);
      });
    });
  }
}