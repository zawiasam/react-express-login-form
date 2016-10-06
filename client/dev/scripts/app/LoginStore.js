import LoginDispatcher from './LoginDispatcher'
import EventEmmiter from '../arch/EventEmitter'
import LoginConstants from './LoginConstants'

class LoginStore extends EventEmmiter {
    constructor() {
        super();
        LoginDispatcher.register((action) => {
            switch (action.actionType) {
                case LoginConstants.LOGIN_REQUESTED: {
                    console.log(action);
                    break;
                }
            }

        });
    }
}

let _LoginStore = new LoginStore();
