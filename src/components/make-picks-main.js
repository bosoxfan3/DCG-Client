import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Select from './select';
import { required } from '../validators';
import { makePicks } from '../actions/picks';

import './make-picks-main.css';

export class MakePicksMain extends React.Component {
  onSubmit(values) {
    this.props.dispatch(makePicks(values));
    this.props.history.push('/leaderboard');
  }
  render() {
    const matchups = this.props.matchupData.map((matchup, index) => {
      return (
        <div className="matchup" key={index}>
          <h3 className="matchup-sentence team">{matchup[0]}</h3>
          <img className="matchup-sentence" src={matchup[2]} alt="" />
          <h3 className="matchup-sentence versus">vs.</h3>
          <img className="matchup-sentence" src={matchup[3]} alt="" />
          <h3 className="matchup-sentence team">{matchup[1]}</h3>
        </div>
      )
    });
    const matchupSelects = this.props.matchupData.map((matchup, index) => {
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
      <div id="make-picks-main" className="picks-form-background">
        <div className="row">
          <div className="picks-form-section">
            <div className="main-area col-12">
              <h1>Week 17</h1>
              <section className="col-3">
                <form
                  onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)
                  )}>
                  {matchupSelects}
                  <div className="button-div">
                    <button className="submit-button" type="submit">Submit</button>
                  </div>
                </form>
              </section>
              <div className="matchups col-9">
                {matchups}
              </div>
            </div>
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

MakePicksMain = connect(mapStateToProps)(MakePicksMain);
MakePicksMain = reduxForm({
  form: 'make-picks'
})(MakePicksMain);

export default MakePicksMain;