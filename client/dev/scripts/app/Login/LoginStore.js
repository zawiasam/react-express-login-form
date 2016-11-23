import EventEmmiter from '../../arch/EventEmitter'

import LoginDispatcher from './LoginDispatcher'
import LoginConstants from './LoginConstants'

import promisejs from 'promisejs'
import _ from 'lodash'

let loginData = {
    email: '',
    userName: '',
    authorized: false,
    loginRequestSucceeded: false,
}

class LoginStore extends EventEmmiter {
    constructor() {
        super();

        this.emmitChange = this
            .emmitChange
            .bind(this);
        this.addChangeListener = this
            .addChangeListener
            .bind(this);

        LoginDispatcher.register((action) => {
            switch (action.type) {
                case LoginConstants.LOGIN_REQUESTED:
                    {
                        this.loginRequest(action.credentials);
                        break;
                    }
            }
        });
    }

    getLoginData() {
        return loginData;
    }

    loginRequest(credentials) {
        loginData.loginRequestSucceeded = false;
        loginData.email = credentials.email;

        promisejs.promise
            .post('/api/login', _.pick(credentials, ["email", "password"]))
            .then((err, text, xhr) => {
                if (err || xhr.status !== 200) {
                    console.log('Error: ' + xhr.status);
                    loginData.authorized = false;
                    return;
                } else {
                    loginData.authorized = true;
                    loginData.loginRequestSucceeded = true;
                }
                this.emmitChange();
            });
    }

    setLoginRequestSucceeded(option){
        loginData.loginRequestSucceeded = option;
    }

    emmitChange() {
        this.emmit('change');
    }

    addChangeListener(listener) {
        this.addListener('change', listener);
    }

    removeChangeListener(listener) {
        this.removeListener('change', listener);
    }}

let _LoginStore = new LoginStore();
export default _LoginStore;