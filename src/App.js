import React, {
  Component
} from 'react';
import './App.css';
import Map from "./component/Map";
import SquareAPI from "./API/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12

    }
  }
  handleMarkerClick = marker => {
    marker.isOpen = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    });
  };
  componentDidMount() {
    SquareAPI.search({
      near: "Austin,TX",
      query: "tacos",
      limit: 10
    }).then(results => {
      const {
        venues
      } = results.response;
      const {
        center
      } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: parseFloat(venue.location.lat),
          lng: parseFloat(venue.location.lng),
          isOpen: false,
          isVisible: true,
        }
      });
      this.setState({
        venues,
        center,
        markers
      });
      console.log(results);
    });
  }
  render() {
    return ( <
      div className = "App" >
      <
      Map { ...this.state
      }
      handleMarkerClick = {
        this.handleMarkerClick
      }
      / > < /
      div >
    );
  }
}

export default App;