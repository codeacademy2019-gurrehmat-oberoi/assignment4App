import React from 'react';
import renderer from 'react-test-renderer';
import FormNameCard from '../FormNameCard.component';

describe('Form Name Card', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<FormNameCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
