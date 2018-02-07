import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginForm from './login-form';
import SignupForm from './signup-form';
import LandingPageNav from './landing-page-nav';

export function LandingPageHeader(props) {
  let signupForm;
  let loginForm;
  if (props.showSignupForm) {
    signupForm = <SignupForm />;
  }
  if (props.showLoginForm) {
    loginForm = <LoginForm />;
  }
  return (
    <header>
      <LandingPageNav />
      {signupForm}
      {loginForm}
    </header>
  );
}

const mapStateToProps = state => ({
  showSignupForm: state.auth.showSignupForm,
  showLoginForm: state.auth.showLoginForm
});

export default connect(mapStateToProps)(LandingPageHeader);