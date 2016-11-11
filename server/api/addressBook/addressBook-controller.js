import auth from '../../commons/auth-firebase.js';
import _ from 'lodash'

function firebaseAddressBook(credentials) {
    const loginFaildMessage = 'You shell not pass!'

    return new Promise((resolve, reject) => {
        auth
            .getUser(credentials.email)
            .then((user) => {
                if (user && user.password === credentials.password) {
                    resolve(user);
                } else {
                    reject(loginFaildMessage);
                }
            }, (reason) => {
                reject(loginFaildMessage);
            });
    })
}

function fakeAddressBook(credentials) {
    return new Promise((resolve, reject) => {
        resolve([{
            id: "adm",
            name: "Administrator"
        }]);
    });
}

let di = {
    prod: {
        getAddressBook: firebaseAddressBook
    },
    fake: {
        getAddressBook: fakeAddressBook
    }
}

export default class AddressBookController {
    static getAddressBook(req, res, next) {
        di['fake'].getAddressBook(req.body)
            .then(function authSuccess(data) {
                res.status(200).send(data);
            },
                function authFaild(reason) {
                    res.status(401).send(reason);
                });
    }
}