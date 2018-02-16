import React from 'react';
import { connect } from 'react-redux';

export class MyPicks extends React.Component {
  switchToEditingPage() {
    this.props.history.push('/edit-picks');
  }
  render() {
    let picks = [];
    for (const key in this.props.picks) {
      picks.push(this.props.picks[key]);
    };
    const userpicks = picks.map((pick, index) => {
      return (<h1 key={index}>{pick}</h1>);
    });
    return (
      <div>
        {userpicks}
        <button onClick={() => this.switchToEditingPage()}>Edit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  picks: state.users.user.picks
});

export default connect(mapStateToProps)(MyPicks);