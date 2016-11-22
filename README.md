![develop build](https://api.travis-ci.org/zawiasam/react-express-login-form.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/zawiasam/react-express-login-form/badge.svg?branch=master)](https://coveralls.io/github/zawiasam/react-express-login-form?branch=master)

# ReactJs ExpressJs simple login form
ExpressJs with Firebase on board plus React login form doing simple auth.

# Using React Component
If you don't know how to build go to [build](#build) section.

You can place login form into your app and define your actions
```jsx
<LoginForm onLoginRequest={_loginRequest} routePath="/dashboard" />
```
onLoginRequest - when login button was pressed
routePath - pleace where you should be redireced is successed

# Build
Make sure you have installed webpack

`npm install webpack -g`

Then install dependencies

`npm install`

Go to client directory and run build using webpack

`webpack`

