import express from 'express';
import RoutesSetup from './routes/setup';
import helmet from 'helmet';
import ConfDbFirebase from './config/conf-db-firebase.js';
import bodyParser from 'body-parser'

const app = express();
app.enable('strict routing');

app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

RoutesSetup.init(app, express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict       : app.get('strict routing')
}));

ConfDbFirebase.init();

module.exports = app;
