import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Select from './select';
import { required } from '../validators';
import { makePicks } from '../actions/picks';

import './make-picks-form.css';

export class MakePicksForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(makePicks(values));
    this.props.history.push('/leaderboard');
  }
  render() {
    const matchups = this.props.matchupData.map((matchup, index) => {
      return (
        <Field
          component={Select}
          name={`matchup${index}`}
          key={`matchup${index}`}
          options={[matchup[0], matchup[1]]}
          validate={required}
        />
      )
    });
    return (
      <div id="picks-form" className="picks-form-background">
        <div className="row">
          <div className="main-area col-12">
            <section className="picks-form-section">
              <h1>Week 17</h1>
              <form
                onSubmit={this.props.handleSubmit(values => 
                  this.onSubmit(values)
                )}>
                {matchups}
                <button type="submit">Submit</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    matchupData: state.matchups.matchups,
    user: state.auth.user
  }
};

MakePicksForm = connect(mapStateToProps)(MakePicksForm);
MakePicksForm = reduxForm({
  form: 'make-picks'
})(MakePicksForm);

export default MakePicksForm;