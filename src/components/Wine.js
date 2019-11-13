import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Wine extends Component {
  static propTypes = {
    wine: PropTypes.object // the wine object
  };

  render() {
    console.log('******* ', this.props.wine);
    // MUST NULL CHECK
    if (this.props.wine) {
      return (
        <div className="col s12 m12 l6">
          <h2 className="center-align">Wine details</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img
                className="responsive-img wine-detail-image"
                alt="Wine bottle pic"
                src={`https://wines-api.herokuapp.com/api/wines/${this.props.wine.id}/image`}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3>{this.props.wine.name}</h3>
                <br />
                <p>
                  <b>Appellation:</b> {this.props.wine.appellation.name}
                </p>
                <p>
                  <b>Region:</b> {this.props.wine.appellation.region}
                </p>
                <p>
                  <b>Color:</b> {this.props.wine.type}
                </p>
                <p>
                  <b>Grapes:</b> {this.props.wine.grapes.join(', ')}
                </p>
              </div>
              <div className="card-action" />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
