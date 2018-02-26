import React from 'react';
import { connect } from 'react-redux';

import { toggleLoginForm, toggleSignupForm } from '../actions/login';

import './landing-page-nav.css';

export class LandingPageNav extends React.Component {
  toggleLoginForm() {
    if (this.props.showSignupForm) {
      this.props.dispatch(toggleSignupForm());
    }
    this.props.dispatch(toggleLoginForm());
  }
  toggleSignupForm() {
    if (this.props.showLoginForm) {
      this.props.dispatch(toggleLoginForm());
    }
    this.props.dispatch(toggleSignupForm());
  }
  render() {
    return (
      <nav className="landing-page-nav">
        <h1 className="app-title">DCG Pick'Em</h1>
        <div className="login-signup-links">
          <a className="login-link" onClick={() => this.toggleLoginForm()}>Log In</a>
          <a onClick={() => this.toggleSignupForm()}>Sign Up</a>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  showSignupForm: state.auth.showSignupForm,
  showLoginForm: state.auth.showLoginForm
});

export default connect(mapStateToProps)(LandingPageNav);