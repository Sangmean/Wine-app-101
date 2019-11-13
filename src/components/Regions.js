import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Regions extends Component {
  static propTypes = {
    onSelectRegion: PropTypes.func,
    regions: PropTypes.array, // an array of string
    region: PropTypes.object // the selected region
  };

  onSelectRegion = region => {
    this.props.onSelectRegion(region);
  };

  render() {
    console.log('-----> check region', this.props.regions);
    const isActive = 'collection-item active';
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Regions</h2>
        <div className="collection">
          {this.props.regions.map(region => (
            <a
              href="#!"
              className={['collection-item', region === this.props.region ? isActive : ', '].join(' ')}
              key={region}
              onClick={e => {
                e.preventDefault();
                this.onSelectRegion(region);
              }}
            >
              {region}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
