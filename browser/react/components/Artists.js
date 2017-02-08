import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, Link } from 'react-router';
const Artists = (props) => {

  const artists = props.artists;

  return (
    <div>
  <h3>Artists</h3>
    <div className="list-group">
    {
      artists.map(artist => {
        return (
          <div className="list-group-item" key={artist.id}>
            <Link to="">{ artist.name }</Link>
          </div>
        )
      })
    }
  </div>
</div>
  );
}

export default Artists;