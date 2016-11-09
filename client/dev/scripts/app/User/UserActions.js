import UserConstants from './UserConstants'
import UserDispatcher from './UserDispatcher'
import _ from 'lodash'

class UserActions {
    static doLoginRequest(payload) {
        UserDispatcher.dispatch({
            type: UserConstants.GET_ADDRESS_BOOK,
            callee: {
                email: payload.user,
            }
        });
    }
}

export default UserActions