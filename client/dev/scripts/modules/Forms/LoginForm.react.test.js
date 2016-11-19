import sinon from 'sinon'
import expect from 'expect'

import {mount} from 'enzyme';

import LoginForm from './LoginForm.react'
import LoginStore from '../../app/Login/LoginStore'
import formConst from './LoginForm/Const'
import React from 'react'

describe("the LoginForm", function loginFormDescribe() {
    describe("action doLoginRequest", function dispacedParams(){
        let loginForm;

        beforeEach(function(){
            LoginStore.setShouldRedirect(false);
            loginForm = mount(<LoginForm onLoginRequest={()=>{}} routePath="/" />);
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
