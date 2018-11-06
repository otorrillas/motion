import React from 'react';
import renderer from 'react-test-renderer';

import TrackList from './TrackList';
import { PlayerContext } from '../views/PlayerContext';

describe('<TrackList />', () => {
  const mockActions = {
    onSelect: jest.fn()
  };

  const requiredProps = {
    songs: [
      {
        id: 123,
        title: 'sample title',
        artist: 'sample artist',
        album: 'sample album'
      },
      {
        id: 456,
        title: 'sample title 2',
        artist: 'sample artist 2',
        album: 'sample album 2'
      }
    ]
  };
  const renderComponent = (
    value = { currentTrack: null, isPlaying: false },
    props
  ) =>
    renderer.create(
      <PlayerContext.Provider value={value}>
        <TrackList {...requiredProps} {...mockActions} {...props} />
      </PlayerContext.Provider>
    );

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('@actions', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
    describe('onClick', () => {
      it('click on track calls onSelect with right id', () => {
        const component = renderComponent();
        component.root
          .findAllByProps({ className: 'track' })[0]
          .props.onClick();

        expect(mockActions.onSelect).toHaveBeenCalledWith(
          requiredProps.songs[0]
        );
      });
    });
  });
});
