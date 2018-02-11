import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentUser, setAuthToken } from '../actions/login';
import { clearAuthToken } from '../local-storage';

export class UserNav extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }
  render() {
    return (
      <header>
        <nav>
          <div>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/picks">My Picks</Link>
          </div>
          <a onClick={() => this.logOut()}>Log Out</a>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserNav);