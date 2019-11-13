import React, { Component } from 'react';
import { Regions } from './components/Regions';
import { WineList } from './components/WineList';
import { Wine } from './components/Wine';
import * as WinesService from './module/WinesService';

export class WineApp extends Component {
  state = {
    regions: [],
    selectedRegion: null,
    wines: [],
    selectedWine: null
  };

  //need to be more clear on componentDidMount!
  async componentDidMount() {
    // load regions and maybe wines from the first region (From React101 Tutorial)
    // setState regions and selectRegion
    await WinesService.fetchRegions().then(regions => {
      this.setState({
        regions: regions,
        selectedRegion: regions[0]
      });
    });

    WinesService.fetchWinesFrom(this.state.selectedRegion).then(wines => {
      console.log('WineApp::fetch default wines list', wines[0]);
      this.setState(
        {
          wines: wines,
          selectedWine: wines[0]
        },
        // To check whether I got the fetch data!
        () => console.log('WineApp::fetch default selected region ', wines[0])
      );
    });
  }

  onSelectRegion = region => {
    WinesService.fetchWinesFrom(region).then(wines => {
      this.setState({
        selectedRegion: region,
        wines: wines,
        selectedWine: wines[0]
      });
    });
  };

  onSelectWine = id => {
    WinesService.fetchWine(id).then(wine => {
      console.log('selected wine before state:: ', wine);
      this.setState({
        selectedWine: wine
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="row">
          <Regions regions={this.state.regions} region={this.state.selectedRegion} onSelectRegion={this.onSelectRegion} />
          <WineList wines={this.state.wines} wine={this.state.selectedWine} onSelectWine={this.onSelectWine} />
          <Wine wine={this.state.selectedWine} />
        </div>
      </div>
    );
  }
}
