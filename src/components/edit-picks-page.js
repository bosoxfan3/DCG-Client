import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserNav from './user-nav';
import EditPicksForm from './edit-picks-form';

export class EditPicksPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    // this.props.dispatch(getUser());
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <h1>Edit Picks Page</h1>
        <EditPicksForm history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(EditPicksPage);