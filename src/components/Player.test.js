import React from 'react';
import renderer from 'react-test-renderer';

import Player from './Player';

describe('<Player />', () => {
  const requiredProps = {
    track: {
      id: 123
    }
  };
  const renderComponent = props =>
    renderer.create(<Player {...requiredProps} {...props} />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent();
      expect(tree).toMatchSnapshot();
    });
  });
});
