import React from 'react';
import ReactDom from 'react-dom';

import { LandingPageMain } from '../../components/landing-page/landing-page-main';

import { shallow } from 'enzyme';

describe('<LandingPageMain />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageMain />);
  });
});