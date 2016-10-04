import express from 'express';
import path from 'path';
import auth from './auth-firebase.js';

export default class RestrictedRoutes {
    static init(app) {
        app.use('/api/*', Internals.authUser);

        app.use('/app/*', Internals.authUser);
        app.use('/app', express.static(path.join(process.cwd() + '/client/app')));
    }
}

class Internals {
    static authUser(req, res, next) {
        auth
            .getUser('zawiasam@gmail.com')
            .then((user) => {
                if (user && user !== null) {
                    next();
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