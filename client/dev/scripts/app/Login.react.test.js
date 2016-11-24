import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme';

import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import React from 'react'
import AppLogin from './Login.react'
import LoginStore from './Login/LoginStore'
import formConst from '../modules/Forms/LoginForm/Const'
import LoginActions from './Login/LoginActions'

describe("Login.React.js", () => {
    let container;
    let stubs;
    function mountLoginForm() {
        container = document.createElement("div");
        return mount(<AppLogin />, {
            attachTo: container
        });
    }
    function fillCredentials(formItems, loginCredentials) {
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
    describe("on success login", () => {
        it("should render redirect", () => {
            LoginStore._handleLoginRequestResponse(undefined, undefined, { status: 200})
        });

        it("should send doLoginRequest Action", () => {
            let form = loginForm.find('form');
            let formItems = {};
            formItems.loginInput = loginForm.find('#' + formConst.LOGIN_FLD_ID);
            formItems.passwordInput = loginForm.find('#' + formConst.PASSWORD_FLD_ID);
            formItems.submitBtn = loginForm.find('#' + formConst.LOGIN_BTN_ID);
            
            fillCredentials(formItems, loginForm)
            ReactTestUtils.Simulate.click(formItems.submitBtn.node)
        })

        beforeEach(function() {
            global.componentHandler = {
                upgradeDom: () => {}
            }
            loginForm = mountLoginForm();
            stubs = {};
            stubs.doLoginRequest = sinon.stub (LoginActions, "doLoginRequest");
        });

        afterEach(() => {
            ReactDOM.unmountComponentAtNode(container);
            stubs.doLoginRequest.restore();
        });

        let loginForm;
    })
})