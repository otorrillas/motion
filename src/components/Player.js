import React from 'react';

import styles from './Player.module.css';

const Player = React.forwardRef((props, ref) => {
  const { track } = props;
  const src = track ? `tracks/${track.id}.mp3` : null;

  return (
    <audio src={src} controls ref={ref} autoPlay className={styles.player} />
  );
});

export default Player;
