import sinon from 'sinon'
import expect from 'expect'

import { mount } from 'enzyme';

import LoginForm from './LoginForm.react'
import LoginStore from '../../app/Login/LoginStore'
import formConst from './LoginForm/Const'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

describe("the LoginForm", function loginFormDescribe() {
    describe("action doLoginRequest", function dispacedParams() {
        let loginForm;

        function mountLoginForm(onLoginRequestCallback) {
            return mount(<LoginForm onLoginRequest={ onLoginRequestCallback } routePath="/" />);
        }

        beforeEach(function() {
            loginForm = mountLoginForm((c) => {
                console.error(c)
            });
        });

        it("should contains BUTTON Login", function itShouldHaveLoginButton() {
            let element = loginForm.find('#' + formConst.LOGIN_BTN_ID);
            expect(element.length).toEqual(1);
        })

        it("should contains FIELD Login", function itShouldHaveLoginField() {
            let element = loginForm.find('#' + formConst.LOGIN_FLD_ID);
            expect(element.length).toEqual(1);
        })

        it("should contains FIELD password", function itShouldHavePasswordField() {
            let element = loginForm.find('#' + formConst.PASSWORD_FLD_ID);
            expect(element.length).toEqual(1);
        })

        it("should do pass credentials on form submit", () => {
            let onLoginRequestStub = sinon.stub();

            loginForm = mountLoginForm(onLoginRequestStub);
            let loginInput = loginForm.find('#' + formConst.LOGIN_FLD_ID);
            let passwordInput = loginForm.find('#' + formConst.PASSWORD_FLD_ID);
            let btn = loginForm.find('#' + formConst.LOGIN_BTN_ID);

            let loginCredentials = {
                email: 'zawiasam@gmail.co.uk',
                password: 'anypassword'
            };

            ReactTestUtils.Simulate.change(loginInput.node, {
                target: {
                    value: loginCredentials.email
                }
            });

            ReactTestUtils.Simulate.change(passwordInput.node, {
                target: {
                    value: loginCredentials.password
                }
            });

            ReactTestUtils.Simulate.click(btn.node);
            sinon.assert.calledWith(onLoginRequestStub, loginCredentials)
        })
    })
})
