import React from 'react';
import { connect } from 'react-redux';

import './landing-page-main.css';

export function LandingPageMain() {
  return (
    <div id="landing-page-main">
      <div className="title-area">
        <div className="row">
          <div className="col-12">
            <section className="title-section">
              <h1>DCG Pick'Em</h1>
              <h2>An NFL Pick'Em Game</h2>
            </section>
          </div>
        </div>
      </div>
      <div className="rules-section">
        <div className="row">
          <div className="col-12">
            <h1>How To Play</h1>
          </div>
        </div>
        <div className="row">
          <div className="rules col-4">
            <h3>Pick the Winners</h3>
            <p>Screenshot will go here</p>
          </div>
          <div className="rules col-4">
            <h3>Earn Points</h3>
            <p>Screenshot</p>
          </div>
          <div className="rules col-4">
            <h3>Climb the Leaderboard</h3>
            <p>Screenshot</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(LandingPageMain);