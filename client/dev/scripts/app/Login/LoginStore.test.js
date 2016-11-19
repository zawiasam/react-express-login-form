import LoginStore from './LoginStore'
import promisejs from 'promisejs'
import sinon from 'sinon';
import expect from 'expect';

function getPromiseCallback(cbValue) {
  return {
    then: (cb) => {
      cb(cbValue.err,
        cbValue.text,
        cbValue.xhr
      )
    }
  }
}
;

describe("logins store", () => {
  describe("loginRequest", () => {
    let credentialsToSend;
    let promiseReturns = {
        err: undefined,
        text: 'bla blas',
        xhr: {
          status: 200
        }
      };

    beforeEach(() => {
      credentialsToSend = {
        email: 'zawiasam@gmail.com',
        password: 'secret',
        shit: "don't send shits"
      };

      promiseReturns = {
        err: undefined,
        text: 'bla blas',
        xhr: {
          status: 200
        }
      };
      sinon.stub(promisejs.promise, "post").returns(getPromiseCallback(promiseReturns));
    });

    afterEach(() => {
      promisejs.promise.post.restore();
    });

    it("should pass only email and password to server", () => {
      LoginStore.loginRequest(credentialsToSend);

      const call = promisejs.promise.post.getCall(0);
      expect(call.args[1]).toEqual({
        email: 'zawiasam@gmail.com',
        password: 'secret'
      });
    });

    it("should call correct endpoint", () => {
      LoginStore.loginRequest(credentialsToSend)

      const call = promisejs.promise.post.getCall(0);
      expect(call.args[0]).toEqual("/api/login");
    });

    it("should set login data as authorized when HTTP returned code 200", () => {
      LoginStore.loginRequest(credentialsToSend)

      expect(LoginStore.getLoginData().authorized).toBe(true);
    });

    it("should set login data as authorized when HTTP returned code 400", () => {
      promiseReturns.xhr.status = 400;
      promisejs.promise.post.returns(getPromiseCallback(promiseReturns));
      LoginStore.loginRequest(credentialsToSend)

      expect(LoginStore.getLoginData().authorized).toBe(false);
    });
  })

})