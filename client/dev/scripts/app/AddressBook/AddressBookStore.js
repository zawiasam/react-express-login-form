import promisejs from 'promisejs'
import EventEmmiter from '../../arch/EventEmitter'
import AddressBookDispatcher from './AddressBookDispatcher'
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

    this.emmitChange = this
      .emmitChange
      .bind(this);
    this.addChangeListener = this
      .addChangeListener
      .bind(this);
    this.getAddressBook = this
      .getAddressBook
      .bind(this);

    store = {};
    AddressBookDispatcher.register((action) => {
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
    promisejs
      .get('/api/addressBook', callee)
      .then((err, text, xhr) => {
        if (err) {
          ErrorActions.reportError(
            ErrorConstants.api.GETTING_ADDRESSBOOK,
            xhr.status
          );
          return;
        } else {
          try {
            store = JSON.parse(text);
            this.emmitChange();
          } catch (error) {
            ErrorActions.reportError(
              ErrorConstants.api.GETTING_ADDRESSBOOK,
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
}

export default new AddressBookStore();