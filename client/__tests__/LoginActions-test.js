import LoginActions from '../dev/scripts/app/Login/LoginActions.js'
import LoginStore from '../dev/scripts/app/Login/LoginStore.js'

describe("the LoginActions", function loginActionsDescribe() {
    describe("action doLoginRequest", function dispacedParams() {
        let loginRequestMock;
        let credentials;
        beforeEach(function setupMock() {
            loginRequestMock = jest.fn();
            LoginStore.loginRequest = loginRequestMock;

            credentials = {
                email: 'mail',
                password: 'somePassword'
            };
        })

        it("should execute login request from LoginStore", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            expect(loginRequestMock).toHaveBeenCalledTimes(1);
        })

        it("should execute login request with proper credentials", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            expect(loginRequestMock).toBeCalledWith(credentials);
        })
    })
})
