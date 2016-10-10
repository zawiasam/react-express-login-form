import auth from '../../commons/auth-firebase.js';
import _ from 'lodash'

function authWithFirebase(credentials) {
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

function authWithFake(credentials) {
    return new Promise((resolve, reject) => {
        const user = {
            name: 'Maciej Zawiasa'
        };
        const userIn = _.pick(credentials, ['email']);
        const userOut = _.assign(user, userIn);
        resolve(userOut);
    });
}

let di = {
    prod: {
        auth: authWithFirebase
    },
    fake: {
        auth: authWithFake
    }
}

export default class LoginController {
    static validateUserByEmail(req, res, next) {
        di['fake'].auth(req.body)
            .then(function authSuccess(data) {
                res.status(200).send(data);
            },
                function authFaild(reason) {
                    res.status(401).send(reason);
                });
    }
}