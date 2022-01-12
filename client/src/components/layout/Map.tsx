import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 37, lng: -95 }} />
  ))
);

export default Map;
