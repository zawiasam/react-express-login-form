import AddressBookConstants from './AddressBookConstants'
import AddressBookDispatcher from './AddressBookDispatcher'
import _ from 'lodash'

class UserActions {
    static getAddressBookData(payload) {
        AddressBookDispatcher.dispatch({
            type: AddressBookConstants.GET_ADDRESS_BOOK,
            callee: {
                email: payload.user,
            }
        });
    }
}

export default UserActions