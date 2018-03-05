import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserNav from './user-nav';
import MyPicksMain from './my-picks-main';

export class MyPicksPage extends React.Component {
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
        <MyPicksMain history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MyPicksPage);