import React from 'react';
import Songs from '../components/Songs';
import ReactDOM from 'react-dom'
import { Link } from 'react-router';

class Artist extends React.Component  {

   constructor () {
    super()
  }
  //console.log('props:', props)

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
  
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);
  }

  render() {
  const album = this.props.album;
  const currentSong = this.props.currentSong;
  const isPlaying = this.props.isPlaying;
  const toggleOne = this.props.toggleOne;
    const songs = this.props.songs;

  const toggle = this.props.toggleOne;
 
  const currentArtist = this.props.currentArtist
  console.log('curartisselectedalbums',currentArtist.selectedAlbums)
  console.log('curart',currentArtist)
  
  return (
    <div>
      <h3>{currentArtist.name}</h3>
      
      <h4>Albums</h4>

      {
        currentArtist.selectedAlbums && currentArtist.selectedAlbums.map(album => (
          <div key={album.id}>
          <div className="col-xs-4" key={ album.id }>
            {/*<a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>*/}
            <Link className="thumbnail" to={`/albums/${album.id}`}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </Link>
            <h4>SONGS</h4>
          </div>

<div className="album">
      <div>
      
       
      </div>

      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
    </div>

        ))
      }

      


   




















    </div>
  )
  }
}

export default Artist;