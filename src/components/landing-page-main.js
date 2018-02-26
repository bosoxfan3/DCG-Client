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
      <p>Landing Page Content</p>
    </div>
  );
}

export default connect()(LandingPageMain);