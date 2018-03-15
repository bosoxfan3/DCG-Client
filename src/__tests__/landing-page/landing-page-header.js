import React from 'react';
import ReactDom from 'react-dom';

import { LandingPageHeader } from '../../components/landing-page/landing-page-header';

import { shallow } from 'enzyme';

describe('<LandingPageHeader />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageHeader />);
  });
});