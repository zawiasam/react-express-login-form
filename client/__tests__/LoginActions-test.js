import LoginActions from '../dev/scripts/app/Login/LoginActions.js'
import LoginStore from '../dev/scripts/app/Login/LoginStore.js'

describe("the LoginActions", function loginActionsDescribe() {
    describe("action doLoginRequest", function dispacedParams(){
        it("should execute login request from LoginStore", function itShouldHaveActionType(){
            let loginRequestMock = jest.fn();
            LoginStore.loginRequest = loginRequestMock;

            LoginActions.doLoginRequest({
                email: 'mail', password: 'somePassword'});
            expect(loginRequestMock.mock.calls.length).toBe(1);
        })
    })
})
