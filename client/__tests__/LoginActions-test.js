jest.dontMock('../dev/scripts/app/Login/LoginActions.js');
import LoginActions from '../dev/scripts/app/Login/LoginActions.js'

describe("the LoginActions", function loginActionsDescribe() {
    describe("dispatched paramas", function dispacedParams(){
        it("should have action type", function itShouldHaveActionType(){
            LoginActions.doLoginRequest({
                email: 'mail', password: 'somePassword'})
        })
    })
})
