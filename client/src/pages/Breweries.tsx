import useWindowSize from "../composables/useWindowSize";
import Map from "../components/ui/Map";
import Searchbar from "../components/ui/Searchbar";
import { useState } from "react";
import api from "../services/api";

const Breweries = () => {
  const { height } = useWindowSize();
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [breweries, setBreweries] = useState([]);
  const setCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
    });
  };

  const search = async () => {
    try {
      const response = await api.getBreweries({ name, zip });
      setBreweries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-full h-full flex"
      style={{ height: `calc(${height}px - 5rem` }}
    >
      <div className="w-full md:w-1/2 h-full overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 border-r relative z-10">
        <Searchbar
          search={search}
          setName={setName}
          setZip={setZip}
          setCurrentLocation={setCurrentLocation}
        />
        <div>{JSON.stringify(breweries)}</div>
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <Map breweries={breweries} />
      </div>
    </div>
  );
};

export default Breweries;
