import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Mappa extends Component {
  render() {
    const caseificio = { lat: 45.379674, lng: 11.534945 };
    const style = {
      width: "100%",
      height: "280px"
    };

    return (
      <Map
        style={style}
        containerStyle={{
          position: "relative",
          width: "100%",
          height: "280px"
        }}
        zoom={12}
        initialCenter={caseificio}
        google={this.props.google}
      >
        <Marker position={caseificio} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAzkIuE3iD76KkswlWfm5JiHnA3iRIU6NI"
})(Mappa);
