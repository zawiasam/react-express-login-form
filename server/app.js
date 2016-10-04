import express from 'express';
import RoutesConfig from './routes/config';
import helmet from 'helmet';
import ConfDbFirebase from './config/conf-db-firebase.js';

const app = express();
app.enable('strict routing');

app.use(helmet());
RoutesConfig.init(app, express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict       : app.get('strict routing')
}));

ConfDbFirebase.init();

module.exports = app;
