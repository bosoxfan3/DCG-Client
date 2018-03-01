import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserNav from './user-nav';
import MakePicksMain from './make-picks-main';
import { getUser, getAllUsers } from '../actions/picks';

import { fetchMatchupData } from '../actions/matchups';

export class MakePicksPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchMatchupData());
    this.props.dispatch(getUser());
    this.props.dispatch(getAllUsers());
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <MakePicksMain history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  matchupData: state.matchups.matchups
});

export default connect(mapStateToProps)(MakePicksPage);