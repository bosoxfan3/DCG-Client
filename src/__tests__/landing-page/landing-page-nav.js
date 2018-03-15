import React from 'react';
import ReactDom from 'react-dom';

import { LandingPageNav } from '../../components/landing-page/landing-page-nav';

import { shallow } from 'enzyme';

describe('<LandingPageNav />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageNav />);
  });
});