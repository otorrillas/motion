import React from 'react';
import renderer from 'react-test-renderer';

import Track from './Track';

import { PlayerContext } from '../views/PlayerContext';

describe('<Track />', () => {
  const mockActions = {
    onClick: jest.fn()
  };

  const requiredProps = {
    track: {
      id: 123,
      title: 'sample title',
      artist: 'sample artist',
      album: 'sample album'
    }
  };

  const renderComponent = (
    value = { currentTrack: null, isPlaying: false },
    props
  ) =>
    renderer.create(
      <PlayerContext.Provider value={value}>
        <Track {...requiredProps} {...mockActions} {...props} />
      </PlayerContext.Provider>
    );

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent();
      expect(tree).toMatchSnapshot();
    });

    it('with current track matching & playing', () => {
      const tree = renderComponent({
        currentTrack: requiredProps.track,
        isPlaying: true
      });
      expect(tree).toMatchSnapshot();
    });
  });

  describe('@actions', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
    describe('onClick', () => {
      it('click on track calls onClick', () => {
        const component = renderComponent();
        component.root.findByType('tr').props.onClick();

        expect(mockActions.onClick).toHaveBeenCalled();
      });
    });
  });
});
