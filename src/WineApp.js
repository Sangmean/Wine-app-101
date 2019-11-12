import React, { Component } from 'react';
import { Regions } from './components/Regions';
import { WineList } from './components/WineList';
import { Wine } from './components/Wine';
import * as WinesService from './module/WinesService';
// import logo from './logo.svg';
// import { Loader } from './components';
// import './App.css';

export class WineApp extends Component {
  state = {
    regions: [],
    selectedRegion: null,
    wines: [],
    selectedWine: null
  };

  //준비하는 과정, 처음에 정보를 보여주는 초석?
  async componentDidMount() {
    // load regions and maybe wines from the first region
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
        () => console.log('WineApp::fetch default selected region ', wines[0])
      );
    });
  }

  onSelectRegion = region => {
    // TODO : maybe we need to reload wines here ???
    // what to put here??
    // console.log('----> Ray region:', region);
    // this.setState({
    //   selectedRegion: region
    // });

    WinesService.fetchWinesFrom(region).then(wines => {
      // console.log('-----> Ray Result Wines:', wines);
      this.setState({
        selectedRegion: region,
        wines: wines
      });
    });
  };

  onSelectWine = wine => {
    // console.log('**********', wine);
    // this.setState({
    //   selectedWine: wine
    // });
    WinesService.fetchWine(wine.id).then(wine => {
      console.log('selected wine before state:: ', wine);
      // () => console.log('selected wine in state???', wine),
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
