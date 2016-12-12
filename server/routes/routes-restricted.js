import express from 'express';
import path from 'path';
import auth from '../commons/auth-firebase.js';

export default class RestrictedRoutes {
    static init(app) {
        app.use('/api/login', Internals.passThru);
        app.use('/api/addressBook', Internals.passThru);
        app.use('/api/message', Internals.passThru);
        app.use('/api/admin', Internals.passThru);
        app.use('/api', Internals.authUser);

        app.use('/app', express.static(path.join(process.cwd() + '/client/app')));
    }
}

class Internals {
    static passThru(req, res, next) {
        req.auth = {
            mode: 'passThru'
        }
        next();
    }

    static authUser(req, res, next) {
        const authRequest = req.auth;
        if (authRequest && authRequest.mode === 'passThru') {
            next();
        } else {
            auth
                .getUser(req.body.email)
                .then((user) => {
                    if (user && user.password === req.body.password) {
                        next();
                        return;
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
}