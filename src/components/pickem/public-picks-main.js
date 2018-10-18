import React from 'react';
import { connect } from 'react-redux';

import './public-picks-main.css';

export class PublicPicksMain extends React.Component {
    makePicksList(picks) {
        if (!picks.matchup0) {
            return '<p>No picks submitted</p>';
        }
        if (picks.matchup0 !== 'Broncos' && picks.matchup0 !== 'Cardinals') {
            return '<p>No picks made this week</p>';
        }
        let result = '';
        for (const key in picks) {
            result += `<p key=${picks[key]}>${picks[key]}</p>`;
        }
        return result;
    }
    render() {
        if (!this.props.allUsers) {
            return <div />;
        }
        const nonDemoUsers = this.props.allUsers.filter(user => user.name !== 'demo');
        const userPicks = nonDemoUsers.map(user => (
            <div className="col-4" key={user.name}>
                <h4>{user.name}</h4>
                <h5>{user.username}</h5>
                <div dangerouslySetInnerHTML={{ __html: this.makePicksList(user.picks) }} />
            </div>
        ));
        return (
            <div id="public-picks-main">
                <div className="row">
                    <div className="public-picks-area col-12">{userPicks}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allUsers: state.users.allUsers
});

export default connect(mapStateToProps)(PublicPicksMain);
