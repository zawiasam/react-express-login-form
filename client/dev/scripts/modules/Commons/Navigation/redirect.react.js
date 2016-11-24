import React from 'react';
import { Router, Route, Link, RouteHandler } from 'react-router';

class Redirect extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    let router = this.context.router || this.props.router;
    router.push(this.props.location);
  };

  render() {
    return (<div />);
  }
}

Redirect.defaultProps = {
  router: [],
}

Redirect.contextTypes = {
  router: React.PropTypes.object.isRequired,
  location() {
    React.PropTypes.func.isRequired
  }
}

export default Redirect;