import React from 'react';
import Songs from '../components/Songs';
import ReactDOM from 'react-dom'

class Album extends React.Component  {

   constructor () {
    super(props)
  }
  //console.log('props:', props)


  render() {
  const album = this.props.album;
  const currentSong = this.props.currentSong;
  const isPlaying = this.props.isPlaying;
  const toggleOne = this.props.toggleOne;
  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  )
  }
}

export default Album;
