import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import styles from './Track.module.css';
import cx from 'classnames';
import { PlayerContext } from '../views/PlayerContext';

const Track = ({ track, onClick }) => (
  <PlayerContext.Consumer>
    {({ currentTrack, isPlaying }) => {
      const { id, title, artist, album } = track;

      const isSelected = currentTrack && currentTrack.id === id;
      const icon = isSelected && isPlaying ? faPause : faPlay;

      return (
        <tr
          className={cx(styles.track, { [styles.selected]: isSelected })}
          onClick={onClick}
        >
          <td>
            <FontAwesomeIcon icon={icon} />
          </td>
          <td>{title}</td>
          <td>{artist}</td>
          <td>{album}</td>
        </tr>
      );
    }}
  </PlayerContext.Consumer>
);

export default Track;
