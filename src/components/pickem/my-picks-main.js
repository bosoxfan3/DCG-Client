import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, Field } from 'redux-form';

import Select from '../form-components/select';

import { makePicks } from '../../actions/users';

import './my-picks-main.css';

export class MyPicksMain extends React.Component {
  componentDidMount() {
    this.setDefaults();
  }
  onSubmit(values) {
    this.props.dispatch(makePicks(values));
    this.props.history.push('/leaderboard');
  }
  resetPicks() {
    this.setDefaults();
  }
  setDefaults() {
    for (let i=0; i<this.props.matchupData.length; i++) {
      this.props.dispatch(change('edit-picks', `matchup${i}`, this.props.picks[`matchup${i}`]));
    }
  }
  render() {
    const lockoutTime = new Date("09 September 2018 10:00:00")
    const matchups = this.props.matchupData.map((matchup, index) => {
      return (
        <div className="matchup" key={index}>
          <h3 className="matchup-sentence team">{matchup[0]}</h3>
          <img className="matchup-sentence" src={matchup[2]} alt="" />
          <h3 className="matchup-sentence versus">vs.</h3>
          <img className="matchup-sentence" src={matchup[3]} alt="" />
          <h3 className="matchup-sentence team">{matchup[1]}</h3>
        </div>
      );
    });
    const matchupSelects = this.props.matchupData.map((matchup, index) => {
      return (
        <Field
          component={Select}
          name={`matchup${index}`}
          key={`matchup${index}`}
          options={[matchup[0], matchup[1]]}
        />
      );
    });
    return (
      <div id="my-picks-main">
        <div className="row">
          <div className="main-area col-12">
            <h1>Week 17</h1>
            <section className="col-3">
              <form
                onSubmit={this.props.handleSubmit(values => 
                  this.onSubmit(values)
                )}>
                {matchupSelects}
                <div className="button-div">
                  {Date.now() > lockoutTime ? null : <button type="submit">Submit Changes</button>}
                </div>
              </form>
              <div className="button-div">
                {Date.now() > lockoutTime ? null : <button className="stop-editing-button" onClick={() => this.resetPicks()}>Reset Changes</button>}
              </div>
            </section>
            <div className="matchups col-9">
              {matchups}
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
    picks: state.users.user.picks
  }
};

MyPicksMain = connect(mapStateToProps)(MyPicksMain);
MyPicksMain = reduxForm({
  form: 'edit-picks',
})(MyPicksMain);

export default MyPicksMain;