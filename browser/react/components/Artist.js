import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);
  }

  render() {
    console.log('props from Artist', this.props);
    return (
        <div>
          <h3>{this.props.artist.name}</h3>
          <h4>ALBUMS</h4>
          <h4>SONGS</h4>
        </div>
    );
  }

};

