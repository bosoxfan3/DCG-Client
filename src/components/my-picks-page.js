import React from 'react';
import { connect } from 'react-redux';
import UserNav from './user-nav';
import MyPicksForm from './my-picks-form';

export function MyPicksPage() {
  return (
    <div>
      <UserNav />
      <h1>My Picks Page</h1>
      <MyPicksForm />
    </div>
  );
}

export default connect()(MyPicksPage);