import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LandingPageHeader from './landing-page-header';
import LandingPageMain from './landing-page-main';
import Footer from './footer';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to='/make-picks' />;
  }
  return (
    <div>
      <LandingPageHeader />
      <LandingPageMain />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);