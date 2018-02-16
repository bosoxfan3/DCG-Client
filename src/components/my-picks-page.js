import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserNav from './user-nav';
import MyPicks from './my-picks';

import { fetchMatchupData } from '../actions/matchups';

export class MyPicksPage extends React.Component {
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
        <h1>My Picks Page</h1>
        <MyPicks history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  matchupData: state.matchups.matchups
});

export default connect(mapStateToProps)(MyPicksPage);