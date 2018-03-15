import React from 'react';
import ReactDom from 'react-dom';

import { Footer } from '../../components/landing-page/footer';

import { shallow } from 'enzyme';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});