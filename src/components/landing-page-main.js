import React from 'react';
import { connect } from 'react-redux';

export function LandingPageMain() {
  return (
    <div>
      <p>Landing Page Content</p>
    </div>
  );
}

export default connect()(LandingPageMain);