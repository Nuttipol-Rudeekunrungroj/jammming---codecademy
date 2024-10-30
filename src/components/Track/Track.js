
import React from 'react';
import './Track.module.css';




function Track({ track, onAdd, onRemove, isRemoval }) {
  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
        {track.preview_url && (
          <audio controls>
            <source src={track.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      {isRemoval ? (
        <button className="Track-action" onClick={removeTrack}>-</button>
      ) : (
        <button className="Track-action" onClick={addTrack}>+</button>
      )}
    </div>
  );
}

export default Track;




