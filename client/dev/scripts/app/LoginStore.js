import LoginDispatcher from './LoginDispatcher'
import EventEmmiter from '../arch/EventEmitter'

class LoginStore extends EventEmmiter {
    constructor(){
        super();
        LoginDispatcher.register((action) => {
            console.log(action);
        });
    }
}

let _LoginStore = new LoginStore();
