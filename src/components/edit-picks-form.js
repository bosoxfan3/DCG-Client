import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, Field } from 'redux-form';

import { makePicks } from '../actions/picks';
import { required } from '../validators';
import Select from './select';

export class EditPicksForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(makePicks(values));
    this.props.history.push('/leaderboard');
  }
  stopEditing() {
    this.props.history.push('/my-picks');
  }
  // componentWillReceiveProps(newProps) {
  //   if (newProps) {
  //     setTimeout(this.setDefaults(newProps), 2000);
  //     this.setDefaults(newProps);
  //   }
  // }
  componentDidMount() {
    this.setDefaults();
  }
  setDefaults() {
    this.props.dispatch(change('edit-picks', 'matchup0', this.props.picks.matchup0));
    this.props.dispatch(change('edit-picks', 'matchup1', this.props.picks.matchup1));
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
      <div>
      <form
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}>
        {matchups}
        <button type="submit">Submit Changes</button>
      </form>
      <button onClick={() => this.stopEditing()}>Stop Editing</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    matchupData: state.matchups.matchups,
    picks: state.users.user.picks
  }
};

EditPicksForm = connect(mapStateToProps)(EditPicksForm);
EditPicksForm = reduxForm({
  form: 'edit-picks',
})(EditPicksForm);

export default EditPicksForm;