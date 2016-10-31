import EventEmmiter from '../../arch/EventEmitter'

import LoginDispatcher from './LoginDispatcher'
import LoginConstants from './LoginConstants'

import promisejs from 'promisejs'

let loginData = {
    email: '',
    password: '',
    userName: '',
    authorized: false,
    shouldRedirect: false,
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
        loginData.shouldRedirect = false;
        loginData.email = credentials.email;
        loginData.password = credentials.password;

        promisejs
            .post('/api/login', credentials)
            .then((err, text, xhr) => {
                if (err) {
                    console.log('Error: ' + xhr.status);
                    loginData.authorized = false;
                    return;
                } else {
                    loginData.authorized = true;
                    loginData.shouldRedirect = true;
                }
                this.emmitChange();
            });
    }

    setShouldRedirect(option){
        loginData.shouldRedirect = option;
    }

    emmitChange() {
        this.emmit('change');
    }

    addChangeListener(listener) {
        this.addListener('change', listener);
    }
}

let _LoginStore = new LoginStore();
export default _LoginStore;