import React, { useState } from "react";
import GoogleMapReact, { fitBounds } from "google-map-react";
import useWindowSize from "../../hooks/useWindowSize";
import { convertRemToPixels } from "../../utils/index";
import { Brewery } from "../../interfaces/global";
import Marker from "./Marker";

interface MapProps {
  breweries: Brewery[];
}
const Map = ({ breweries }: MapProps) => {
  const { width, height } = useWindowSize();
  const [mapRef, setMapRef] = useState<any>(null);
  const [maps, setMaps] = useState<any>(null);
  const [center, setCenter] = useState({ lat: 35, lng: -100 });
  const [zoom, setZoom] = useState(1);

  const handleMapLoad = (map: any, maps: any) => {
    setMapRef(map);
    setMaps(maps);
  };

  React.useEffect(() => {
    if (mapRef && maps && breweries.length && width && height) {
      const bounds = new maps.LatLngBounds();

      breweries.forEach((brewery) => {
        if (brewery.latitude && brewery.longitude) {
          const newPoint = new maps.LatLng(brewery.latitude, brewery.longitude);
          bounds.extend(newPoint);
        }
      });

      const newBounds = {
        ne: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng(),
        },
        sw: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng(),
        },
      };

      const size = {
        width: width / 2,
        height: height - convertRemToPixels(5), // Map height in pixels
      };

      const { center, zoom } = fitBounds(newBounds, size);
      setCenter(center);
      setZoom(zoom);
    }
  }, [mapRef, maps, breweries, height, width]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleMapLoad(map, maps)}
        bootstrapURLKeys={{ key: "API_KEY" }}
        defaultCenter={{ lat: 35, lng: -100 }}
        defaultZoom={1}
        center={center}
        zoom={zoom}
      >
        {breweries.map((brewery, index) => {
          if (brewery.latitude && brewery.longitude) {
            return (
              <Marker
                key={`${brewery.name}${index}`}
                lat={brewery.latitude}
                lng={brewery.longitude}
                text={"test"}
              />
            );
          } else return null;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
