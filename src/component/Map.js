import React, {
  Component
} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => ( <
    GoogleMap defaultZoom = {
      8
    }
    defaultCenter = {
      {
        lat: -34.397,
        lng: 150.644
      }
    }> {
      props.isMarkerShown && ( <
        Marker
        position = {
          {
            lat: -34.397,
            lng: 150.644
          }
        }/ >
      )
    } <
    /GoogleMap>
  )));
export default class Map extends Component {
  render() {
      return ( < MyMapComponent isMarkerShown
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
