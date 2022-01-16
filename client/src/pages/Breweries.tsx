import useWindowSize from "../hooks/useWindowSize";
import Map from "../components/ui/Map";
import Searchbar from "../components/ui/Searchbar";
import { useState, useEffect } from "react";
import { getBreweries } from "../services/api";
import BreweryCard from "../components/ui/BreweryCard";
import { BreweryInterface } from "../interfaces/global";
import Brewery from "../components/ui/Brewery";
import { MapsProvider } from "../contexts";

const Breweries = () => {
  const { height } = useWindowSize();
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [breweries, setBreweries] = useState<BreweryInterface[]>([]);
  const [currentBrewery, setCurrentBrewery] = useState<string | null>(null);

  const search = async () => {
    try {
      const response = await getBreweries({ name, zip });
      setBreweries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, [zip, name]);

  return (
    <MapsProvider>
      <div
        className="w-full h-full flex"
        style={{ height: `calc(${height}px - 5rem` }}
      >
        <div className="w-full md:w-7/12 h-full overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 border-r relative z-10 space-y-4">
          <Searchbar search={search} setName={setName} setZip={setZip} />
          {/* Breweries List */}
          <div className="w-full max-w-3xl space-y-4">
            {breweries.map((brewery, index) => {
              return (
                <BreweryCard
                  key={brewery.obdb_id}
                  {...brewery}
                  setCurrentBrewery={setCurrentBrewery}
                />
              );
            })}
          </div>
        </div>
        <div className="hidden md:block w-5/12 h-full">
          <Map breweries={breweries} setCurrentBrewery={setCurrentBrewery} />
        </div>
        {currentBrewery && (
          <Brewery id={currentBrewery} setCurrentBrewery={setCurrentBrewery} />
        )}
      </div>
    </MapsProvider>
  );
};

export default Breweries;
