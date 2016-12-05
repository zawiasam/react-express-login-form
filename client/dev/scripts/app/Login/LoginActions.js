import LoginConstants from './LoginConstants'
import Dispatchers from '../Common/Dispatchers'
import _ from 'lodash'

class LoginActions {
    static doLoginRequest(payload) {
        Dispatchers.LoginDispatcher.dispatch({
            type: LoginConstants.LOGIN_REQUESTED,
            credentials: {
                email: payload.email,
                password: payload.password,
            }
        });
    }
}

export default LoginActions