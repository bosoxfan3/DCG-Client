import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserNav from './user-nav';
import Leaderboard from './leaderboard';

import { getUser } from '../actions/picks';

export class LeaderboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(getUser());
    // this.props.dispatch(getAllUsers());
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
        <h1>Leaderboard</h1>
        <Leaderboard />
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