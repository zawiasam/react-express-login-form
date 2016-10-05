import LoginConstants from './LoginConstants'
import LoginDispatcher from './LoginDispatcher'
import _ from 'lodash'


class LoginActions {

    static doLoginRequest(payload) {
        LoginDispatcher.dispatch(_.assign({actionType: LoginConstants.LOGIN_REQUESTED}), payload);
    }
}

export default LoginActions