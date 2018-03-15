import React from 'react';
import ReactDom from 'react-dom';

import { MyPicksPage } from '../../components/pickem/my-picks-page';

import { shallow } from 'enzyme';

describe('<MyPicksPage />', () => {
  it('renders without crashing', () => {
    shallow(<MyPicksPage />);
  });
});