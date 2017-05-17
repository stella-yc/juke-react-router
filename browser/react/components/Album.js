import React, { Component } from 'react';
import Songs from './Songs';


class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // album: props.album,
      // currentSong: props.currentSong,
      // isPlaying: props.isPlaying,
      // toggleOne: props.toggleOne
    }

  }

  componentDidMount() {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(albumId);
  }

  render() {
    // console.log('this.state.album****', this.state.album);
    // console.log('props.params****', props.params);
    console.log('props****', this.props);
    return (

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

    );
  }
}


export default Album;
