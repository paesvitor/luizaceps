import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Map.styles";

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = ({ geocoding }) => {
  const { lat, lng } = geocoding;

  const MapWithAMarker = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap defaultZoom={15} defaultCenter={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    ))
  );

  return (
    <Wrapper>
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Wrapper>
  );
};

Map.propTypes = {
  geocoding: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  google: PropTypes.object
};

export default Map;
