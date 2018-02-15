import React from 'react';
import { connect } from 'react-redux';

export class MyPicks extends React.Component {
  switchToEditingPage() {
    this.props.history.push('/edit-picks');
  }
  render() {
    let picks;
    for (const key in this.props.picks) {
      picks += `<h1>${this.props.picks[key]}</h1>`;
    };
    return (
      <div>
        {picks}
      </div>
    );
  }
}