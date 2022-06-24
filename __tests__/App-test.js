import React from 'react';
import 'react-native';
import App from '../App';
import { render } from '@testing-library/react-native';

describe('App', () => {
  it('hosuld render correctly', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
