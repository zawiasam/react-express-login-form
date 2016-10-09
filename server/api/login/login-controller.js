import auth from '../../commons/auth-firebase.js';

export default class LoginController {
  static validateUserByEmail(req, res, next) {
        auth
            .getUser(req.body.email)
            .then((user) => {
                if (user && user.password === req.body.password) {
                    res.status(200).send('auth');
                } else {
                    res
                        .status(401)
                        .send('You shell not pass!');
                }
            }, (reason) => {
                res
                    .status(401)
                    .send('You shell not pass!');
            });
  }  
}