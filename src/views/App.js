import React, { PureComponent, Suspense } from 'react';

import styles from './App.module.css';

import { fetchTrackList } from '../api';
import { PlayerContext } from './PlayerContext';

import Loader from '../components/Loader';
import TrackList from '../components/TrackList';
import Player from '../components/Player';

class App extends PureComponent {
  state = {
    trackList: null,
    currentTrack: null,
    isPlaying: false,
    playerRef: React.createRef()
  };

  componentDidMount() {
    this._loadAsyncData();
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  _loadAsyncData() {
    this._asyncRequest = fetchTrackList().then(trackList => {
      this._asyncRequest = null;
      this.setState({ trackList });
    });
  }

  onTrackSelect = track => {
    const { currentTrack, isPlaying } = this.state;

    if (currentTrack && track === currentTrack) {
      const action = isPlaying ? this.pause : this.play;
      action();
    } else {
      this.setState({
        currentTrack: track,
        isPlaying: true
      });
    }
  };

  pause = () => {
    this.state.playerRef.current.pause();
    this.setState({
      isPlaying: false
    });
  };

  play = () => {
    this.state.playerRef.current.play();
    this.setState({
      isPlaying: true
    });
  };

  render() {
    const { currentTrack, trackList, playerRef } = this.state;

    return (
      <Suspense fallback={<Loader />} maxDuration={2000}>
        <div className={styles.app}>
          <h1>Motion</h1>

          <PlayerContext.Provider value={this.state}>
            <TrackList songs={trackList} onSelect={this.onTrackSelect} />

            <Player track={currentTrack} ref={playerRef} />
          </PlayerContext.Provider>
        </div>
      </Suspense>
    );
  }
}

export default App;
