import promisejs from 'promisejs'
import EventEmmiter from '../../arch/EventEmitter'
import UserDispatcher from './UserDispatcher'
import UserConstants from './UserConstants'

export default class UserStore extends EventEmmiter {
  constructor() {
    this.emmitChange = this
      .emmitChange
      .bind(this);
    this.addChangeListener = this
      .addChangeListener
      .bind(this);

    UserDispatcher.register(function(action) {
      switch (action.type) {
        case UserConstants.GET_ADDRESS_BOOK:
          this.getAddressBook(action.callee)
          break;
      }
    });
  }

  getAddressBook(callee) {
    promisejs
      .get('/api/addressBook', callee)
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
}

