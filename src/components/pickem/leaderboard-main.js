import React from 'react';
import { connect } from 'react-redux';

import './leaderboard-main.css';

export class LeaderboardMain extends React.Component {
  render() {
    if (!this.props.allUsers) {
      return <div></div>;
    }
    const titles = (
      <div className="titles">
        <div className="col-1">
          <h2>Rank</h2>
        </div>
        <div className="entry-name col-4">
          <h2>Entry Name</h2>
        </div>
        <div className="username col-4">
          <h2>Username</h2>
        </div>
        <div className="col-3">
          <h2>Points</h2>
        </div>
      </div>
    );
    const nonDemoUsers = this.props.allUsers.filter(user => user.name !== 'demo');
    const rankings = nonDemoUsers.map((user, index) => {
      return (
        <div className="rankings" key={index}>
          <div className="rank col-1">
            <h3>{index+1}</h3>
          </div>
          <div className="entry col-4">
            <h3>{user.name}</h3>
          </div>
          <div className="user col-4">
            <h3>{user.username}</h3>
          </div>
          <div className="col-3">
            <h3>{user.points}</h3>
          </div>
        </div>
      )
    });
    const updateScoreButton = <button type="button" onClick={() => this.props.updateScores()}>Update Scores</button>;
    return (
      <div id="leaderboard-main">
        <div className="row">
          <div className="leaderboard-area col-12">
            <h1>Leaderboard</h1>
            {titles}
            {rankings}
            {this.props.currentUser.username === 'dqwest' ? <div>{updateScoreButton}</div> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.users.allUsers,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LeaderboardMain);