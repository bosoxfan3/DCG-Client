import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import Input from '../form-components/input';

import { login, toggleLoginForm } from '../../actions/auth';
import { required, nonEmpty } from '../../validators';

import './login-form.css';

export class LoginForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(login(values.username, values.password));
    this.props.dispatch(toggleLoginForm());
  }
  logInDemoAccount() {
    return this.props.dispatch(login('daniel', '12345'));
  }
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}>
        {error}
        <h3>Log In</h3>
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
          Log In
        </button>
        <a className="demo-link" onClick={() => this.logInDemoAccount()}>Use Demo Account</a>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);