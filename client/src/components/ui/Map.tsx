import React, { useState } from "react";
import GoogleMapReact, { fitBounds } from "google-map-react";
import useWindowSize from "../../composables/useWindowSize";
import { convertRemToPixels } from "../../utils/index";

interface MarkerProps {
  key: String;
  lat: Number;
  lng: Number;
  text: String;
}
const Marker = (props: MarkerProps) => (
  <div className="w-10 h-10 bg-yellow-400 rounded-full text-yellow-800 flex justify-center items-center shadow">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="beer"
      className="h-6 pl-1"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
      ></path>
    </svg>
  </div>
);

interface Brewery {
  obdb_id?: String;
  name: String;
  brewery_type?: String;
  street?: String;
  address_2?: String;
  address_3?: String;
  city: String;
  state?: String;
  county_province?: String;
  postal_code: String;
  phone?: String;
  website_url?: String;
  country: String;
  longitude?: number;
  latitude?: number;
  tags?: String;
}
interface MapProps {
  breweries: Array<Brewery>;
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
          console.log(brewery.latitude);
          console.log(brewery.longitude);
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
