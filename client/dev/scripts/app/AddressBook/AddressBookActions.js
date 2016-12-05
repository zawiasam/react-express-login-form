import AddressBookConstants from './AddressBookConstants'
import Dispatchers from '../Common/Dispatchers'
import _ from 'lodash'

class UserActions {
    static getAddressBookData(payload) {
        Dispatchers.AddressBookDispatcher.dispatch({
            type: AddressBookConstants.GET_ADDRESS_BOOK,
            callee: {
                email: payload.user,
            }
        });
    }
}

export default UserActions