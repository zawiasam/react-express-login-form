import sinon from 'sinon'
import expect from 'expect'

import {mount} from 'enzyme';

import LoginForm from '../dev/scripts/modules/Forms/LoginForm.react'
import formConst from '../dev/scripts/modules/Forms/LoginForm/Const'
import React from 'react'

describe("the LoginForm", function loginFormDescribe() {
    describe("action doLoginRequest", function dispacedParams(){
        let mockDoLoginRequest; 
        let loginForm;

        beforeEach(function(){
            mockDoLoginRequest = sinon.stub(); 
            loginForm = mount(<LoginForm onLoginRequest={mockDoLoginRequest} routePath="/" />);
        });

        it("should contains BUTTON Login", function itShouldHaveLoginButton(){
            let element = loginForm.find('#' + formConst.LOGIN_BTN_ID);
            expect(element.length).toEqual(1);
        })

        it("should contains FIELD Login", function itShouldHaveLoginField(){
            let element = loginForm.find('#' + formConst.LOGIN_FLD_ID);
            expect(element.length).toEqual(1);
        })

        it("should contains FIELD password", function itShouldHavePasswordField(){
            let element = loginForm.find('#' + formConst.PASSWORD_FLD_ID);
            expect(element.length).toEqual(1);
        })
    })
})
