import React from 'react';
import { connect } from 'react-redux';
import UserNav from './user-nav';

export function LeaderboardPage() {
  return (
    <div>
      <UserNav />
      <h1>Leaderboard</h1>
    </div>
  );
}

export default connect()(LeaderboardPage);