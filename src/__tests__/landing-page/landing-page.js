import React from 'react';
import ReactDom from 'react-dom';

import { LandingPage } from '../../components/landing-page/landing-page';

import { shallow } from 'enzyme';

describe('<LandingPage />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
});