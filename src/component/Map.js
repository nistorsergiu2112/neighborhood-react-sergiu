import React, {
  Component
} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom = {8}
      zoom = {props.zoom}
      defaultCenter = {{lat: -34.397, lng: 150.644}}
      center = {props.center}
    >
      {props.markers &&
        props.markers.filter(marker => marker.isVisible).map((marker, idx) => {
          const venueInfo = props.venues.find(venue => venue.id === marker.id);
          return (<Marker
            key = {idx}
            position = {{lat: marker.lat, lng: marker.lng}}
            onClick = {() => props.handleMarkerClick(marker)}
          >
            {marker.isOpen && venueInfo.bestPhoto && (
              <InfoWindow>
                <React.Fragment>
                  <img src={`${venueInfo.bestPhoto.prefix}150x150${venueInfo.bestPhoto.suffix}`} alt={"Venue image"}/>
                  <p>{venueInfo.name}</p>
                  <p>{venueInfo.location.address}</p>
                </React.Fragment>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  )));
export default class Map extends Component {
  render() {
      return ( < MyMapComponent { ...this.props
          }
          googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBoH7DkpkDUKG-4-raHveaNj15Y1R1P14c"
          loadingElement = { < div style = {
              {
                height: `100%`
              }
            }
            />}
            containerElement = { < div style = {
                {
                  height: `400px`
                }
              }
              />}
              mapElement = { < div style = {
                  {
                    height: `100%`
                  }
                }
                />} / >
              );
            }
          }
