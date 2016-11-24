import sinon from 'sinon'
import { expect } from 'chai'

import { mount } from 'enzyme';

import EventEmitter from '../../arch/EventEmitter'
import LoginForm from './LoginForm.react'
import LoginStore from '../../app/Login/LoginStore'
import formConst from './LoginForm/Const'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

describe("the LoginForm", function loginFormDescribe() {
    let container;
    function mountLoginForm(onLoginRequestCallback) {
        container = document.createElement("div");
        return mount(<LoginForm onLoginRequest={ onLoginRequestCallback } routePath="/" />, {attachTo: container});
    }

    describe("on render", function dispacedParams() {
        let loginForm;

        beforeEach(function() {
            loginForm = mountLoginForm((c) => {
                console.error(c)
            });
        });

        afterEach(() => {
            ReactDOM.unmountComponentAtNode(container);
        });

        it("should contains BUTTON Login", function itShouldHaveLoginButton() {
            let element = loginForm.find('#' + formConst.LOGIN_BTN_ID);
            expect(element.length).to.equal(1);
        })

        it("should contains FIELD Login", function itShouldHaveLoginField() {
            let element = loginForm.find('#' + formConst.LOGIN_FLD_ID);
            expect(element.length).to.equal(1);
        })

        it("should contains FIELD password", function itShouldHavePasswordField() {
            let element = loginForm.find('#' + formConst.PASSWORD_FLD_ID);
            expect(element.length).to.equal(1);
        })
    })

    describe("onLoginRequest", () => {

        let loginForm;
        let formItems = {
            loginInput: undefined,
            passwordInput: undefined,
            submitBtn: undefined,
        }

        let stubs = {
            onLoginRequestStub: undefined,
        }

        function fillCredentials(loginCredentials) {
            ReactTestUtils.Simulate.change(formItems.loginInput.node, {
                target: {
                    value: loginCredentials.email
                }
            });

            ReactTestUtils.Simulate.change(formItems.passwordInput.node, {
                target: {
                    value: loginCredentials.password
                }
            });
        }

        beforeEach(function() {
            stubs.onLoginRequestStub = sinon.stub();
            loginForm = mountLoginForm(stubs.onLoginRequestStub);

            formItems.loginInput = loginForm.find('#' + formConst.LOGIN_FLD_ID);
            formItems.passwordInput = loginForm.find('#' + formConst.PASSWORD_FLD_ID);
            formItems.submitBtn = loginForm.find('#' + formConst.LOGIN_BTN_ID);
        });

        afterEach(() => {
            ReactDOM.unmountComponentAtNode(container);
        });

        it("should pass credentials on login button click", () => {
            let loginCredentials = {
                email: 'zawiasam@gmail.co.uk',
                password: 'anypassword'
            };
            fillCredentials(loginCredentials);

            ReactTestUtils.Simulate.click(formItems.submitBtn.node);
            sinon.assert.calledWith(stubs.onLoginRequestStub, loginCredentials)
        })

        it("should execute callback ones on login button click", () => {
            let loginCredentials = {
                email: 'zawiasam@gmail.co.uk',
                password: 'anypassword'
            };
            fillCredentials(loginCredentials);

            ReactTestUtils.Simulate.click(formItems.submitBtn.node);
            expect(stubs.onLoginRequestStub.calledOnce).to.be.true;
        })

        it("should execute callback ones on enter keyDown on 'login' input", () => {
            let loginCredentials = {
                email: 'zawiasam@gmail.co.uk',
                password: 'anypassword'
            };
            fillCredentials(loginCredentials);

            ReactTestUtils.Simulate.keyDown(formItems.loginInput.node, {key: "Enter", keyCode: 13, which: 13});
            expect(stubs.onLoginRequestStub.calledOnce).to.be.true;
        })

        it("should execute callback ones on enter keyDown on 'password' input", () => {
            let loginCredentials = {
                email: 'zawiasam@gmail.co.uk',
                password: 'anypassword'
            };
            fillCredentials(loginCredentials);

            ReactTestUtils.Simulate.keyDown(formItems.passwordInput.node, {key: "Enter", keyCode: 13, which: 13});
            expect(stubs.onLoginRequestStub.calledOnce).to.be.true;
        })
    })
})
