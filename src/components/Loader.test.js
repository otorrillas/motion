import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './Loader';

describe('<Loader />', () => {
  const renderComponent = () => renderer.create(<Loader />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent();
      expect(tree).toMatchSnapshot();
    });
  });
});
