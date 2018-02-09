import React from 'react';
import { connect } from 'react-redux';

export function MyPicksPage() {
  return (
    <div>
      <h1>My Picks Page</h1>
    </div>
  );
}

export default connect()(MyPicksPage);