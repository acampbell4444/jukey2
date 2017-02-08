import React from 'react';
import Songs from '../components/Songs';
import ReactDOM from 'react-dom'

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
 
  const currentArtist = this.props.currentArtist
  console.log(currentArtist)
  
  return (
    <div>
      <h3>{currentArtist.name}</h3>
      <h4>{currentArtist.selAlbums}</h4>
      <h4>SONGS</h4>
    </div>
  )
  }
}

export default Artist;