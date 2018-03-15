import React from 'react';
import ReactDom from 'react-dom';

import { LeaderboardPage } from '../../components/pickem/leaderboard-page';

import { shallow } from 'enzyme';

describe('<LeaderboardPage />', () => {
  it('renders without crashing', () => {
    shallow(<LeaderboardPage />);
  });
});