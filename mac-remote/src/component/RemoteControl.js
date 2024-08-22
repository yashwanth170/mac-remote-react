import React, { useState } from 'react';
import axios from 'axios';

const RemoteControl = () => {
  const [message, setMessage] = useState('');
  const [volumeLevel, setVolumeLevel] = useState(50); // Default volume level

  const handleVolume = (level) => {
    axios.get(`/volume?level=${level}`)
      .then(response => setMessage(`Volume set to ${level}`))
      .catch(error => setMessage('Error setting volume'));
  };

  const handleSpace = () => {
    axios.get('/space')
      .then(response => setMessage('Space key pressed'))
      .catch(error => setMessage('Error pressing space key'));
  };

  const handleSpotifyPlayPause = () => {
    axios.get('/spotify/playpause')
      .then(response => setMessage('Spotify play/pause toggled'))
      .catch(error => setMessage('Error toggling Spotify play/pause'));
  };

  const handleArrow = (type) => {
    axios.get(`/arrow?type=${type}`)
      .then(response => setMessage(`Arrow key ${type} pressed`))
      .catch(error => setMessage('Error pressing arrow key'));
  };

  const handleSkipAd = () => {
    axios.get('/skipad')
      .then(response => setMessage('Skipped ad on YouTube'))
      .catch(error => setMessage('Error skipping ad'));
  };

  const increaseVolume = () => {
    setVolumeLevel(prev => {
      const newVolume = Math.min(100, prev + 10); // Cap volume at 100
      handleVolume(newVolume);
      return newVolume;
    });
  };

  const decreaseVolume = () => {
    setVolumeLevel(prev => {
      const newVolume = Math.max(0, prev - 10); // Min volume at 0
      handleVolume(newVolume);
      return newVolume;
    });
  };

  const handleSleep = () => {
    axios.get('/sleep')
      .then(response => setMessage('Sleeping'))
      .catch(error => setMessage('Error'));
  };

  const handleShutdown = () => {
    axios.get('/shutdown')
      .then(response => setMessage('Shutting down'))
      .catch(error => setMessage('Error'));
  };

  return (
    <div style={styles.remoteContainer}>
      <div style={styles.screen}>{message}</div>
      <div style={styles.buttonGroup}>
        <input
          type="number"
          value={volumeLevel}
          onChange={(e) => setVolumeLevel(Number(e.target.value))}
          style={styles.input}
        />
        <button onClick={() => handleVolume(volumeLevel)} style={styles.volumeButton}>Set Volume</button>
      </div>
      <div style={styles.buttonGroup}>
        <button onClick={decreaseVolume} style={styles.adjustButton}>-</button>
        <button onClick={increaseVolume} style={styles.adjustButton}>+</button>
      </div>
      <div style={styles.buttonGroup}>
        <button onClick={() => handleArrow(123)} style={styles.arrowButton}>◀</button>
        <button onClick={() => handleArrow(124)} style={styles.arrowButton}>▶</button>
      </div>
      <div style={styles.buttonGroup}>
        <button onClick={handleSpace} style={styles.remoteButton}>Space</button>
        <button onClick={handleSpotifyPlayPause} style={styles.remoteButton}>Play/Pause</button>
        <button onClick={handleSkipAd} style={styles.remoteButton}>Skip Ad</button>
      </div>
      <div style={styles.buttonGroup}>
        <button onClick={handleSleep} style={styles.remoteButton}>Sleep</button>
        <button onClick={handleShutdown} style={styles.remoteButton}>Shutdown</button>
      </div>
    </div>
  );
};

const styles = {
  remoteContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    maxWidth: '300px',
    margin: 'auto',
    color: '#fff'
  },
  screen: {
    width: '100%',
    height: '60px',
    backgroundColor: '#444',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    fontSize: '16px',
    padding: '10px',
    textAlign: 'center'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '10px'
  },
  remoteButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#555',
    color: '#fff',
    cursor: 'pointer'
  },
  volumeButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  },
  arrowButton: {
    margin: '5px',
    padding: '15px',
    fontSize: '24px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#555',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  adjustButton: {
    margin: '5px',
    padding: '10px',
    fontSize: '24px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  },
  input: {
    margin: '5px',
    padding: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#666',
    color: '#fff',
    width: '60px',
    textAlign: 'center'
  }
};

export default RemoteControl;
