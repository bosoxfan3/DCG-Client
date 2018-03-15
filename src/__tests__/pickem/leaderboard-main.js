import React from 'react';
import ReactDom from 'react-dom';

import { LeaderboardMain } from '../../components/pickem/leaderboard-main';

import { shallow } from 'enzyme';

describe('<LeaderboardMain />', () => {
  it('renders without crashing', () => {
    shallow(<LeaderboardMain />);
  });
});