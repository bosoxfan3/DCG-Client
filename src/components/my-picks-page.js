import React from 'react';
import { connect } from 'react-redux';
import UserNav from './user-nav';

export function MyPicksPage() {
  return (
    <div>
      <UserNav />
      <h1>My Picks Page</h1>
    </div>
  );
}

export default connect()(MyPicksPage);