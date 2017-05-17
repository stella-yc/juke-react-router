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
    console.log('props from Artist', this.props);
    return (
      <div>
        <h3>{this.props.artist.name}</h3>
        <h4>ALBUMS</h4>




        <div className="row">
          {
            this.props.albums.map(album => (
              <div className="col-xs-4" key={album.id}>
                <a onClick={() => this.props.selectAlbum(album.id)} className="thumbnail">
                  <img src={album.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{album.name}</span>
                    </h5>
                    <small>{album.songs.length} songs</small>
                  </div>
                </a>
              </div>
            ))
          }
        </div>

        <h4>SONGS</h4>
        <div className="album">
          <div>
            <h3>{this.props.album.name}</h3>
            <img src={this.props.album.imageUrl} className="img-thumbnail" />
          </div>
          <Songs
            songs={this.props.album.songs}
            currentSong={this.props.currentSong}
            isPlaying={this.props.isPlaying}
            toggleOne={this.props.toggleOne} />
        </div>





      </div>
    );
  }

}

