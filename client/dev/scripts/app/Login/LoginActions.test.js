import sinon from 'sinon'
import { expect } from 'chai'

import LoginActions from './LoginActions.js'
import LoginStore from './LoginStore.js'

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

            expect(LoginStore.loginRequest.calledOnce).to.be.true;
        })

        it("should execute loginRequest on LoginsStore with proper set of args", function itShouldHaveActionType() {
            LoginActions.doLoginRequest(credentials);

            sinon.assert.calledWith(LoginStore.loginRequest, credentials);
        })
    })
})
