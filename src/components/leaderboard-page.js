import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserNav from './user-nav';

export class LeaderboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
  }
  render() {
    console.log(this.props.currentUser);
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
  loggedIn: state.auth.currentUser !==null,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LeaderboardPage);