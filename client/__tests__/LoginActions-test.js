import sinon from 'sinon'
import expect from 'expect'

import LoginActions from '../dev/scripts/app/Login/LoginActions.js'
import LoginStore from '../dev/scripts/app/Login/LoginStore.js'

describe("the LoginActions", function loginActionsDescribe() {
    describe("action doLoginRequest", function dispacedParams() {
        let loginRequestMock;
        let credentials;
        beforeEach(function setupMock() {
            loginRequestMock = sinon.stub();
            LoginStore.loginRequest = loginRequestMock;

            credentials = {
                email: 'mail',
                password: 'somePassword'
            };
        })

        it("should execute login request from LoginStore", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            expect(loginRequestMock.calledOnce);
        })

        it("should execute login request with proper credentials", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            sinon.assert.calledWith(loginRequestMock, credentials);
        })
    })
})
