import sinon from 'sinon'
import expect from 'expect'

import LoginActions from './LoginActions.js'
import LoginStore from './LoginStore.js'
import LoginDispatcher from './LoginDispatcher'

describe("the LoginActions", function loginActionsDescribe() {
    describe("action doLoginRequest", function dispacedParams() {
        let credentials;

        beforeEach(function setupMock() {
            sinon.stub(LoginStore, "loginRequest");
            credentials = {
                email: 'mail',
                password: 'somePassword'
            };
        })

        afterEach(() => {
            LoginStore.loginRequest.restore();
        })

        it("should execute loginRequest on LoginStore", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            expect(LoginStore.loginRequest.calledOnce);
        })

        it("should execute loginRequest on LoginsStore with proper set of args", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            sinon.assert.calledWith(LoginStore.loginRequest, credentials);
        })
    })
})
