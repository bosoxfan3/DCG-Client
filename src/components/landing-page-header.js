import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './login-form';
import SignupForm from './signup-form';
import LandingPageNav from './landing-page-nav';

import './landing-page-header.css'

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
    <header className="landing-page-header">
      <LandingPageNav />
      <div className="login-signup-forms">
        {signupForm}
        {loginForm}
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  showSignupForm: state.auth.showSignupForm,
  showLoginForm: state.auth.showLoginForm
});

export default connect(mapStateToProps)(LandingPageHeader);