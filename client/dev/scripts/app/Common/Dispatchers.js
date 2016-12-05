import Dispatcher from '../../arch/dispatcher';

export default class Dispatchers {
    static get AddressBookDispatcher() {
        return Dispatcher.getDispatcher('AddressBookDispatcher');
    }

    static get NewMessageDispatcher() {
        return Dispatcher.getDispatcher('NewMessageDispatcher');
    }

    static get ErrorDispatcher() {
        return Dispatcher.getDispatcher('ErrorDispatcher');        
    }

    static get LoginDispatcher() {
        return Dispatcher.getDispatcher('LoginDispatcher');        
    }
} 
