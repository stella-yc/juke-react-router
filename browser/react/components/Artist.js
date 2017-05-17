import React, { Component } from 'react';
import { Link } from 'react-router';
import Songs from './Songs';

export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    const selectArtistAlbums = this.props.selectArtistAlbums;
    const deselectAlbum = this.props.deselectAlbum;
    selectArtist(artistId);
    selectArtistAlbums(artistId);
    deselectAlbum();
  }

  render() {
    const artist = this.props.artist;
    const children = this.props.children;
    const albums = this.props.albums;
    console.log('props.albums in Artist', this.props.albums);

    const artistSongs = (albums) => {
      var allSongs = albums.reduce((songs, album, ind) => {
        return songs.concat(album.songs)
      }, []);
      return allSongs;
    }

    const propsToPassToChildren = {
      songs: artistSongs(albums),
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne,
      imageUrl: this.props.album.imageUrl,
      name: this.props.album.name,
      albums: this.props.albums
    }



    return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${artist.id}/albums`} activeStyle={{ color: 'pink'}}>ALBUMS</Link></li>
        <li><Link to={`/artists/${artist.id}/songs`} activeStyle={{ color: 'pink'}}>SONGS</Link></li>
      </ul>
      { children && React.cloneElement(children, propsToPassToChildren) }
    </div>
    )
  }

}

