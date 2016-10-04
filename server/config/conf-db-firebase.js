import firebase from 'firebase';
import firebaseConst from '../const/const-firebase.json';

export default class ConfDbFirebase {
    static init() {
        try {
            firebase.initializeApp(firebaseConst);
        } catch (ex) {
            console.error.bind(console, 'Can\'t to access firebase: ' + ex);
        }
    }
}
