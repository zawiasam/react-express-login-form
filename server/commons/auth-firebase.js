import firebase from 'firebase';
import _ from 'lodash';

export default class AuthFirebase {
    static getUser(email) {
        return new Promise((resolve, reject) => {
            firebase
                .database()
                .ref("users")
                .orderByChild('email')
                .equalTo(email)
                .once('value', (snap) => {
                    /* resolve */
                    let snapsValues = snap.val();
                    let userObj = [];
                    for (let itemId in snapsValues) {
                        userObj.push(_.assign({
                            _id: itemId
                        }, snapsValues[itemId]));
                    }
                    resolve(userObj[0]);
                }, (err) => {
                    /* reject */
                    reject(err);
                });
        });
    }
}