import EventEmmiter from '../../arch/EventEmitter'

import LoginDispatcher from './LoginDispatcher'
import LoginConstants from './LoginConstants'

import promisejs from 'promisejs'

class LoginStore extends EventEmmiter {
    constructor() {
        super();

        this.emmitChange = this.emmitChange.bind(this);
        this.addChangeListener = this.addChangeListener.bind(this);

        LoginDispatcher.register((action) => {
            switch (action.type) {
                case LoginConstants.LOGIN_REQUESTED: {
                    promisejs.post('api/message', action.credentials).then((err, text, xhr) => {
                        this.emmitChange();
                        if (err) {
                            console.log('Error: ' + xhr.status);
                            return;
                        }
                    });
                    break;
                }
            }
        });
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