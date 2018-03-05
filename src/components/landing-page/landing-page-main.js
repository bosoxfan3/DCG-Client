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
              <h1>Pick 16</h1>
              <h2>A NFL Pick'Em Game</h2>
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
          <div className="rules col-6">
            <h3>Simply Pick the Winners</h3>
            <p>
              Choose who you think will win each matchup. Be sure to make all your selections before
              the first game of the week!
            </p>
            <img className="picks-form-screenshot" src={require("../../screenshots/MakePicks.png")} alt="picks form screenshot" />
          </div>
          <div className="rules col-6">
            <h3>...and Climb the Leaderboard</h3>
            <p>
              Each and every correct pick earns a point. See how your predictions stack up against 
              the competition over the course of the season!
            </p>
            <img className="leaderboard-screenshot" src={require("../../screenshots/Leaderboard.png")} alt="leaderboard screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(LandingPageMain);