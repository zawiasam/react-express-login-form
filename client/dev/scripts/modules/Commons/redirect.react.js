import React from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';

class Redirect extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.context.router.push('/module');
  };

  render() {
    return (<div />);
  }
};

Redirect.contextTypes = {
  router: React.PropTypes.object.isRequired,
  location() {
    React.PropTypes.func.isRequired
  }
}

export default Redirect;