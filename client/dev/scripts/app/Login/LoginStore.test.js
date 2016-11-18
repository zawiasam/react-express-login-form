import LoginStore from './LoginStore'
import promisejs from 'promisejs'
import sinon from 'sinon';
import when from 'when';

describe("logins store", () => {
  beforeEach(() => {
    sinon.stub(promisejs.promise, "post").returns({
      then: (cb) => {
        cb(undefined,
          'bla blas',
          {
            staus: 200
          }
        )
      }
    });
  });

  it("shoud do login", () => {


    LoginStore.loginRequest({
      email: 'zawiasam@gmail.com',
      password: 'secret',
      shit: "don't send shits"
    })

    sinon.assert.calledWith(promisejs.promise.post, '/api/login', {
      email: 'zawiasam@gmail.com',
      password: 'secret'
    });

  })

  afterEach(() => {
    promisejs.promise.post.restore();
  })
})