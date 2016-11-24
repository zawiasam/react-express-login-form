import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme';

import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import React from 'react'
import Login from './Login.react'
import LoginStore from './Login/LoginStore'

describe("Login.React.js", () => {
    let container;
    function mountLoginForm() {
        container = document.createElement("div");
        return mount(<Login />, {
            attachTo: container
        });
    }

    describe("on success login", () => {
        it("should render redirect", () => {
            LoginStore._handleLoginRequestResponse(undefined, undefined, { status: 200})
        })

        beforeEach(function() {
            global.componentHandler = {
                upgradeDom: () => {}
            }
            loginForm = mountLoginForm();
        });

        afterEach(() => {
            ReactDOM.unmountComponentAtNode(container);
        });

        let loginForm;
    })
})