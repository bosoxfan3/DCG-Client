import React from 'react';
import { connect } from 'react-redux';

import './my-picks-main.css';

export class MyPicksMain extends React.Component {
  switchToEditingPage() {
    this.props.history.push('/edit-picks');
  }
  render() {
    let picks = [];
    for (const key in this.props.picks) {
      picks.push(this.props.picks[key]);
    };
    const userpicks = picks.map((pick, index) => {
      return (<h2 className="pick" key={index}>{pick}</h2>);
    });
    return (
      <div id="my-picks-main" className="my-picks-main-background">
        <div className="row">
          <div className="main-area col-4">
            <h1>My Picks</h1>
            {userpicks}
            <button className="edit-button" onClick={() => this.switchToEditingPage()}>Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  picks: state.users.user.picks
});

export default connect(mapStateToProps)(MyPicksMain);