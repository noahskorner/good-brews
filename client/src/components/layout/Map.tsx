import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 37, lng: -95 }}>
      <Marker position={{ lat: 37, lng: -95 }} />
    </GoogleMap>
  ))
);

export default Map;
