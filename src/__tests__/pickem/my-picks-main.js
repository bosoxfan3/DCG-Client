import React from 'react';
import ReactDom from 'react-dom';

import { MyPicksMain } from '../../components/pickem/my-picks-main';

import { shallow } from 'enzyme';

describe('<MyPicksMain />', () => {
  it('renders without crashing', () => {
    shallow(<MyPicksMain />);
  });
});