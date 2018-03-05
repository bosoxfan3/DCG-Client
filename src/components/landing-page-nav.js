import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleLoginForm, toggleSignupForm } from '../actions/auth';

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
        <Link className="app-title" to="/">Pick 16<img className="logo" src="https://image.flaticon.com/icons/svg/363/363310.svg" alt="football logo" /></Link>
        <div className="login-signup-links">
          <a className="login-link" onClick={() => this.toggleLoginForm()}>Log In</a>
          <a className="signup-link" onClick={() => this.toggleSignupForm()}>Sign Up</a>
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