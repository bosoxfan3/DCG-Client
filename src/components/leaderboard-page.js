import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserNav from './user-nav';

import { getUser } from '../actions/picks';

export class LeaderboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(getUser());
  }
  render() {
    console.log(this.props.user);
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <h1>Leaderboard</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  user: state.users.user
});

export default connect(mapStateToProps)(LeaderboardPage);