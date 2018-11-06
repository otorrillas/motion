import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  describe('@render', () => {
    const renderComponent = props => renderer.create(<App {...props} />);

    it('default', () => {
      const tree = renderComponent().toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
