import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserNav from './user-nav';
import LeaderboardMain from './leaderboard-main';

import { getUser, getAllUsers } from '../actions/users';
import { updateScores } from '../actions/users';

export class LeaderboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(getUser());
    this.props.dispatch(getAllUsers());
  }
  submitAllPicks() {
    this.props.dispatch(updateScores())
  }
  render() {
    console.log(this.props.user);
    console.log(this.props.allUsers);
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <LeaderboardMain />
        <button hidden type="button" onClick={() => this.submitAllPicks()}>Get Scores</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  user: state.users.user,
  allUsers: state.users.allUsers
});

export default connect(mapStateToProps)(LeaderboardPage);