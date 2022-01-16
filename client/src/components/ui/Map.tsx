import { useState, useEffect, useRef } from "react";
import GoogleMapReact, { fitBounds } from "google-map-react";
import { BreweryType } from "../../interfaces/global";
import Marker from "./Marker";

interface MapProps {
  breweries: BreweryType[];
}
const Map = ({ breweries }: MapProps) => {
  const defaultCenter = { lat: 35, lng: -100 };
  const [maps, setMaps] = useState<any>(null);
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(1);
  const [mapHeight, setMapHeight] = useState();
  const [mapWidth, setMapWidth] = useState();
  const mapRef = useRef<any>(null);

  const handleMapLoad = (maps: any) => {
    setMaps(maps);
  };

  useEffect(() => {
    if (mapRef !== null) {
      setMapWidth(mapRef.current.clientWidth);
      setMapHeight(mapRef.current.clientHeight);
    }
    if (maps && mapWidth && mapHeight && breweries.length) {
      const bounds = new maps.LatLngBounds();

      if (breweries.length === 1) {
        const newPoint = new maps.LatLng(
          breweries[0].latitude || 35,
          (breweries[0].longitude || -100) - 1
        );
        bounds.extend(newPoint);
        const newPoint1 = new maps.LatLng(
         (breweries[0].latitude || 35) - 1,
          breweries[0].longitude || -100
        );
        bounds.extend(newPoint1);
      } else if (breweries.length > 1) {
        breweries.forEach((brewery) => {
          if (brewery.latitude && brewery.longitude) {
            const newPoint = new maps.LatLng(
              brewery.latitude,
              brewery.longitude
            );
            bounds.extend(newPoint);
          }
        });
      }

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
        width: mapWidth,
        height: mapHeight,
      };

      const { center, zoom } = fitBounds(newBounds, size);
      setZoom(zoom);
      setCenter(center);
    }
  }, [maps, breweries, mapWidth, mapHeight]);

  return (
    <div style={{ height: "100%", width: "100%" }} ref={mapRef}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ maps }) => handleMapLoad(maps)}
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
                key={brewery.obdb_id}
                lat={brewery.latitude}
                lng={brewery.longitude}
                {...brewery}
              />
            );
          } else return null;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
