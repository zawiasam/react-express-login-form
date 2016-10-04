import firebase from 'firebase';
import _ from 'lodash';

export default class AuthFirebase {
  static getUser(email) {
    return new Promise((resolve, reject) => {
      firebase.database().ref("users")
        .orderByChild('email')
        .equalTo(email)
        .once('value', function (snap) {
          const userObj = snap.val();
          resolve(userObj);
        });
    });
  }
}
