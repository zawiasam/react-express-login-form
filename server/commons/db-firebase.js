import firebase from 'firebase';
import _ from 'lodash';
import Logger from './logger'

class DbFirebase {
  /**
   * gets all items from given reference and returns data with refKey as _id property
   * @param {string} tableName acctualy it's path to db reference
   * @return {Promise} on scucess data, on fail reason 
   */
  getAll(tableName) {
    return new Promise((resolve, reject) => {
      try {
        let dbItems = firebase.database().ref(tableName);

        dbItems.once('value').then((snaps) => {
          /* resolve */
          var snapsValues = snaps.val();
          let result = [];
          if (snapsValues !== null) {
            for (let itemId in snapsValues) {
              result.push(_.assign({
                _id: itemId
              }, snapsValues[itemId]));
            }
          }
          resolve(result);
          
        }, (reason) => {
          /* reject */
          Logger.dbLogError(reason);
          reject(reason);
        });
      } catch (err) {
        Logger.dbLogError(err);
        reject(err);
      }
    });
  }

  /**
   * gets value from given reference and returns data property
   * @param {string} tableName acctualy it's path to db reference
   * @param {string} itemId id of item
   * @return {Promise} on scucess data, on fail reason 
   */
  getItem(tableName, itemId) {
    return new Promise((resolve, reject) => {
      try {
        let dbItems = firebase.database().ref(`${tableName}/${itemId}`);

        dbItems.once('value').then((snaps) => {
          /* resolve */
          var value = snaps.val();
          resolve(value);
          
        }, (reason) => {
          /* reject */
          Logger.dbLogError(reason);
          reject(reason);
        });
      } catch (err) {
        Logger.dbLogError(err);
        reject(err);
      }
    });
  }

  hasValue(tableName) {
    return new Promise((resolve, reject) => {
      try {
        let dbItems = firebase.database().ref(tableName);

        dbItems.once('value').then((snaps) => {
          /* resolve */
          var snapsValues = snaps.val();
          resolve(result !== null);
        }, (reason) => {
          /* reject */
          Logger.dbLogError(reason);
          reject(reason);
        });
      } catch (err) {
        Logger.dbLogError(err);
        reject(err);
      }
    });
  }

  /**
   * adds new entry in firbase
   * @param {string} tableName name of db object
   * @param {Object} item value of entry
   * @return {Promise} on scucess object with reference key to object in firebase, on fail reason
   */
  pushItem(tableName, item) {
    return new Promise((resolve, reject) => {
      try {
        let itemsRef = firebase.database().ref(tableName);
        let newItemRef = itemsRef.push();
        newItemRef.set(item, function onPushItemComplate(reason) {
          if (reason) {
            /* reject */
            Logger.dbLogError(reason);
            reject(reason);
          } else {
            /* resolve */
            resolve(_.pick(newItemRef, ["key"]));
          }
        });
      } catch (err) {
        Logger.dbLogError(err);
        reject(err);
      }
    });
  }

  /**
   * updates data in firebase based on object data
   * @param {Object} item object with path and data eg. item[path] = data
   * @return {Promise} scucess or fail with a reason
   */
  updateObject(item) {
    return new Promise((resolve, reject) => {
      try {
        let itemsRef = firebase.database().ref();
        itemsRef.update(item, function onUpdateObjectComplate(reason) {
          if (reason) {
            /* reject */
            Logger.dbLogError(reason);
            reject(reason);
          } else {
            /* resolve */
            resolve();
          }
        });
      } catch (err) {
        Logger.dbLogError(err);
        reject(err);
      }
    });
  }
}

export default new DbFirebase();