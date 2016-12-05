import Dispatchers from '../Common/Dispatchers'
import NewMessageConst from './NewMessageConst'
import { RoutePath } from '../Index/IndexConstants'
import EventEmmiter from '../../arch/EventEmitter'

class NewMessageStore extends EventEmmiter {
    constructor() {
        super();

        this.emmitChange = this.emmitChange.bind(this);
        this.addChangeListener = this.addChangeListener.bind(this);
        this.removeChangeListener = this.removeChangeListener.bind(this);

        Dispatchers.NewMessageDispatcher.register((action) => {
            switch (action.type) {
                case NewMessageConst.ACTIONS.SEND_MESSAGE: {
                    this.sendMessage(action.message);
                    break;
                }
            }
        })
    }

    get newMessageUri(){
        return RoutePath.Inbox
    }
    sendMessage(message) {
        console.log("message was send");
        this.emmitChange();
    }

    emmitChange() {
        this.emmit('change');
    }

    addChangeListener(listener) {
        this.addListener('change', listener);
    }

    removeChangeListener(listener) {
        this.removeListener('change', listener);
    }
}

export default new NewMessageStore()