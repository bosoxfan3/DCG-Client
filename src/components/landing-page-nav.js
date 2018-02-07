import React from 'react';
import { connect } from 'react-redux';

import { toggleLoginForm, toggleSignupForm } from '../actions/login';

export class LandingPageNav extends React.Component {
  toggleLoginForm() {
    this.props.dispatch(toggleLoginForm());
  }
  toggleSignupForm() {
    this.props.dispatch(toggleSignupForm());
  }
  render() {
    return (
      <nav>
        <h1>DCG Pick'Em</h1>
        <div>
          <a onClick={() => this.toggleLoginForm()}>Log In</a>
          <a onClick={() => this.toggleSignupForm()}>Sign Up</a>
        </div>
      </nav>
    );
  }
}

export default connect()(LandingPageNav);