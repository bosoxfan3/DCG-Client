import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserNav from './user-nav';
import PublicPicksMain from './public-picks-main';

export class PublicPicksPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <PublicPicksMain />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PublicPicksPage);