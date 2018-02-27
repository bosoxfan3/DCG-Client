import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import { registerUser } from '../actions/signup';
import { login } from '../actions/login';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import Input from './input';

import './signup-form.css';

export class SignupForm extends React.Component {
  onSubmit(values) {
    const {username, password, name } = values;
    const user = {username, password, name};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }
  render() {
    return (
        <form
          className="signup-form"
          onSubmit={this.props.handleSubmit(values => 
            this.onSubmit(values)
          )}>
          <h3>Sign Up</h3>
          <label htmlFor="name">Entry Name</label>
          <Field 
            component={Input} 
            type="text" 
            name="name" 
            placeholder="NiNErZ 4eVeR"
            validate={[required, nonEmpty, length({max: 40})]}
          />
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, length({min: 5, max: 72}), isTrimmed]}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            component={Input}
            type="password"
            name="confirmPassword"
            validate={[required, nonEmpty, matches('password')]}
          />
          <button
            className="signup-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Sign Up
          </button>
        </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);