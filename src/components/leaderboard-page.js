import React from 'react';
import { connect } from 'react-redux';

export function LeaderboardPage() {
  return (
    <div>
      <h1>Leaderboard</h1>
    </div>
  );
}

export default connect()(LeaderboardPage);