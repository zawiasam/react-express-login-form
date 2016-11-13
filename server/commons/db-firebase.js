import firebase from 'firebase';
import _ from 'lodash';


class DbFirebase {
  getAll(tableName) {
    return new Promise((resolve, reject) => {
        let dbItems = firebase.database().ref(tableName);

        dbItems.once('value').then((snaps) => {
          /* resolve */
          var snapsValues = snaps.val();
          let result = [];
          for (let itemId in snapsValues) {
            result.push(_.assign({
              _id: itemId
            }, snapsValues[itemId]));
          }
          resolve(result);

        }, (reason) => {
          /* reject */
          reject(reason);
        });
    });
  }

  pushItem(tableName, item) {
    return new Promise((resolve, reject) => {
        let itemsRef = firebase.database().ref(tableName);
        itemsRef.push(item, function onPushItemComplate(reason) {
          if (reason) {
            /* reject */
            logger.error(reason);
            reject(reason);
          } else {
            /* resolve */
            resolve();
          }
        });
    });
  }
}

export default new DbFirebase();