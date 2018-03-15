import React from 'react';
import ReactDom from 'react-dom';

import { UserNav } from '../../components/pickem/user-nav';

import { shallow } from 'enzyme';

describe('<UserNav />', () => {
  it('renders without crashing', () => {
    shallow(<UserNav />);
  });
});