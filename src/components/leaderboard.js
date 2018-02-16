import React from 'react';
import { connect } from 'react-redux';

export class Leaderboard extends React.Component {
  render() {
    const allUsers = this.props.allUsers.map((user, index) => {
      return (
        <div key={index}>
        <div>
          <h2>{user.name}</h2>
        </div>
        <div>
          <h2>{user.points}</h2>
        </div>
        </div>
      )
    })
    return (
      <div>
        <h1>Entry Names and Points</h1>
        {allUsers}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.users.allUsers
});

export default connect(mapStateToProps)(Leaderboard);