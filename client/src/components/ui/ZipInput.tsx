import { Location, Cross } from "akar-icons";
import { useContext, useState } from "react";
import { MapsContext } from "../../contexts";
import { CurrentLocationInterface } from "../../interfaces/global";

interface ZipInputProps {
  setZip: Function;
  search: Function;
}

const ZipInput = ({ setZip, search }: ZipInputProps) => {
  const mapsContext = useContext(MapsContext);
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocationInterface | null>(null);
  const [loading, setLoading] = useState<boolean>();

  const getCurrentLocation = () => {
    if (mapsContext?.maps) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const latLng = new mapsContext.maps.LatLng(latitude, longitude);
          const geocoder = new mapsContext.maps.Geocoder();
          geocoder.geocode({ latLng }, (results: any, status: any) => {
            setCurrentLocation({ latitude, longitude });
            setLoading(false);
            if (status === "OK" && results.length) {
              const addressComponents = results[0].address_components.filter(
                (address: any) => address.types[0] === "postal_code"
              );
              if (addressComponents.length)
                setZip(addressComponents[0].short_name);
              search();
            }
          });
        },
        (error) => {
          console.log(error);
          setCurrentLocation(null);
          setLoading(false);
        }
      );
    }
  };

  return (
    <div className="w-full px-2 flex">
      {currentLocation === null ? (
        <input
          onChange={(event) => setZip(event.target.value)}
          placeholder="Zipcode"
          type="text"
          name="zipCode"
          className="w-full h-8 px-2 rounded"
        />
      ) : (
        <button
          onClick={() => {
            setCurrentLocation(null);
            setZip("");
          }}
          className="w-full rounded h-8 px-2 bg-blue-200 hover:bg-blue-300 flex justify-between items-center text-sm whitespace-nowrap"
        >
          Current Location
          <Cross strokeWidth="2" size={18} />
        </button>
      )}

      {/* Current Location Button */}
      <button
        onClick={() => getCurrentLocation()}
        className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center ml-2 flex-shrink-0"
      >
        {!loading ? (
          <Location strokeWidth={2} size={20} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-notch"
            className="w-5 h-5 spin text-gray-700"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ZipInput;
