import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class WineList extends Component {
  static propTypes = {
    onSelectWine: PropTypes.func,
    wines: PropTypes.array, // an array of wine object
    wine: PropTypes.object // the selected wine
  };

  onSelectWine = id => {
    this.props.onSelectWine(id);
  };

  render() {
    const isActive = 'collection-item active';

    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Wines</h2>
        <div className="collection">
          {this.props.wines.map(wine => (
            <a
              href="#!"
              className={['collection-item ', wine.id === this.props.wine.id ? isActive : ', '].join(' ')}
              key={wine.id}
              onClick={e => {
                e.preventDefault();
                this.onSelectWine(wine.id);
              }}
            >
              {wine.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
