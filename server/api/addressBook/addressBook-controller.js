import auth from '../../commons/addressBook-firebase.js';
import _ from 'lodash'

function firebaseAddressBook(user) {
    const loginFaildMessage = "Can't read AddressBook from Db"

    return new Promise((resolve, reject) => {
        auth.getRecipients(user.email)
            .then((addressBook) => {
                resolve(addressBook);
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