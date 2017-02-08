import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          {/*<a href="#" onClick={deselectAlbum}>ALBUMS</a>*/}
          <div><Link to={`/albums`}>Albums</Link></div>

          <div><Link to={`/artists`}>Artists</Link></div>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
