import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserNav from './user-nav';
import MakePicksForm from './make-picks-form';

import { fetchMatchupData } from '../actions/matchups';

export class MakePicksPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchMatchupData());
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <h1>Make Picks Page</h1>
        <MakePicksForm history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  matchupData: state.matchups.matchups
});

export default connect(mapStateToProps)(MakePicksPage);