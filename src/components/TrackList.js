import React from 'react';

import Track from './Track';

import styles from './TrackList.module.css';

const TrackList = ({ songs, onSelect }) => (
  <table className={styles.trackList}>
    <thead>
      <tr>
        <th />
        <th>Song</th>
        <th>Artist</th>
        <th>Album</th>
      </tr>
    </thead>
    <tbody>
      {songs &&
        songs.map(track => (
          <Track key={track.id} track={track} onClick={() => onSelect(track)} />
        ))}
    </tbody>
  </table>
);

export default TrackList;
