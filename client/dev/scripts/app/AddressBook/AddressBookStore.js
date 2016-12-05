import promisejs from 'promisejs'
import EventEmmiter from '../../arch/EventEmitter'
import Dispatchers from '../Common/Dispatchers'
import AddressBookConstants from './AddressBookConstants'
import ErrorActions from '../Error/ErrorActions'
import ErrorConstants from '../Error/ErrorConstants'

let store;

class AddressBookStore extends EventEmmiter {
  get data() {
    return store;
  }

  constructor() {
    super();

    this.emmitChange = this.emmitChange.bind(this);
    this.addChangeListener = this.addChangeListener.bind(this);
    this.removeChangeListener = this.removeChangeListener.bind(this);
    this.getAddressBook = this.getAddressBook.bind(this);

    store = {};
    
    Dispatchers.AddressBookDispatcher.register((action) => {
      switch (action.type) {
        case AddressBookConstants.GET_ADDRESS_BOOK:
          this.getAddressBook(action.callee)
          break;
      }
    });
  }

  getAddressBook(callee) {
    let request = {
      userId: callee.email
    }
    promisejs.promise
      .get('/api/addressBook', callee)
      .then((err, text, xhr) => {
        if (err) {
          ErrorActions.reportError(
            ErrorConstants.api.GET_ADDRESSBOOK,
            xhr.status
          );
          return;
        } else {
          try {
            store = JSON.parse(text);
            this.emmitChange();
          } catch (error) {
            ErrorActions.reportError(
              ErrorConstants.api.GET_ADDRESSBOOK,
              "Incorrect server response (" + err + ")"
            );
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

  removeChangeListener(listener) {
    this.removeListener('change', listener);
  }
}

export default new AddressBookStore();